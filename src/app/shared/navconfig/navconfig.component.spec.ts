import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavconfigComponent } from './navconfig.component';

describe('NavconfigComponent', () => {
  let component: NavconfigComponent;
  let fixture: ComponentFixture<NavconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
