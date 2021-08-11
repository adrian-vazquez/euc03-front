import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesEspecialesComponent } from './operaciones-especiales.component';

describe('OperacionesEspecialesComponent', () => {
  let component: OperacionesEspecialesComponent;
  let fixture: ComponentFixture<OperacionesEspecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionesEspecialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
