import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatComponent } from './gat.component';

describe('GatComponent', () => {
  let component: GatComponent;
  let fixture: ComponentFixture<GatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
