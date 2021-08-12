import { Component, OnInit } from '@angular/core';
import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CatalogosService } from '../../../../services/catalogos.service';
import { SolicitudInversionesService } from '../../../../services/solicitud-inverciones/solicitud-inversiones.service';
import { RangosTasas } from '../../../../shared/models/solicitudes-especiales.models';


@Component({
  selector: 'app-operaciones-especiales',
  templateUrl: './operaciones-especiales.component.html',
  styleUrls: ['./operaciones-especiales.component.scss'],
})
export class OperacionesEspecialesComponent implements OnInit {
  columHeaderDummy = [
    { name: '' },
    { name: 'Asig:' },
    { name: 'Oper:' },
    { name: 'Estatus' },
    { name: 'FechaSolic' },
    { name: 'Tipo Oferta' },
    { name: 'Contrato' },
    { name: 'Num.Cte.' },
    { name: 'Nombre Cte.' },
    { name: 'Sucursal-Div.' },
    { name: 'Plazo' },
    { name: 'Monto' },
    { name: 'Tasa_Solic' },
    { name: 'Fecha-Auto.' },
    { name: 'Autorizador' },
    { name: 'Fecha.Liber' },
    { name: 'Folio' },
    { name: 'Observacion' },
  ];

  tableData = [
    {
      minutosLlegada: 4,
      asig: 'C286887',
      oper: 'C286887',
      estatus: 'SOLICITADA',
      fechaSolicitud: '21-04-12 22:10',
      tipoOferta: 'RETE656',
      contrato: '7676776667',
      numCte: '9876576',
      nombreCte: 'Miguel Cruz Bucio',
      sucursalDiv: '130 jalisco',
      plazo: '90',
      monto: '1334567',
      tasaSolic: '3.04 %',
      fechaAuto: '21-08-21',
      autorizador: 'Miguel cruz',
      fechaLiber: '21-08-21',
      folio: '0',
      observacion: 'no hay'
    },
    {
      minutosLlegada: 2,
      asig: 'GBKSAD8',
      oper: 'C286887',
      estatus: 'SOLICITADA',
      fechaSolicitud: '21-04-12 22:10',
      tipoOferta: 'RETE656',
      contrato: '7676776667',
      numCte: '9876576',
      nombreCte: 'Miguel Cruz Bucio',
      sucursalDiv: '130 jalisco',
      plazo: '90',
      monto: '1334567',
      tasaSolic: '3.04 %',
      fechaAuto: '21-08-21',
      autorizador: 'Miguel cruz',
      fechaLiber: '21-08-21',
      folio: '0',
      observacion: 'no hay'
    },
    {
      minutosLlegada: 2,
      asig: 'LKS9787',
      oper: 'C286887',
      estatus: 'SOLICITADA',
      fechaSolicitud: '21-04-12 22:10',
      tipoOferta: 'RETE656',
      contrato: '7676776667',
      numCte: '9876576',
      nombreCte: 'Miguel Cruz Bucio',
      sucursalDiv: '130 jalisco',
      plazo: '90',
      monto: '1334567',
      tasaSolic: '3.04 %',
      fechaAuto: '21-08-21',
      autorizador: 'Miguel cruz',
      fechaLiber: '21-08-21',
      folio: '0',
      observacion: 'no hay'
    },
    {
      minutosLlegada: 2,
      asig: 'P97642',
      oper: 'C286887',
      estatus: 'SOLICITADA',
      fechaSolicitud: '21-04-12 22:10',
      tipoOferta: 'RETE656',
      contrato: '7676776667',
      numCte: '9876576',
      nombreCte: 'Miguel Cruz Bucio',
      sucursalDiv: '130 jalisco',
      plazo: '90',
      monto: '1334567',
      tasaSolic: '3.04 %',
      fechaAuto: '21-08-21',
      autorizador: 'Miguel cruz',
      fechaLiber: '21-08-21',
      folio: '0',
      observacion: 'no hay'
    },
    {
      minutosLlegada: 2,
      asig: 'PIEU88',
      oper: 'C286887',
      estatus: 'SOLICITADA',
      fechaSolicitud: '21-04-12 22:10',
      tipoOferta: 'RETE656',
      contrato: '7676776667',
      numCte: '9876576',
      nombreCte: 'Miguel Cruz Bucio',
      sucursalDiv: '130 jalisco',
      plazo: '90',
      monto: '1334567',
      tasaSolic: '3.04 %',
      fechaAuto: '21-08-21',
      autorizador: 'Miguel cruz',
      fechaLiber: '21-08-21',
      folio: '0',
      observacion: 'no hay'
    },
    {
      minutosLlegada: 2,
      asig: 'C286887',
      oper: 'C286887',
      estatus: 'SOLICITADA',
      fechaSolicitud: '21-04-12 22:10',
      tipoOferta: 'RETE656',
      contrato: '7676776667',
      numCte: '9876576',
      nombreCte: 'Miguel Cruz Bucio',
      sucursalDiv: '130 jalisco',
      plazo: '90',
      monto: '1334567',
      tasaSolic: '3.04 %',
      fechaAuto: '21-08-21',
      autorizador: 'Miguel cruz',
      fechaLiber: '21-08-21',
      folio: '0',
      observacion: 'no hay'
    },
  ];
  catalogoEstatus = [];
  rangosTasas: RangosTasas[];
  model: NgbDateStruct;
  showSolicitudActualizar = false;
  showSolicitudCancelacion = false;
  constructor(private catalogosService: CatalogosService, private solicitudInversionesService:SolicitudInversionesService) { }

  ngOnInit(): void {
    this.obtenerCatalogos();
    this.rangosTasas = this.solicitudInversionesService.rangosTasasTable;
  }

  obtenerCatalogos(){
    this.catalogosService.obtenetCatEstatus().subscribe(data => {
      this.catalogoEstatus = data;
      console.log(this.catalogoEstatus);
    })
  }

  mostrarEdit(){
    this.showSolicitudActualizar = true;
    this.showSolicitudCancelacion = false;
  }

  showCancela(){
    this.showSolicitudActualizar = false;
    this.showSolicitudCancelacion = true;
    console.log('entro');
    
  }

  getTop() {
      window.scroll(0,0);
  }

  cerrarTodo(){
    this.showSolicitudActualizar = false;
    this.showSolicitudCancelacion = false;
  }

}
