import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { MenuadministracionComponent } from './menuadministracion/menuadministracion.component';
import { SliderComponent } from './slider/slider.component';
import { PdfComponent } from './pdf/pdf.component';
import { ComparativoComponent } from './comparativo/comparativo.component';
import { GatComponent } from './gat/gat.component';
import { ImagenprincipalComponent } from './imagenprincipal/imagenprincipal.component';
import { CargasComponent } from './cargas/cargas.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


const COMPONENTS = [
  MenuadministracionComponent,
  SliderComponent,
  PdfComponent,
  ComparativoComponent,
  GatComponent,
  ImagenprincipalComponent,
  CargasComponent,
  CatalogosComponent
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ConfigModule { }
