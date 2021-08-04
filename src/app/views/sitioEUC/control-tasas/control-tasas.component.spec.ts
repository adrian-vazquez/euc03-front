import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTasasComponent } from './control-tasas.component';

describe('ControlTasasComponent', () => {
  let component: ControlTasasComponent;
  let fixture: ComponentFixture<ControlTasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlTasasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
