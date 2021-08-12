import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from '../views.component';
import { AutorizadoresComponent } from './autorizadores/autorizadores.component';
import { CampanasOnlineComponent } from './campanas-online/campanas-online.component';
import { ControlTasasComponent } from './control-tasas/control-tasas.component';
import { OperacionesEspecialesComponent } from './control-tasas/operaciones-especiales/operaciones-especiales.component';
import { ReenvioSolicitudesEspecialesComponent } from './control-tasas/reenvio-solicitudes-especiales/reenvio-solicitudes-especiales.component';
import { GerenciareporteacumuladoComponent } from './gerenciareporteacumulado/gerenciareporteacumulado.component';
import { HomeComponent } from './home/home.component';
import { ReportesEUCComponent } from './reportes-euc/reportes-euc.component';

const routes: Routes = [
    { path: 'control-tasas', component: ControlTasasComponent },
    { path: 'reportes-EUC', component: ReportesEUCComponent },
    { path: 'autorizadores', component: AutorizadoresComponent },
    { path: 'gerenciareporteacumulado', component: GerenciareporteacumuladoComponent },
    { path: 'vista-campanas', component: CampanasOnlineComponent },
    { path: 'operaciones-especiales', component: OperacionesEspecialesComponent },
    { path: 'reenvio-solicitudes-especiales', component: ReenvioSolicitudesEspecialesComponent },
    { path: '', component: HomeComponent, },
    { path: 'home', component: ViewsComponent, children:[{path:'',component: HomeComponent}] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SitioEUCRoutingModule {}
