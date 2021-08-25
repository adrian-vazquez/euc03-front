import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-especialporta',
  templateUrl: './especialporta.component.html',
  styleUrls: ['./especialporta.component.scss']
})
export class EspecialportaComponent implements OnInit {

  titulo = '';
  cp:string = 'Campañas Pagaré';
  pe:string = 'Portabilidad Especial de Nónima';
  cambio:number = 1;
  form:FormGroup;
  keys: Array<string> = ['cliente','monto', 'numcliente', 'nomcliente','contrato'];
  baseForm:any = {};
  plazo:string = '93 días';
  vigencia:string = 'Fecha1 a Fecha2';
  tasa:string = '4.01%';

  constructor(private formBuilder: FormBuilder) {
    let formValues: any = {};
    this.keys.forEach(key => formValues[key] = [this.baseForm[key] ? this.baseForm[key] : '',Validators.required]);
    this.form = this.formBuilder.group(formValues);
   }

  ngOnInit(): void {
    this.vistaCambio();
  }

  vistaCambio(){
    if(this.cambio==0){
      this.titulo = this.cp;
    }else{
      this.titulo = this.pe;
    }
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
          'El registro ha sido aplicado',
          'success'
        )
      }
    });
  }

}
