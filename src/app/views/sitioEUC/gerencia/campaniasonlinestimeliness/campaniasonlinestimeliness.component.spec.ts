import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniasonlinestimelinessComponent } from './campaniasonlinestimeliness.component';

describe('CampaniasonlinestimelinessComponent', () => {
  let component: CampaniasonlinestimelinessComponent;
  let fixture: ComponentFixture<CampaniasonlinestimelinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaniasonlinestimelinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaniasonlinestimelinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
