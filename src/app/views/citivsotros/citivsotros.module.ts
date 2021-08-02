import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitivsotrosRoutingModule } from './citivsotros-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    CitivsotrosRoutingModule
  ]
})
export class CitivsotrosModule { }
