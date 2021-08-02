import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { PerfiladorComponent } from './perfilador/perfilador.component';
import { TipsaclaracionesComponent } from './tipsaclaraciones/tipsaclaraciones.component';
import { SharedModule } from '../shared/shared.module';
import { ViewsComponent } from './views.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitivsotrosComponent } from './citivsotros/citivsotros.component';
import { CampaniaspagareComponent } from './campaniaspagare/campaniaspagare.component';
import { UsoherramientaComponent } from './usoherramienta/usoherramienta.component';
import { FormularioedicionComponent } from './formularioedicion/formularioedicion.component';



@NgModule({
  declarations: [ViewsComponent, PerfiladorComponent, TipsaclaracionesComponent, CitivsotrosComponent, CampaniaspagareComponent, UsoherramientaComponent, FormularioedicionComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewsModule { }
