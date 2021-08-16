import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaporcampaniasaplicadasComponent } from './vistaporcampaniasaplicadas.component';

describe('VistaporcampaniasaplicadasComponent', () => {
  let component: VistaporcampaniasaplicadasComponent;
  let fixture: ComponentFixture<VistaporcampaniasaplicadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaporcampaniasaplicadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaporcampaniasaplicadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
