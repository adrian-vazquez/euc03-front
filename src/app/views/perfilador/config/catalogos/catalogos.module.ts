import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogosComponent } from './catalogos.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ConsultasComponent } from './consultas/consultas.component';
import { ClientesComponent } from './clientes/clientes.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GuiasOperativasComponent } from './guias-operativas/guias-operativas.component';
import { EjecutivosSucursalComponent } from './ejecutivos-sucursal/ejecutivos-sucursal.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { PdfEspecialComponent } from './pdf-especial/pdf-especial.component';

const COMPONENTS = [
  CatalogosComponent,
  ConsultasComponent,
  ClientesComponent,
  GuiasOperativasComponent,
  EjecutivosSucursalComponent,
  ParametrosComponent,
  PdfEspecialComponent,
]

@NgModule({
  declarations: [... COMPONENTS, ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ... COMPONENTS
  ]
})
export class CatalogosModule { }
