import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcatalogsComponent } from './navcatalogs.component';

describe('NavcatalogsComponent', () => {
  let component: NavcatalogsComponent;
  let fixture: ComponentFixture<NavcatalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavcatalogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavcatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
