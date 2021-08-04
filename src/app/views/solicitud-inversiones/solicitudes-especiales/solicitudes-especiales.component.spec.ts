import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesEspecialesComponent } from './solicitudes-especiales.component';

describe('SolicitudesEspecialesComponent', () => {
  let component: SolicitudesEspecialesComponent;
  let fixture: ComponentFixture<SolicitudesEspecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesEspecialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
