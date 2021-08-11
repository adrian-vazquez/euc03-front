import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutivosSucursalComponent } from './ejecutivos-sucursal.component';

describe('EjecutivosSucursalComponent', () => {
  let component: EjecutivosSucursalComponent;
  let fixture: ComponentFixture<EjecutivosSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjecutivosSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutivosSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
