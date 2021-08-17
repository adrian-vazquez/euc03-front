import { Component, OnInit } from '@angular/core';
import { Autorizador, RangosTasas } from 'src/app/shared/models/solicitudes-especiales.models';
import { SolicitudInversionesService } from '../../../services/solicitud-inverciones/solicitud-inversiones.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-solicitudes-especiales',
  templateUrl: './solicitudes-especiales.component.html',
  styleUrls: ['./solicitudes-especiales.component.scss']
})
export class SolicitudesEspecialesComponent implements OnInit {
  showAutorizadores = false;
  autorizadores: Autorizador[];
  rangosTasas: RangosTasas[];
  formSolicitud: FormGroup;
  constructor( private solicitudInversionesService:SolicitudInversionesService ) { }

  ngOnInit(): void {
    this.autorizadores = this.solicitudInversionesService.autorizadores;
    this.rangosTasas = this.solicitudInversionesService.rangosTasasTable;
    this.crearFormulario();
  }

  crearFormulario(){
    this.formSolicitud = new FormGroup({
      sucursal: new FormControl(''),
      nominaEjec: new FormControl(''),
      nombreEjec: new FormControl(''),
      numeroCliente: new FormControl(''),
      nombreCliente: new FormControl(''),
      contrato: new FormControl(''),
      tipoSolicitud: new FormControl(''),
      plazo: new FormControl(''),
      monto: new FormControl(''),
      tasa: new FormControl(''),
      justificacion: new FormControl(''),
      autorizador: new FormControl(''),
    })
  }

}
