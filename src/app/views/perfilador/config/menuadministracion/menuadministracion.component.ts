import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menuadministracion',
  templateUrl: './menuadministracion.component.html',
  styleUrls: ['./menuadministracion.component.scss']
})
export class MenuadministracionComponent implements OnInit {

  titulo:string = '';
  od:string = 'OFERTA DIGITAL'
  cp:string = 'CONSULTAS DE PDFs DESDE EL PERFILADOR';

  cambio:number = 1;

  active:boolean = false;

  form:FormGroup;
  keys: Array<string> = ['cliente','monto', 'numcliente', 'nomcliente','contrato'];
  baseForm:any = {};

  constructor(private formBuilder: FormBuilder) {
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
}
