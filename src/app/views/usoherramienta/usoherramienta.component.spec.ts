import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoherramientaComponent } from './usoherramienta.component';

describe('UsoherramientaComponent', () => {
  let component: UsoherramientaComponent;
  let fixture: ComponentFixture<UsoherramientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoherramientaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoherramientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
