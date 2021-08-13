import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletarInformacionKpiComponent } from './completar-informacion-kpi.component';

describe('CompletarInformacionKpiComponent', () => {
  let component: CompletarInformacionKpiComponent;
  let fixture: ComponentFixture<CompletarInformacionKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletarInformacionKpiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletarInformacionKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
