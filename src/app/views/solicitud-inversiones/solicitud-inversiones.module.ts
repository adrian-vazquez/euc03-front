import { GenericTableAppAppModule } from './../../@generic-table-app/generic-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesEspecialesComponent } from './solicitudes-especiales/solicitudes-especiales.component';
import { VistaEjecutivoComponent } from './vista-ejecutivo/vista-ejecutivo.component';
import { SolicitudEspecialRoutingModule } from './solicitud-inversiones.routing.module';
import { SharedModule } from '../../shared/shared.module';

const COMPONENTS = [
  SolicitudesEspecialesComponent,
  VistaEjecutivoComponent
]


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SolicitudEspecialRoutingModule,
    SharedModule,
    GenericTableAppAppModule
  ]
})
export class SolicitudInversionesModule { }
