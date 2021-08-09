import { TestBed } from '@angular/core/testing';

import { SolicitudInversionesService } from './solicitud-inversiones.service';

describe('SolicitudInversionesService', () => {
  let service: SolicitudInversionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudInversionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
