
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclaracionesComponent } from './aclaraciones/aclaraciones.component';
import { PerfiladorComponent } from './perfilador/perfilador.component';
import { PerfiladorRoutingModule } from './perfilador-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

const COMPONENTS = [
  AclaracionesComponent,
  PerfiladorComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    PerfiladorRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  exports:[
  ]
})
export class PerfiladorModule { }
