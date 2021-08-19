import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargasComponent } from './cargas/cargas.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { ComparativoComponent } from './catalogos/comparativo/comparativo.component';
import { GatComponent } from './gat/gat.component';
import { ImagenprincipalComponent } from './imagenprincipal/imagenprincipal.component';
import { MenuadministracionComponent } from './menuadministracion/menuadministracion.component';
import { PdfComponent } from './pdf/pdf.component';
import { SliderComponent } from './slider/slider.component';
import { ConsultasComponent } from './catalogos/consultas/consultas.component';
import { ClientesComponent } from './catalogos/clientes/clientes.component';
import { EjecutivosSucursalComponent } from './catalogos/ejecutivos-sucursal/ejecutivos-sucursal.component';
import { GuiasOperativasComponent } from './catalogos/guias-operativas/guias-operativas.component';
import { PdfEspecialComponent } from './catalogos/pdf-especial/pdf-especial.component';
import { ParametrosComponent } from './catalogos/parametros/parametros.component';
import { PdfEspecialCargaComponent } from './catalogos/pdf-especial/pdf-especial-carga/pdf-especial-carga.component';
import { FoliosComponent } from './catalogos/folios/folios.component';
import { SucursalesComponent } from './catalogos/sucursales/sucursales.component';
import { OfertasComponent } from './catalogos/ofertas/ofertas.component';

const routes: Routes = [
  { path: 'config', component: MenuadministracionComponent },
  { path: 'menu-administracion', component: MenuadministracionComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'pdf', component: PdfComponent },
  { path: 'comparativo', component: ComparativoComponent },
  { path: 'gat', component: GatComponent },
  { path: 'imagen-principal', component: ImagenprincipalComponent },
  { path: 'cargas', component: CargasComponent },
  { path: 'catalogos', component: CatalogosComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'ejecutivos-sucursal', component: EjecutivosSucursalComponent },
  { path: 'guias-operativas', component: GuiasOperativasComponent },
  { path: 'pdf-especial', component: PdfEspecialComponent },
  { path: 'parametros', component: ParametrosComponent },
  { path: 'pdf-especial-carga', component: PdfEspecialCargaComponent },
  { path: 'folios', component: FoliosComponent },
  { path: 'sucursales', component: SucursalesComponent },
  { path: 'ofertas', component: OfertasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
