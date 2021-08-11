import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//directives
import { OnlyNumber } from './directives/only-number.directive';
import { ModalComponent } from './components/modal/modal.component';
import { SliderComponent } from './components/slider/slider.component';
import { NavconfigComponent } from './navconfig/navconfig.component';
import { RouterModule } from '@angular/router';
import { NavcatalogsComponent } from './navcatalogs/navcatalogs.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  ModalComponent, 
  SliderComponent,
  NavconfigComponent,
  NavcatalogsComponent
]

const DIRECTIVES = [
  OnlyNumber
]

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES ],
  exports:[
    COMPONENTS,
    DIRECTIVES
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IvyCarouselModule,
    RouterModule
  ]
})
export class SharedModule { }
