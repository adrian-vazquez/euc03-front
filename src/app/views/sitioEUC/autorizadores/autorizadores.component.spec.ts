import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizadoresComponent } from './autorizadores.component';

describe('AutorizadoresComponent', () => {
  let component: AutorizadoresComponent;
  let fixture: ComponentFixture<AutorizadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
