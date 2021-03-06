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
import { SpecialCharacterDirective } from './directives/alphaNumeric.directive';
import { InputRestrictionDirective } from './directives/caracteres-especiales.directive';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { NavcargaComponent } from './navcarga/navcarga.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  ModalComponent, 
  SliderComponent,
  NavconfigComponent,
  NavcatalogsComponent,
  NavcargaComponent
]

const DIRECTIVES = [
  OnlyNumber,
  SpecialCharacterDirective,
  InputRestrictionDirective
]

const PIPES = [
  SanitizePipe
]

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES ],
  exports:[
    COMPONENTS,
    DIRECTIVES,
    PIPES,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IvyCarouselModule,
    RouterModule
  ]
})
export class SharedModule { }
