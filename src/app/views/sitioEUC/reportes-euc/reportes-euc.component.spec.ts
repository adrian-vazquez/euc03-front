import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesEUCComponent } from './reportes-euc.component';

describe('ReportesEUCComponent', () => {
  let component: ReportesEUCComponent;
  let fixture: ComponentFixture<ReportesEUCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesEUCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesEUCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
