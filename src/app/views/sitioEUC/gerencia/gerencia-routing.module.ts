import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaniasonlinestimelinessComponent } from './campaniasonlinestimeliness/campaniasonlinestimeliness.component';
import { VistaporcampaniasaplicadasComponent } from './vistaporcampaniasaplicadas/vistaporcampaniasaplicadas.component';

const routes: Routes = [
  { path: 'vista-por-campañas-aplicadas', component: VistaporcampaniasaplicadasComponent },
  { path: 'campañas-online-timeliness', component: CampaniasonlinestimelinessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciaRoutingModule { }
