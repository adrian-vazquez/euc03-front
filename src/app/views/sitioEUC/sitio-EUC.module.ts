import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlTasasComponent } from './control-tasas/control-tasas.component';
import { ReportesEUCComponent } from './reportes-euc/reportes-euc.component';
import { SitioEUCRoutingModule } from './sitio-EUC.routing.mudule';
import { HomeComponent } from './home/home.component';
import { OperacionesEspecialesComponent } from './control-tasas/operaciones-especiales/operaciones-especiales.component';
import { ReenvioSolicitudesEspecialesComponent } from './control-tasas/reenvio-solicitudes-especiales/reenvio-solicitudes-especiales.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
    ControlTasasComponent,
    ReportesEUCComponent,
    OperacionesEspecialesComponent,
    HomeComponent,
    ReenvioSolicitudesEspecialesComponent
  ]
  
  
  @NgModule({
    declarations: [...COMPONENTS],
    imports: [
      CommonModule,
      SitioEUCRoutingModule,
      NgbModule,
      ReactiveFormsModule
    ]
  })
export class SitioEUCModule { }