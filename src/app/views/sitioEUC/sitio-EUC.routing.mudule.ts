import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizadoresComponent } from './autorizadores/autorizadores.component';
import { ControlTasasComponent } from './control-tasas/control-tasas.component';
import { GerenciareporteacumuladoComponent } from './gerenciareporteacumulado/gerenciareporteacumulado.component';
import { HomeComponent } from './home/home.component';
import { ReportesEUCComponent } from './reportes-euc/reportes-euc.component';

const routes: Routes = [
    { path: 'control-tasas', component: ControlTasasComponent },
    { path: 'reportes-EUC', component: ReportesEUCComponent },
    { path: 'autorizadores', component: AutorizadoresComponent },
    { path: 'gerenciareporteacumulado', component: GerenciareporteacumuladoComponent },
    { path: '', component: HomeComponent, },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SitioEUCRoutingModule {}
