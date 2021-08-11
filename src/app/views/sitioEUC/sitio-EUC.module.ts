import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlTasasComponent } from './control-tasas/control-tasas.component';
import { ReportesEUCComponent } from './reportes-euc/reportes-euc.component';
import { SitioEUCRoutingModule } from './sitio-EUC.routing.mudule';
import { CampanasOnlineComponent } from './campanas-online/campanas-online.component';


const COMPONENTS = [
    ControlTasasComponent,
    ReportesEUCComponent,
    CampanasOnlineComponent
  ]
  
  
  @NgModule({
    declarations: [...COMPONENTS],
    imports: [
      CommonModule,
      SitioEUCRoutingModule,
      
    ]
  })
export class SitioEUCModule { }