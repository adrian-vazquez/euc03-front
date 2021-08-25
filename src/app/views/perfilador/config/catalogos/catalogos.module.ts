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
import { PdfEspecialCargaComponent } from './pdf-especial/pdf-especial-carga/pdf-especial-carga.component';
import { FoliosComponent } from './folios/folios.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import {MatRadioModule} from '@angular/material/radio';
import { OfertasComponent } from './ofertas/ofertas.component';
import { CampaniaComponent } from './campania/campania.component';
import { TasasComponent } from './tasas/tasas.component';

const COMPONENTS = [
  CatalogosComponent,
  ConsultasComponent,
  ClientesComponent,
  GuiasOperativasComponent,
  EjecutivosSucursalComponent,
  ParametrosComponent, 
  PdfEspecialComponent,
  ComparativoComponent,
  TableComparativoComponent, 
  TableRendimientoComponent, 
  PdfEspecialCargaComponent,
  FoliosComponent,
  SucursalesComponent,
  OfertasComponent,
  CampaniaComponent, 
  TasasComponent
]

@NgModule({
  declarations: [... COMPONENTS ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ... COMPONENTS
  ]
})
export class CatalogosModule { }
