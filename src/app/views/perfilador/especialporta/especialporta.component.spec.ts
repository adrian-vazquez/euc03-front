import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialportaComponent } from './especialporta.component';

describe('EspecialportaComponent', () => {
  let component: EspecialportaComponent;
  let fixture: ComponentFixture<EspecialportaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialportaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialportaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
