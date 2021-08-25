import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasGeneralComponent } from './ofertas-general.component';

describe('OfertasGeneralComponent', () => {
  let component: OfertasGeneralComponent;
  let fixture: ComponentFixture<OfertasGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
