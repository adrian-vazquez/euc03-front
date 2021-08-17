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
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComparativoComponent } from './comparativo/comparativo.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableComparativoComponent } from './comparativo/table-comparativo/table-comparativo.component';
import { TableRendimientoComponent } from './comparativo/table-rendimiento/table-rendimiento.component';

const COMPONENTS = [
  CatalogosComponent,
  ConsultasComponent,
  ClientesComponent,
  GuiasOperativasComponent,
  EjecutivosSucursalComponent,
  ParametrosComponent,
  PdfEspecialComponent,
  ComparativoComponent,
]

@NgModule({
  declarations: [... COMPONENTS, TableComparativoComponent, TableRendimientoComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ... COMPONENTS
  ]
})
export class CatalogosModule { }
