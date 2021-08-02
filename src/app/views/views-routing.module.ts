import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './perfilador/index/index.component';
import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path:'', component: ViewsComponent,
    children: [
      { path: 'perfilador', loadChildren: () => import('./perfilador/perfilador.module').then(m => m.PerfiladorModule) },
      { path: 'tipsaclaraciones', loadChildren: () => import('./tipsaclaraciones/tipsaclaraciones.module').then(m => m.TipsaclaracionesModule) },
      { path: 'citivsotros', loadChildren: () => import('./citivsotros/citivsotros.module').then(m => m.CitivsotrosModule) },
      { path: 'campaniaspagare', loadChildren: () => import('./campaniaspagare/campaniaspagare.module').then(m => m.CampaniaspagareModule) },
      { path: 'usoherramienta', loadChildren: () => import('./usoherramienta/usoherramienta.module').then(m => m.UsoherramientaModule) },
      { path: 'formularioedicion', loadChildren: () => import('./formularioedicion/formularioedicion.module').then(m => m.FormularioedicionModule) },
      { path: '', component: IndexComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
