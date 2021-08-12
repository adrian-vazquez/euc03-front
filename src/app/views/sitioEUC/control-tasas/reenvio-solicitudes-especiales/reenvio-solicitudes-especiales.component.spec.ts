import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReenvioSolicitudesEspecialesComponent } from './reenvio-solicitudes-especiales.component';

describe('ReenvioSolicitudesEspecialesComponent', () => {
  let component: ReenvioSolicitudesEspecialesComponent;
  let fixture: ComponentFixture<ReenvioSolicitudesEspecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReenvioSolicitudesEspecialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReenvioSolicitudesEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
