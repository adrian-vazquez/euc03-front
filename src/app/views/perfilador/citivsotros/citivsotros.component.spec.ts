import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitivsotrosComponent } from './citivsotros.component';

describe('CitivsotrosComponent', () => {
  let component: CitivsotrosComponent;
  let fixture: ComponentFixture<CitivsotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitivsotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitivsotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
