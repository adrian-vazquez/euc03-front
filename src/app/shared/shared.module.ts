import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { SliderComponent } from './components/slider/slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ModalComponent, SliderComponent],
  exports:[HeaderComponent, FooterComponent, ModalComponent, SliderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IvyCarouselModule
  ]
})
export class SharedModule { }
