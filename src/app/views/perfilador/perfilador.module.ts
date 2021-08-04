
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclaracionesComponent } from './aclaraciones/aclaraciones.component';
import { PerfiladorComponent } from './perfilador/perfilador.component';
import { PerfiladorRoutingModule } from './perfilador-routing.module';

const COMPONENTS = [
  AclaracionesComponent,
  PerfiladorComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    PerfiladorRoutingModule
  ],
  exports:[
  ]
})
export class PerfiladorModule { }
