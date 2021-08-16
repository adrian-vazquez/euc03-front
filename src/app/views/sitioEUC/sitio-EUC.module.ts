import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlTasasComponent } from './control-tasas/control-tasas.component';
import { ReportesEUCComponent } from './reportes-euc/reportes-euc.component';
import { SitioEUCRoutingModule } from './sitio-EUC.routing.mudule';
import { HomeComponent } from './home/home.component';
import { AutorizadoresComponent } from './autorizadores/autorizadores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GerenciareporteacumuladoComponent } from './gerenciareporteacumulado/gerenciareporteacumulado.component';
import { OperacionesEspecialesComponent } from './control-tasas/operaciones-especiales/operaciones-especiales.component';
import { ReenvioSolicitudesEspecialesComponent } from './control-tasas/reenvio-solicitudes-especiales/reenvio-solicitudes-especiales.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CampanasOnlineComponent } from './campanas-online/campanas-online.component';
import { GenericTableAppAppModule } from 'src/app/@generic-table-app/generic-table.module';
import { CetesComponent } from './control-tasas/cetes/cetes.component';
import { KpiComponent } from './control-tasas/kpi/kpi.component';
import { CompletarInformacionKpiComponent } from './control-tasas/completar-informacion-kpi/completar-informacion-kpi.component';
import { ListaFestivosComponent } from './lista-festivos/lista-festivos.component';
import { GerenciaRoutingModule } from './gerencia/gerencia-routing.module';
import { VistaporcampaniasaplicadasComponent } from './gerencia/vistaporcampaniasaplicadas/vistaporcampaniasaplicadas.component';
import { AccuracyComponent } from './control-tasas/accuracy/accuracy.component';



const COMPONENTS = [
  HomeComponent,
  ControlTasasComponent,
  ReportesEUCComponent,
  AutorizadoresComponent,
  OperacionesEspecialesComponent,
  HomeComponent,
  ReenvioSolicitudesEspecialesComponent,
  CampanasOnlineComponent,
  GerenciareporteacumuladoComponent,
  CetesComponent, 
  KpiComponent,
  AccuracyComponent,
  CompletarInformacionKpiComponent,
  ListaFestivosComponent,
  VistaporcampaniasaplicadasComponent
]
  
  
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SitioEUCRoutingModule,
    GerenciaRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    GenericTableAppAppModule
  ]
})
export class SitioEUCModule { }