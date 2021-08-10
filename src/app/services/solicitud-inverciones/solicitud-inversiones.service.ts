import { Injectable } from '@angular/core';
import { Autorizador, RangosTasas } from 'src/app/shared/models/solicitudes-especiales.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudInversionesService {
  autorizadores:Autorizador[] = [
    {name: 'Miguel Cruz', id: 1 },
    {name: 'Juan Galindo', id: 2 },
    {name: 'Jaime Pérez', id: 3 },
    {name: 'Liliana Díaz', id: 4 },
    {name: 'Karina Vázquez', id: 5  },
  ];

  rangosTasasTable: RangosTasas[]  = [
    { rango: '1-6', tasa: '1.31' },
    { rango: '7-27', tasa: '1.31' },
    { rango: '28-33', tasa: '1.31' },
    { rango: '34-38', tasa: '1.31' },
    { rango: '39-51', tasa: '1.31' },
    { rango: '52-62', tasa: '1.31' },
    { rango: '63-89', tasa: '2.64' },
    { rango: '90-135', tasa: '2.64' },
    { rango: '136-181', tasa: '2.64' },
    { rango: '182-365', tasa: '2.64' },
    { rango: '366-377', tasa: '2.64' },
    { rango: '378-378', tasa: '2.64' },
  ];
  tableData: any[] = [
    { id: 1, bookName: 'Are You There, Vodka?', price: 200, author: 'A' },
    {
      id: 2,
      bookName: 'The Devil Wears Prada',
      price: 100,
      cancel: true,
      button: '',
      author: 'A',
      
    },
    {
      id: 3,
      bookName: 'The Curious Incident of the Dog',
      price: 400,
      cancel: true,
      author: 'B'
    },
    {
      id: 4,
      bookName: 'How to Win Friends and Influence',
      price: 300,
      cancel: true,
      author: 'B'
    },
    {
      id: 5,
      bookName: 'Cloudy with a Chance of Meatballs',
      price: 200,
      cancel: true,
      author: 'C'
    }
  ];

  constructor() { }
  
  obtenerAutorizadores(){
    return this.autorizadores;
  }
  
  obtenerRangosTasas(){
    return this.rangosTasasTable;
  }

  getList(): Observable<any> {
    return of(this.tableData);
  }
}
