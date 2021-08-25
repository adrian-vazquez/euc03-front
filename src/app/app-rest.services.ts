import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { environment } from './../environments/environment'
import Swal from 'sweetalert2';
import { CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';
//import { AppGlobal } from './../app/app.globals';



@Injectable({
    providedIn: 'root'
})
export class RestAppServices {
    //Se agregan parametros para peticiones REST
    private parametros: any;
    private error: any;
    private hideError: any;
    url: any = environment.url;
    //------------------------------------------


    cargada = false;

    constructor(private http: HttpClient) {
        //Se agrega validacion para peticiones REST
        if(environment.production){
            this.url = this.generaUrl();
        }
        //----------------------------------------
     }

     //Se genera funcion para generar url
    generaUrl(){
        if(!!window.location.pathname && window.location.pathname !== '/'){
            console.log("Location ",window.origin);
            return window.origin;
        }
    }

    //Se crea array para peticiones REST de la aplicacion
    private catalogo: any = [
        {
            nombre:'Rest',
            paths: [{
                nombre: 'rest',
                ruta: '',
                paths: [
                    { nombre:'pdf-ver', ruta:'euc03-web/rest/demo', metodo:'GET' }
                ]
            }]
        }
    ];
    //-------------------------------------------------------------------


    //Se crea funcion para peticion REST
    peticion(datosPeticion: any){
        this.error = datosPeticion.error;
        this.hideError = datosPeticion.hideError;
        let modulo = this.buscaPath(this.catalogo, datosPeticion.modulo);
        let endPoint: string = this.url + '/';
        if(datosPeticion.subModulo !== undefined) {
            modulo = this.buscaPath(modulo.paths, datosPeticion.subModulo);
            endPoint += modulo.ruta;
        }
        if(datosPeticion.operacion !== undefined && datosPeticion.operacino !== ''){
            modulo = this.buscaPath(modulo.paths, datosPeticion.operacion);
            endPoint += modulo.ruta;
        }
        if(datosPeticion.tipo === 'FORM'){
            this.parametros = new HttpParams();
            for(const prop in datosPeticion.parametros){
                if(Object.prototype.hasOwnProperty.call(datosPeticion.parametros, prop)) {
                    this.parametros = this.parametros.set(prop, datosPeticion.parametros[prop]);
                }
            }
        } else {
            this.parametros = datosPeticion.parametros;
        }
        if(datosPeticion.pathAdicional){
            endPoint += datosPeticion.pathAdicional;
        }
        switch(modulo.metodo){
            case 'GET':
                this.getRequest(endPoint, datosPeticion.callBack);
                break;
            case 'POST':
                this.postRequest(endPoint, datosPeticion.callBack);
                break;
            default:
                console.log('Metodo http invalido');
                break;
        }
    }
    //--------------------------------------------------------------------

    //Funcion para buscar path de api REST
    buscaPath(modulos: any, nombre: string):any{
        let modulo:any;
        for(let i = 0; i < modulos.length; i++){
            if(modulos[i].nombre === nombre){
                modulo = modulos[i];
            }
        }
        return modulo;
    }
    //--------------------------------------

    //Funcion para peticiones GET REST
    getRequest(endPoint: string, callBack: any): void {
        this.http.get<any>(endPoint, { params: this.parametros}).
            pipe(catchError(e => {
                if(e.error?.code != 404)
                    Swal.fire('Error', e.error?.message || 'Error con los servicios','error');
                return throwError(e);
            })).subscribe((data:any) => {
                let respData = data && data.resp ? data.resp : data
                callBack(respData)
            },this.error);
    }
    //----------------------------------------------

    //Funcion para peticiones GET REST
    postRequest(endPoint: string, callBack: any): void {
        this.http.post<any>(endPoint, this.parametros ).
            pipe(catchError(e => {
                if(!this.hideError)
                    Swal.fire('Error', e.error?.message || 'Error con los servicios','error');
                return throwError(e);
            })).subscribe((data:any) => {
                let respData = data && data.resp ? data.resp : data
                callBack(respData)
            },this.error);
    }
    //----------------------------------------------

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })

    };
    //Crea una lista
    getReporteVistaEjecutivo(nomina: number, cliente: number): Observable<any> {

        //const urlConsul = "../../../assets/data/ejecutivo.json"

        const urlConsul = environment.restAPI + "vistaejecutivo/autotasas/" + nomina + "/" + cliente;
        console.log("dentro de la consulta back"+urlConsul);
        return this.http.get<any>(urlConsul, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    cancelaAutoTasa(autoTasaId: number, nomina: number, ejecutivo: number, justificacion: string): Observable<any> {

        //const urlConsul = "../../../assets/data/ejecutivo.json"

        const urlConsul = environment.restAPI + "vistaejecutivo/autotasas/cancel/" + autoTasaId;
        console.log("dentro de la consulta back"+urlConsul);
        return this.http.post<any>(urlConsul,
            {
                nomina: nomina,
                ejecutivo: ejecutivo,
                justificacion: justificacion
            },
            this.httpOptions )
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }


    handleError(error) {
        let errorMessage = '';
        if (error.status == 401) {
            alert( "Su sesión termino.");
            document.location.href = "/logout.html";
            return;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}
