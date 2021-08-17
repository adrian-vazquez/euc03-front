import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciaRoutingModule } from './gerencia-routing.module';
import { VistaporcampaniasaplicadasComponent } from './vistaporcampaniasaplicadas/vistaporcampaniasaplicadas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericTableAppAppModule } from 'src/app/@generic-table-app/generic-table.module';
import { CampaniasonlinestimelinessComponent } from './campaniasonlinestimeliness/campaniasonlinestimeliness.component';


@NgModule({
  declarations: [VistaporcampaniasaplicadasComponent, CampaniasonlinestimelinessComponent],
  imports: [
    CommonModule,
    GerenciaRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    GenericTableAppAppModule
  ]
})
export class GerenciaModule { }
