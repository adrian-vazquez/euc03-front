import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioedicionRoutingModule } from './formularioedicion-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    FormularioedicionRoutingModule
  ]
})
export class FormularioedicionModule { }
