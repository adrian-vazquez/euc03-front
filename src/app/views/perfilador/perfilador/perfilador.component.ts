import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfilador',
  templateUrl: './perfilador.component.html',
  styleUrls: ['./perfilador.component.scss']
})
export class PerfiladorComponent implements OnInit {

  titulo = 'HERRAMIENTA CUENTAS E INVERSIONES';
  user = 'USER TEST (ADMIN)';
 
  active:boolean = false;

  iconH = 'assets/images/dummy/ih.jpg';
  form: FormGroup;
  showImaCliente: number = -1;
  showBanner:boolean = true;
  showCliente:number = -1;
  showNoCliente:number = -1;
  showTablaCliente:number = -1;
  keys: Array<string> = ['cliente','monto', 'numcliente', 'nomcliente','contrato'];
  baseForm:any = {};
  valSaldo:string = '';
  valTipoPersona:string = '';
  monto:any;
  contador:number=1;
  muestrabtn:number=-1;

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

  valNoCliente(){
    this.showImaCliente=0;
  }

  valFormYes() {
    this.showCliente = 0;
  }

  valFormNo() {
    this.showCliente = 1;
    this.showImaCliente = 1;
    this.valSaldo = '$25,000';
    this.valTipoPersona = 'N/A';
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
    let aux = this.valSaldo.split('$');
    let saldo = aux[1];

    this.monto = saldo;
  }

  abrirmodal(){
    this.active = true;
  }

  cerrarPopup(){
    this.active = false;
  }

  calcular(){
    if(this.showCliente==1){
      console.log('Cambio a tabla NO cliente');
      this.showImaCliente = 2;
      this.showCliente = 2;

    }else{
      console.log('Cambio a tabla Cliente');
      this.showTablaCliente=1;
    }
  }

  onSubmit(){
    Swal.fire({
      title: 'Confirmaci??n',
      text: "??Deseas guardar la informaci??n?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '??Guardado!',
          'Se guard?? el registro con ??xito',
          'success'
        );
        this.active = false;
      }
    })
  }

  siguentepaso(eve:any){
    this.contador+=1;
    if(this.contador%2==0){
      this.muestrabtn = 1;
    }else{
      this.muestrabtn = 0;
    }
    console.log(eve.target.value);
  }

}
