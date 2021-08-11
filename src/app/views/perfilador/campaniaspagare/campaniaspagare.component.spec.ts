import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniaspagareComponent } from './campaniaspagare.component';

describe('CampaniaspagareComponent', () => {
  let component: CampaniaspagareComponent;
  let fixture: ComponentFixture<CampaniaspagareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaniaspagareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaniaspagareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
