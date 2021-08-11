
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AclaracionesComponent } from './aclaraciones/aclaraciones.component';
import { PerfiladorComponent } from './perfilador/perfilador.component';
import { PerfiladorRoutingModule } from './perfilador-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CitivsotrosComponent } from './citivsotros/citivsotros.component';
import { ConfigRoutingModule } from './config/config-routing.module';
import { ConfigModule } from './config/config.module';
import { CampaniaspagareComponent } from './campaniaspagare/campaniaspagare.component';

const COMPONENTS = [
  AclaracionesComponent,
  PerfiladorComponent,
  CitivsotrosComponent,
  CampaniaspagareComponent
]

@NgModule({
  declarations: [...COMPONENTS ],
  imports: [
    CommonModule,
    PerfiladorRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    PdfViewerModule,
    ConfigRoutingModule,
  ],
  exports:[
  ]
})
export class PerfiladorModule { }
