import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcargaComponent } from './navcarga.component';

describe('NavcargaComponent', () => {
  let component: NavcargaComponent;
  let fixture: ComponentFixture<NavcargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavcargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavcargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
