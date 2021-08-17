import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cetes',
  templateUrl: './cetes.component.html',
  styleUrls: ['./cetes.component.scss']
})
export class CetesComponent implements OnInit {

  formCetesDoc:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.crearFormSubirCetes();
  }

  crearFormSubirCetes(){
    this.formCetesDoc = new FormGroup({
      fileCurva: new FormControl(''),
      fechaInicial: new FormControl(''),
      fechaFinal: new FormControl(''),
    })
  }

  subirCetes(){
    console.log(this.formCetesDoc.value)
  }

}
