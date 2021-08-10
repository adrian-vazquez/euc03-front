import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampanasOnlineComponent } from './campanas-online/campanas-online.component';
import { ControlTasasComponent } from './control-tasas/control-tasas.component';
import { ReportesEUCComponent } from './reportes-euc/reportes-euc.component';

const routes: Routes = [
    { path: 'control-tasas', component: ControlTasasComponent },
    { path: 'reportes-EUC', component: ReportesEUCComponent },
    { path: 'vista-campanas', component: CampanasOnlineComponent },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SitioEUCRoutingModule {}
