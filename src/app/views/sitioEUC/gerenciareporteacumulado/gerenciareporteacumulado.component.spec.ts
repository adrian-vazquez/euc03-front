import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciareporteacumuladoComponent } from './gerenciareporteacumulado.component';

describe('GerenciareporteacumuladoComponent', () => {
  let component: GerenciareporteacumuladoComponent;
  let fixture: ComponentFixture<GerenciareporteacumuladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciareporteacumuladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciareporteacumuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
