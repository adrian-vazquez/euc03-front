import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AclaracionesComponent } from './aclaraciones.component';

describe('AclaracionesComponent', () => {
  let component: AclaracionesComponent;
  let fixture: ComponentFixture<AclaracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AclaracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AclaracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
