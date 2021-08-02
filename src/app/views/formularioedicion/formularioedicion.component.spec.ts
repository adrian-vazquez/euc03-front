import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioedicionComponent } from './formularioedicion.component';

describe('FormularioedicionComponent', () => {
  let component: FormularioedicionComponent;
  let fixture: ComponentFixture<FormularioedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioedicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
