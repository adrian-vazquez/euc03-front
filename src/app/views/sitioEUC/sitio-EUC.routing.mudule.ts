import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlTasasComponent } from './control-tasas/control-tasas.component';
import { ReportesEUCComponent } from './reportes-euc/reportes-euc.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'control-tasas', component: ControlTasasComponent },
    { path: 'reportes-EUC', component: ReportesEUCComponent },
    { path: '', component: HomeComponent, },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SitioEUCRoutingModule {}
