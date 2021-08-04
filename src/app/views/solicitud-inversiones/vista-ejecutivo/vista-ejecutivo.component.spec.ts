import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEjecutivoComponent } from './vista-ejecutivo.component';

describe('VistaEjecutivoComponent', () => {
  let component: VistaEjecutivoComponent;
  let fixture: ComponentFixture<VistaEjecutivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEjecutivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEjecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
