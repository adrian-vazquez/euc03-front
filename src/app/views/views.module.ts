import { PerfiladorModule } from './perfilador/perfilador.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ViewsComponent } from './views.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudInversionesModule } from './solicitud-inversiones/solicitud-inversiones.module';
import { SitioEUCModule } from './sitioEUC/sitio-EUC.module';

const COMPONENTS = [
  ViewsComponent,
]


@NgModule({
  declarations: [ViewsComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    PerfiladorModule,
    SolicitudInversionesModule,
    SitioEUCModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    SharedModule,
  ]
})
export class ViewsModule { }
