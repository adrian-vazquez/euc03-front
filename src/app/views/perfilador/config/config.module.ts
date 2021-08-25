import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { MenuadministracionComponent } from './menuadministracion/menuadministracion.component';
import { SliderComponent } from './slider/slider.component';
import { PdfComponent } from './pdf/pdf.component';
import { GatComponent } from './gat/gat.component';
import { ImagenprincipalComponent } from './imagenprincipal/imagenprincipal.component';
import { CargasComponent } from './cargas/cargas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogosModule } from './catalogos/catalogos.module';
import { GenericTableAppAppModule } from 'src/app/@generic-table-app/generic-table.module';
import { MatPaginatorModule } from '@angular/material/paginator';


const COMPONENTS = [
  MenuadministracionComponent,
  SliderComponent,
  PdfComponent,
  GatComponent,
  ImagenprincipalComponent,
  CargasComponent,
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CatalogosModule,
    GenericTableAppAppModule,
    MatPaginatorModule
  ],
  exports: [
    
  ]
})
export class ConfigModule { }
