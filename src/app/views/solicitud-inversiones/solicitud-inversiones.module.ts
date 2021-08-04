import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesEspecialesComponent } from './solicitudes-especiales/solicitudes-especiales.component';
import { VistaEjecutivoComponent } from './vista-ejecutivo/vista-ejecutivo.component';
import { SolicitudEspecialRoutingModule } from './solicitud-inversiones.routing.module';

const COMPONENTS = [
  SolicitudesEspecialesComponent,
  VistaEjecutivoComponent
]


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SolicitudEspecialRoutingModule
  ]
})
export class SolicitudInversionesModule { }
