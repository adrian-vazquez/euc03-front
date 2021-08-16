import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accuracy',
  templateUrl: './accuracy.component.html',
  styleUrls: ['./accuracy.component.scss']
})
export class AccuracyComponent implements OnInit {

  iconCarga:string = 'assets/images/dummy/escudo.png';
  showDataTable:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  buscaRegistros(){
    this.showDataTable = true;
  }

  onSubmit(){
    Swal.fire({
      title: 'Confirmación',
      text: "¿Deseas guardar la información?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Guardado!',
          'Se guardó el registro con éxito',
          'success'
        )
      }
    })
  }

}
