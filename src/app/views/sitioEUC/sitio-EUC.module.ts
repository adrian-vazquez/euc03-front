import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlTasasComponent } from './control-tasas/control-tasas.component';
import { ReportesEUCComponent } from './reportes-euc/reportes-euc.component';
import { SitioEUCRoutingModule } from './sitio-EUC.routing.mudule';
import { HomeComponent } from './home/home.component';
import { AutorizadoresComponent } from './autorizadores/autorizadores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GerenciareporteacumuladoComponent } from './gerenciareporteacumulado/gerenciareporteacumulado.component';


const COMPONENTS = [
  HomeComponent,
  ControlTasasComponent,
  ReportesEUCComponent,
  AutorizadoresComponent
]
  
@NgModule({
  declarations: [...COMPONENTS, GerenciareporteacumuladoComponent],
  imports: [
    CommonModule,
    SitioEUCRoutingModule,
    SharedModule
  ]
})
export class SitioEUCModule { }