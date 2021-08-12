import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanasOnlineComponent } from './campanas-online.component';

describe('CampanasOnlineComponent', () => {
  let component: CampanasOnlineComponent;
  let fixture: ComponentFixture<CampanasOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampanasOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanasOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
