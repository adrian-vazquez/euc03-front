import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlTasasComponent } from './control-tasas/control-tasas.component';
import { ReportesEUCComponent } from './reportes-euc/reportes-euc.component';
import { SitioEUCRoutingModule } from './sitio-EUC.routing.mudule';


const COMPONENTS = [
    ControlTasasComponent,
    ReportesEUCComponent
  ]
  
  
  @NgModule({
    declarations: [...COMPONENTS],
    imports: [
      CommonModule,
      SitioEUCRoutingModule
    ]
  })
export class SitioEUCModule { }