import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiasOperativasComponent } from './guias-operativas.component';

describe('GuiasOperativasComponent', () => {
  let component: GuiasOperativasComponent;
  let fixture: ComponentFixture<GuiasOperativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiasOperativasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiasOperativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
