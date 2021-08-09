import { Component, OnInit } from '@angular/core';
import { Autorizador, RangosTasas } from 'src/app/shared/models/solicitudes-especiales.models';
import { SolicitudInversionesService } from '../../../services/solicitud-inverciones/solicitud-inversiones.service';

@Component({
  selector: 'app-solicitudes-especiales',
  templateUrl: './solicitudes-especiales.component.html',
  styleUrls: ['./solicitudes-especiales.component.scss']
})
export class SolicitudesEspecialesComponent implements OnInit {
  showAutorizadores = false;
  autorizadores: Autorizador[];
  rangosTasas: RangosTasas[];
  constructor( private solicitudInversionesService:SolicitudInversionesService ) { }

  ngOnInit(): void {
    this.autorizadores = this.solicitudInversionesService.autorizadores;
    this.rangosTasas = this.solicitudInversionesService.rangosTasasTable;
  }

}
