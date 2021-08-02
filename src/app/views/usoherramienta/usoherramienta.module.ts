import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsoherramientaRoutingModule } from './usoherramienta-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    UsoherramientaRoutingModule
  ]
})
export class UsoherramientaModule { }
