import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accuracy',
  templateUrl: './accuracy.component.html',
  styleUrls: ['./accuracy.component.scss']
})
export class AccuracyComponent implements OnInit {

  iconCarga:string = 'assets/images/dummy/escudo.png';
  showDataTable:boolean = true;
  showRegistrosAlmacenados = false;

  tableHeader = [
    {nombre: 'Id'},
    {nombre: 'Folio'},
    {nombre: 'Fecha'},
    {nombre: 'Suc.'},
    {nombre: 'Monto'},
    {nombre: 'Plaza'},
    {nombre: 'Tasa'},
    {nombre: 'Estatus'},
    {nombre: 'Num. Cte'},
    {nombre: 'Nom. Cte'},
    {nombre: 'Contrato'},
    {nombre: 'Operador'},
    {nombre: 'ID Oferta'},
    {nombre: 'NomEjec'},
    {nombre: 'Observa'},
    {nombre: 'SOIED Resp:'},
  ];

    tableValue = [
      {  
        id: 12345,
        folio: 92,
        fecha: '16/06/2021',
        sucursal: 623,
        monto: '$198,910.00',
        plaza: 91,
        tasa: 4.05,
        estatus: 1,
        numeroCte: 78383500,
        nombreCte: 'Miguel Cruz',
        contrato: 7949488566,
        operador: 'CZ20497',
        idOferta: 'PTUSDO12021',
        nombreEjec: 'Juan López',
        observaciones: 'no hay',
        SOIEDResp: '',
      },
      {  
        id: 12345,
        folio: 92,
        fecha: '16/06/2021',
        sucursal: 623,
        monto: '$198,910.00',
        plaza: 91,
        tasa: 4.05,
        estatus: 1,
        numeroCte: 78383500,
        nombreCte: 'Miguel Cruz',
        contrato: 7949488566,
        operador: 'CZ20497',
        idOferta: 'PTUSDO12021',
        nombreEjec: 'Juan López',
        observaciones: 'no hay',
        SOIEDResp: '',
      },
      {  
        id: 12345,
        folio: 92,
        fecha: '16/06/2021',
        sucursal: 623,
        monto: '$198,910.00',
        plaza: 91,
        tasa: 4.05,
        estatus: 1,
        numeroCte: 78383500,
        nombreCte: 'Miguel Cruz',
        contrato: 7949488566,
        operador: 'CZ20497',
        idOferta: 'PTUSDO12021',
        nombreEjec: 'Juan López',
        observaciones: 'no hay',
        SOIEDResp: '',
      },
    ]
    
    tableHeaderTimeLinnes = [
      {nombre: 'Id'},
      {nombre: 'Asignado'},
      {nombre: 'Operado Por'},
      {nombre: 'Contrato'},
      {nombre: 'Nume.Cte.'},
      {nombre: 'Estatus'},
      {nombre: 'Fecha_Captura'},
      {nombre: 'Fecha_Autoriza'},
      {nombre: 'Fecha_Estatus'},
      {nombre: 'Observa'},
      {nombre: 'Oferta'},
      {nombre: 'SOIED Resp:'},
    ];
    tableValueTimeLiness = [
      {  
        id: 12345,
        asignado: 'SR55081',
        operadoPor: 'SR55081',
        contrato: 7949488566,
        numeroCte: 6748392,
        estatus: '1',
        fecha_Captura: '16/07/2021 08:56:09 a.m',
        fecha_Autoriza: '17/07/2021 08:56:09 a.m',
        fecha_Estatus: '18/07/2021 08:56:09 a.m',
        observa: 'PTUS3209',
        oferta: '',
        SOIEDResp: 'SR6559',
      },
      {  
        id: 12345,
        asignado: 'SR55081',
        operadoPor: 'SR55081',
        contrato: 7949488566,
        numeroCte: 6748392,
        estatus: '1',
        fecha_Captura: '16/07/2021 08:56:09 a.m',
        fecha_Autoriza: '17/07/2021 08:56:09 a.m',
        fecha_Estatus: '18/07/2021 08:56:09 a.m',
        observa: 'PTUS3209',
        oferta: '',
        SOIEDResp: 'SR6559',
      },
      {  
        id: 12345,
        asignado: 'SR55081',
        operadoPor: 'SR55081',
        contrato: 7949488566,
        numeroCte: 6748392,
        estatus: '1',
        fecha_Captura: '16/07/2021 08:56:09 a.m',
        fecha_Autoriza: '17/07/2021 08:56:09 a.m',
        fecha_Estatus: '18/07/2021 08:56:09 a.m',
        observa: 'PTUS3209',
        oferta: '',
        SOIEDResp: 'SR6559',
      },
    
    ]
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
        this.showRegistrosAlmacenados = true;
        this.showDataTable = false;
        Swal.fire(
          '¡Guardado!',
          'Se guardó el registro con éxito',
          'success'
        )
      }
    })
  }

}
