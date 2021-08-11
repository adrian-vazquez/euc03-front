import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfEspecialComponent } from './pdf-especial.component';

describe('PdfEspecialComponent', () => {
  let component: PdfEspecialComponent;
  let fixture: ComponentFixture<PdfEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
