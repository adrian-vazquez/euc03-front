import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaniaspagareRoutingModule } from './campaniaspagare-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    CampaniaspagareRoutingModule
  ]
})
export class CampaniaspagareModule { }
