import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenprincipalComponent } from './imagenprincipal.component';

describe('ImagenprincipalComponent', () => {
  let component: ImagenprincipalComponent;
  let fixture: ComponentFixture<ImagenprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
