import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  titulo = 'HERRAMIENTA CUENTAS E INVERSIONES';
  user = 'USER TEST (ADMIN)';
  images = [
    {path: 'assets/images/dummy/im1.jpg'},
    {path: 'assets/images/dummy/im2.jpg'},
    {path: 'assets/images/dummy/im3.jpg'}
  ];

  iconH = '';
  form: FormGroup;
  showImaCliente: number = -1;
  showBanner:boolean = true;
  showCliente:number = -1;
  keys: Array<string> = ['cliente','monto'];
  baseForm:any = {};
  valSaldo:string = '';
  valTipoPersona:string = '';
  monto:any;

  constructor(private formBuilder: FormBuilder) { 
    let formValues: any = {};
    this.keys.forEach(key => formValues[key] = [this.baseForm[key] ? this.baseForm[key] : '',Validators.required]);
    this.form = this.formBuilder.group(formValues);
  }

  ngOnInit(): void {
  }

  closeBanner(){
    this.showBanner = false;
  }

  valCliente(){
    this.showImaCliente=0;
  }

  valFormYes() {
    this.showCliente = 0;
  }

  valFormNo() {
    this.showCliente = 1;
  }

  getCliente(eve:any){
    let value = eve.target.value;
    if(value === '1'){
      Swal.fire({
        icon: 'warning',
        title: 'Alerta',
        text: 'Este cliente no puede participar'
      });
    }else{
      this.valCliente();
      this.valFormYes();
      this.valSaldo = '$12,345';
      this.valTipoPersona = 'PF';
    }
  }

  setSaldo(){
    this.monto = 12345;
  }

}
