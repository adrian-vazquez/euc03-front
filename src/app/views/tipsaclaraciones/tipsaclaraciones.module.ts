import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsaclaracionesRoutingModule } from './tipsaclaraciones-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    TipsaclaracionesRoutingModule
  ]
})
export class TipsaclaracionesModule { }
