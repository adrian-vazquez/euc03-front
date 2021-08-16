import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaporcampaniasaplicadasComponent } from './vistaporcampaniasaplicadas/vistaporcampaniasaplicadas.component';

const routes: Routes = [
  { path: 'vista-por-campañas-aplicadas', component: VistaporcampaniasaplicadasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciaRoutingModule { }
