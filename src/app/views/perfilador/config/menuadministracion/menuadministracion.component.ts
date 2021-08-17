import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudInversionesService } from 'src/app/services/solicitud-inverciones/solicitud-inversiones.service';

@Component({
  selector: 'app-menuadministracion',
  templateUrl: './menuadministracion.component.html',
  styleUrls: ['./menuadministracion.component.scss']
})
export class MenuadministracionComponent implements OnInit {

  columnHeader = {
    fecha: 'Fecha',
    numerocuenta: 'Número Cuenta',
    contrato: 'Contrato',
    tasa: 'Tasa',
    plazo: 'Plazo',
    monto: 'Monto',
    nomina: 'Nómina',
    ejecutivo: 'Ejecutivo',
    sirh: 'SIRH'
  };
  tableData: any[];

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
    this.valOperacionTabla();
  }

  valOperacionTabla(){
    let aux = [
      {'fecha':'10/08/2021','numerocuenta':'1234','contrato':'567890','tasa':'102','plazo':'91','monto':'12345','nomina':'67890','ejecutivo':'Luis Pozo','sirh':'267'},
      {'fecha':'10/08/2021','numerocuenta':'1234','contrato':'567890','tasa':'102','plazo':'91','monto':'12345','nomina':'67890','ejecutivo':'Luis Pozo','sirh':'267'},
      {'fecha':'10/08/2021','numerocuenta':'1234','contrato':'567890','tasa':'102','plazo':'91','monto':'12345','nomina':'67890','ejecutivo':'Luis Pozo','sirh':'267'},
      {'fecha':'10/08/2021','numerocuenta':'1234','contrato':'567890','tasa':'102','plazo':'91','monto':'12345','nomina':'67890','ejecutivo':'Luis Pozo','sirh':'267'},
      {'fecha':'10/08/2021','numerocuenta':'1234','contrato':'567890','tasa':'102','plazo':'91','monto':'12345','nomina':'67890','ejecutivo':'Luis Pozo','sirh':'267'}
    ];
    this.tableData = aux;
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
}

