import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { environment } from './../environments/environment'
import { AppGlobals } from './../app/app.globals';



@Injectable({
    providedIn: 'root'
})
export class RestAppServices {

    cargada = false;

    constructor(private http: HttpClient,public globals: AppGlobals) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.globals.get("token")
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
