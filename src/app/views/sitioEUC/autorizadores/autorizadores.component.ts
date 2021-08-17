import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autorizadores',
  templateUrl: './autorizadores.component.html',
  styleUrls: ['./autorizadores.component.scss']
})
export class AutorizadoresComponent implements OnInit {

  active:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  abrirmodal(){
    this.active = true;
  }

  cerrarPopup(){
    this.active = false;
  }

}
