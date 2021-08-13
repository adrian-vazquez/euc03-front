import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampanasOnlineComponent } from './campanas-online/campanas-online.component';
import { ControlTasasComponent } from './control-tasas/control-tasas.component';
import { HomeComponent } from './home/home.component';
import { ReportesEUCComponent } from './reportes-euc/reportes-euc.component';
import { CetesComponent } from './control-tasas/cetes/cetes.component';
import { CompletarInformacionKpiComponent } from './control-tasas/completar-informacion-kpi/completar-informacion-kpi.component';
import { OperacionesEspecialesComponent } from './control-tasas/operaciones-especiales/operaciones-especiales.component';
import { ReenvioSolicitudesEspecialesComponent } from './control-tasas/reenvio-solicitudes-especiales/reenvio-solicitudes-especiales.component';
import { KpiComponent } from './control-tasas/kpi/kpi.component';
import { ListaFestivosComponent } from './lista-festivos/lista-festivos.component';

const routes: Routes = [
    {
        path: 'control-tasas', component: ControlTasasComponent,
        children: [
            { path: 'CETES', component: CetesComponent },
            { path: 'completar-informacion-KPI', component: CompletarInformacionKpiComponent },
            { path: 'KPI', component: KpiComponent },
            { path: 'operaciones-especiales', component: OperacionesEspecialesComponent },
            { path: 'reenvio-solicitudes-especiales', component: ReenvioSolicitudesEspecialesComponent },
            { path: 'lista-dias-festivos', component: ListaFestivosComponent },
        ]
    },
    { path: 'reportes-EUC', component: ReportesEUCComponent },
    { path: 'vista-campanas', component: CampanasOnlineComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '/' },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SitioEUCRoutingModule { }
