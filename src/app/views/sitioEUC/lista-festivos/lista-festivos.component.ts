import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificacionesService } from '../../../services/notificaciones.service';

@Component({
  selector: 'app-lista-festivos',
  templateUrl: './lista-festivos.component.html',
  styleUrls: ['./lista-festivos.component.scss']
})
export class ListaFestivosComponent implements OnInit {

  columHeader = [
    {name:'Descripción'},
    {name:'Fecha'},
    {name:''}
  ];

  data = [
    { 
      descripcion: 'Inicio del Año',
      fecha: '01-01',
      actions: false
    },
    { 
      descripcion: 'Día de la Independencia',
      fecha: '16-09',
      actions: false
    },
    { 
      descripcion: 'Día de Muertos',
      fecha: '02-11',
      actions: false
    },
    { 
      descripcion: 'Día de Navidad',
      fecha: '25-12',
      actions: false
    },
    { 
      descripcion: 'Aniversario de Revolución Mexicana',
      fecha: '20-11-2021',
      actions: true
    },
    { 
      descripcion: 'Jueves Santo',
      fecha: '01-04-2021',
      actions: true
    },
    { 
      descripcion: 'Natalicio Benito Juárez',
      fecha: '20-04-2021',
      actions: true
    },
  ]

  constructor( private modalService: NgbModal, private _NS: NotificacionesService) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content);
  }

  save(data){
    this.modalService.dismissAll();
  }

  delete(){
    this._NS.confirmarAccion('¿desea eliminar este registro?', 'Eliminar', 'Aceptar', 'Cancelar' );
  }

}
