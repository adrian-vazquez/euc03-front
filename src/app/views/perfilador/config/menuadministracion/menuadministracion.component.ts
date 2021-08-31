import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudInversionesService } from 'src/app/services/solicitud-inverciones/solicitud-inversiones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menuadministracion',
  templateUrl: './menuadministracion.component.html',
  styleUrls: ['./menuadministracion.component.scss']
})
export class MenuadministracionComponent implements OnInit {

  numeroPaginas: number = 1;


  seleccion: string;
  mostrarTablas: Array<Boolean>;

  columnHeader = {
    fecha: 'Fecha',
    numerocliente: 'Número Cliente',
    contrato: 'Contrato',
    tasa: 'Tasa',
    plazo: 'Plazo',
    monto: 'Monto',
    soeid: 'SOEID',
    nomina: 'Nómina',
    rol: 'ROL',
    ejecutivo: 'Nombre de Ejecutivo',
    sirh: 'SIRH de Sucursal',
    gatnominal:'GAT Nominal',
    gatreal:'GAT Real',
    rendimientos:'Rendimientos',
    oferta: 'Oferta',
    campania: 'Campaña'
  };
  tableData: any[] = [
    {'fecha':'10/08/2021','numerocliente':'1234','contrato':'567890','tasa':'102','plazo':'91','monto':'12345','soeid':'JP38861','nomina':'67890','rol':'tester','ejecutivo':'Luis Pozo','sirh':'267','gatnominal':'1233','gatreal':'120','rendimientos':'345','oferta':'2','campania':'1'},
    {'fecha':'10/08/2021','numerocliente':'1234','contrato':'567890','tasa':'102','plazo':'91','monto':'12345','soeid':'JP38861','nomina':'67890','rol':'tester','ejecutivo':'Luis Pozo','sirh':'267','gatnominal':'1233','gatreal':'120','rendimientos':'345','oferta':'2','campania':'1'},
    {'fecha':'10/08/2021','numerocliente':'1234','contrato':'567890','tasa':'102','plazo':'91','monto':'12345','soeid':'JP38861','nomina':'67890','rol':'tester','ejecutivo':'Luis Pozo','sirh':'267','gatnominal':'1233','gatreal':'120','rendimientos':'345','oferta':'2','campania':'1'},
    {'fecha':'10/08/2021','numerocliente':'1234','contrato':'567890','tasa':'102','plazo':'91','monto':'12345','soeid':'JP38861','nomina':'67890','rol':'tester','ejecutivo':'Luis Pozo','sirh':'267','gatnominal':'1233','gatreal':'120','rendimientos':'345','oferta':'2','campania':'1'},
    {'fecha':'10/08/2021','numerocliente':'1234','contrato':'567890','tasa':'102','plazo':'91','monto':'12345','soeid':'JP38861','nomina':'67890','rol':'tester','ejecutivo':'Luis Pozo','sirh':'267','gatnominal':'1233','gatreal':'120','rendimientos':'345','oferta':'2','campania':'1'}
  ];

  showDataGrid:boolean = false;

  titulo:string = '';
  od:string = 'OFERTA DIGITAL'
  cp:string = 'CONSULTAS DE PDFs DESDE EL PERFILADOR';

  cambio:number = 0;

  active:boolean = false;

  form:FormGroup;
  keys: Array<string> = ['cliente','monto', 'numcliente', 'nomcliente','contrato'];
  baseForm:any = {};

  constructor(private formBuilder: FormBuilder,public SolicitudInversionesService: SolicitudInversionesService) {
    let formValues: any = {};
    this.keys.forEach(key => formValues[key] = [this.baseForm[key] ? this.baseForm[key] : '',Validators.required]);
    this.form = this.formBuilder.group(formValues);
   }

  ngOnInit(): void {
    this.valorCambia();
  }

  valorCambia(){
    if(this.cambio == 0){
      this.titulo = this.od;
    }else{
      this.titulo = this.cp;
    }
  }

  abrirmodal(){
    this.active = true;
  }

  cerrarPopup(){
    this.active = false;
  }

  buscaRegistros(){
    this.showDataGrid = true;
  }

  submit(){
    Swal.fire({
      title: 'Confirmación',
      text: "¿Estás seguro de continuar con la operación?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Hecho',
          'El registro ha sido actualizado',
          'success'
        )
      }
    });
  }

}

