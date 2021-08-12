import { GenericTableAppAppModule } from './../../@generic-table-app/generic-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesEspecialesComponent } from './solicitudes-especiales/solicitudes-especiales.component';
import { VistaEjecutivoComponent } from './vista-ejecutivo/vista-ejecutivo.component';
import { SolicitudEspecialRoutingModule } from './solicitud-inversiones.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeSolicitudInversionesComponent } from './home-solicitud-inversiones/home-solicitud-inversiones.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  SolicitudesEspecialesComponent,
  VistaEjecutivoComponent,
  HomeSolicitudInversionesComponent
]


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SolicitudEspecialRoutingModule,
    SharedModule,
    GenericTableAppAppModule
  ]
})
export class SolicitudInversionesModule { }
