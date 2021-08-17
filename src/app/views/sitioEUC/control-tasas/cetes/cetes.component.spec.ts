import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetesComponent } from './cetes.component';

describe('CetesComponent', () => {
  let component: CetesComponent;
  let fixture: ComponentFixture<CetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
