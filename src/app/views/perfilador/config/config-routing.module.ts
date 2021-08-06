import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargasComponent } from './cargas/cargas.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { ComparativoComponent } from './comparativo/comparativo.component';
import { GatComponent } from './gat/gat.component';
import { ImagenprincipalComponent } from './imagenprincipal/imagenprincipal.component';
import { MenuadministracionComponent } from './menuadministracion/menuadministracion.component';
import { PdfComponent } from './pdf/pdf.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  { path: 'config', component: MenuadministracionComponent },
  { path: 'menu-administracion', component: MenuadministracionComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'pdf', component: PdfComponent },
  { path: 'comparativo', component: ComparativoComponent },
  { path: 'gat', component: GatComponent },
  { path: 'imagen-principal', component: ImagenprincipalComponent },
  { path: 'cargas', component: CargasComponent },
  { path: 'catalogos', component: CatalogosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
