import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  catalogoEstatus = [
    { name: 'ACEPTADA'},
    { name: 'LIBERADA'},
    { name: 'RECHAZADA'},
    { name: 'SOLICITADA'},
    { name: 'SOLIC_CANCEL'},
    { name: 'TODAS'},
  ]

  constructor() { }

  obtenetCatEstatus(): Observable<any> {
    return of(this.catalogoEstatus);
  }
}
