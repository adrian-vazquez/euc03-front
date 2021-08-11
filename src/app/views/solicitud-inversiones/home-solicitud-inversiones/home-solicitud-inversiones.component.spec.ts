import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSolicitudInversionesComponent } from './home-solicitud-inversiones.component';

describe('HomeSolicitudInversionesComponent', () => {
  let component: HomeSolicitudInversionesComponent;
  let fixture: ComponentFixture<HomeSolicitudInversionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSolicitudInversionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSolicitudInversionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
