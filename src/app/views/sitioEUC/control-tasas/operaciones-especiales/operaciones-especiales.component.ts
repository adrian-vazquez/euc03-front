import { Component, OnInit } from '@angular/core';
import { NgbDatepickerModule, NgbDateStruct, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
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

  columHeaderConsult = [
    { name: 'Estatus' },
    { name: 'Fecha Solicitud' },
    { name: 'Tipo' },
    { name: 'Contrato' },
    { name: 'Num.Cte' },
    { name: 'Sucursal-Div' },
    { name: 'Plazo' },
    { name: 'Monto' },
    { name: 'Tasa Solic' },
    { name: 'Fecha_Liber_UEC ' },
    { name: 'FolioUEC ' },
    { name: 'Observaciones' },
  ];

  data = [
    { 
      estatus: 'LIBERADA',
      fechaSolic: '21-03-21',
      tipo: 'UYD76878',
      contrato: '766865',
      numCte: '090988',
      sucursalDiv: '1300 Gualdalaja',
      plazo: '91',
      monto: '1339387',
      tasaSolic: '4.01',
      fechaLibeEUC: '21-05-21',
      folioEUC: '567',
      observaciones: 'no hay',
    },
    { 
      estatus: 'RECHAZADA',
      fechaSolic: '21-03-21',
      tipo: 'UYD76878',
      contrato: '766865',
      numCte: '090988',
      sucursalDiv: '1300 Gualdalaja',
      plazo: '91',
      monto: '1339387',
      tasaSolic: '4.01',
      fechaLibeEUC: '21-05-21',
      folioEUC: '567',
      observaciones: 'no hay',
    },
    { 
      estatus: 'LIBERADA',
      fechaSolic: '21-03-21',
      tipo: 'UYD76878',
      contrato: '766865',
      numCte: '090988',
      sucursalDiv: '1300 Gualdalaja',
      plazo: '91',
      monto: '1339387',
      tasaSolic: '4.01',
      fechaLibeEUC: '21-05-21',
      folioEUC: '567',
      observaciones: 'no hay',
    },
    { 
      estatus: 'CANCELADA',
      fechaSolic: '21-03-21',
      tipo: 'UYD76878',
      contrato: '766865',
      numCte: '090988',
      sucursalDiv: '1300 Gualdalaja',
      plazo: '91',
      monto: '1339387',
      tasaSolic: '4.01',
      fechaLibeEUC: '21-05-21',
      folioEUC: '567',
      observaciones: 'no hay',
    },
    { 
      estatus: 'LIBERADA',
      fechaSolic: '21-03-21',
      tipo: 'UYD76878',
      contrato: '766865',
      numCte: '090988',
      sucursalDiv: '1300 Gualdalaja',
      plazo: '91',
      monto: '1339387',
      tasaSolic: '4.01',
      fechaLibeEUC: '21-05-21',
      folioEUC: '567',
      observaciones: 'no hay',
    },
  ]
  catalogoEstatus = [];
  rangosTasas: RangosTasas[];
  model: NgbDateStruct;
  showSolicitudActualizar = false;
  showSolicitudCancelacion = false;
  showResult = false;
  constructor( 
                private catalogosService: CatalogosService,  
                private solicitudInversionesService: SolicitudInversionesService,
                private config: NgbModalConfig, 
                private modalService: NgbModal) { }

  ngOnInit(): void {
    this.obtenerCatalogos();
    this.rangosTasas = this.solicitudInversionesService.rangosTasasTable;
  }

  obtenerCatalogos() {
    this.catalogosService.obtenetCatEstatus().subscribe(data => {
      this.catalogoEstatus = data;
      console.log(this.catalogoEstatus);
    })
  }

  mostrarEdit() {
    this.showSolicitudActualizar = true;
    this.showSolicitudCancelacion = false;
  }

  showCancela() {
    this.showSolicitudActualizar = false;
    this.showSolicitudCancelacion = true;
    console.log('entro');

  }

  getTop() {
    window.scroll(0, 0);
  }

  buscar() {
    this.showResult = true;
  }


  cerrarTodo() {
    this.showSolicitudActualizar = false;
    this.showSolicitudCancelacion = false;
  }

  openXl(content) {
    this.modalService.open(content, { centered: true, size: 'xl', scrollable: true });
  }

  save(data) {
    this.modalService.dismissAll();
  }

}
