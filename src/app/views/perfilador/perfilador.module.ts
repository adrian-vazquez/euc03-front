import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfiladorRoutingModule } from './perfilador-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexComponent } from './index/index.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    PerfiladorRoutingModule,
    SharedModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PerfiladorModule { }
