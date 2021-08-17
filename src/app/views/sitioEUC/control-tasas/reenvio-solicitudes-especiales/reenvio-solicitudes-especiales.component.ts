import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reenvio-solicitudes-especiales',
  templateUrl: './reenvio-solicitudes-especiales.component.html',
  styleUrls: ['./reenvio-solicitudes-especiales.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ReenvioSolicitudesEspecialesComponent implements OnInit {
  columHeaderDummy = [
    { name: '' },
    { name: 'Estatus' },
    { name: 'Fecha solicitud' },
    { name: 'Tipo de oferta' },
    { name: 'Contrato' },
    { name: 'Num.Cte.' },
    { name: 'Nombre Cte.' },
    { name: 'Nomi. eje' },
    { name: 'Nombre Ejec.' },
    { name: 'Sucursal Div.' },
    { name: 'Plazo' },
    { name: 'Monto' },
    { name: 'Tasa_Solic' },
    { name: 'Autorizador' },
  ];

  tableData = [
    {
      estatus: 'SOLICITADA',
      fechaSolicitud: '21-04-12 22:10',
      tipoOferta: 'AUTCE656',
      contrato: '7676776667',
      numCte: '9876576',
      nombreCte: 'Miguel Cruz Bucio',
      nomiEjec: '1563782',
      nombreEjec: 'Miguel Cruz Bucio',
      sucursalDiv: '130 Guadalajara Jal.',
      plazo: '90',
      monto: '1334567',
      tasaSolic: '3.04 %',
      autorizador: 'Miguel cruz, Juan Peréz',
    },
  ];
  formSolicitudTasa: FormGroup;

  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.formSolicitudTasa = new FormGroup({
      numSucursalOperadora: new FormControl(''),
      nombreCliente: new FormControl(''),
      numCliente: new FormControl(''),
      numContrato: new FormControl(''),
      monto: new FormControl(''),
      plazo: new FormControl(''),
      tasaBrutaSolic: new FormControl(''),
      justificacion: new FormControl(''),
      nombreSolic: new FormControl(''),
  })
  }


  save(data){
    this.modalService.dismissAll();
  }

  open(content) {
    this.modalService.open(content);
  }
}