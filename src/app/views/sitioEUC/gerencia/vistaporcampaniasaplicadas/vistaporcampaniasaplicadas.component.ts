import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vistaporcampaniasaplicadas',
  templateUrl: './vistaporcampaniasaplicadas.component.html',
  styleUrls: ['./vistaporcampaniasaplicadas.component.scss']
})
export class VistaporcampaniasaplicadasComponent implements OnInit {


  showDataTable:boolean = false;
  columnHeader = {
    id: 'ID',
    folio: 'Folio',
    fechaapertura: 'Fecha_Apertura',
    fechaatencion: 'FECHA ATENCIÓN',
    soeidasig: 'SOEID ASIG',
    soeidope: 'SOEID OPE',
    observaweb: 'Observa web',
    division: 'DIVISION',
    distrito: 'DISTRITO',
    sucursal: 'SUCURSAL',
    estatus: 'Estatus',
    aplicativo: 'Aplicativo'
  };
  tableData: any[];


  constructor() { }

  ngOnInit(): void {
    this.valOperacionTabla();
  }

  valOperacionTabla(){
    let aux = [
      {'id': '21060100003','folio': '6','fechaapertura': '6/1/2021','fechaatencion': '6/1/2021','soeidasig': 'AP46036','soeidope': 'CZ20467','observaweb': 'EUC','division': 'SUR','distrito': 'DISTRITO VERACRUZ','sucursal': 'LAS BRISAS, VERACRUZ, VER','estatus': 'LIBERADA','aplicativo': 'SI'},
      {'id': '21060100003','folio': '6','fechaapertura': '6/1/2021','fechaatencion': '6/1/2021','soeidasig': 'AP46036','soeidope': 'CZ20467','observaweb': 'EUC','division': 'SUR','distrito': 'DISTRITO VERACRUZ','sucursal': 'LAS BRISAS, VERACRUZ, VER','estatus': 'LIBERADA','aplicativo': 'SI'},
      {'id': '21060100003','folio': '6','fechaapertura': '6/1/2021','fechaatencion': '6/1/2021','soeidasig': 'AP46036','soeidope': 'CZ20467','observaweb': 'EUC','division': 'SUR','distrito': 'DISTRITO VERACRUZ','sucursal': 'LAS BRISAS, VERACRUZ, VER','estatus': 'LIBERADA','aplicativo': 'SI'},
      {'id': '21060100003','folio': '6','fechaapertura': '6/1/2021','fechaatencion': '6/1/2021','soeidasig': 'AP46036','soeidope': 'CZ20467','observaweb': 'EUC','division': 'SUR','distrito': 'DISTRITO VERACRUZ','sucursal': 'LAS BRISAS, VERACRUZ, VER','estatus': 'LIBERADA','aplicativo': 'SI'},
      {'id': '21060100003','folio': '6','fechaapertura': '6/1/2021','fechaatencion': '6/1/2021','soeidasig': 'AP46036','soeidope': 'CZ20467','observaweb': 'EUC','division': 'SUR','distrito': 'DISTRITO VERACRUZ','sucursal': 'LAS BRISAS, VERACRUZ, VER','estatus': 'LIBERADA','aplicativo': 'SI'}
    ];
    this.tableData = aux;
  }

  muestraTablaDatos(){
    this.showDataTable = true;
  }

}
