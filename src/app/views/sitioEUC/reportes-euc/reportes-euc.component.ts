import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reportes-euc',
  templateUrl: './reportes-euc.component.html',
  styleUrls: ['./reportes-euc.component.scss']
})
export class ReportesEUCComponent implements OnInit {

  iconCarga:string = 'assets/images/Img/load.PNG';
  showBusquedaSinDatos:number = 0;
  showDataGrid:boolean = false;
  showDataTable6:boolean = false;
  showDataTable7:boolean = false;

  columnHeader6 = {
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
  tableData6: any[];

  columnHeader7 = {
    estatuseuc: 'Estatus EUC',
    aplicado: 'Aplicado',
    aplicadomonto: 'Aplicado Monto',
    noaplicado: 'No Aplicado',
    noaplimonto: 'No Apli Monto',
    nolocalizado: 'No Localizado',
    nolocmonto: 'No Loc Monto',
    operaciones: 'Operaciones',
    subtotal: 'Subtotal'
  };
  tableData7: any[];

  constructor() { }

  ngOnInit(): void {
    this.valOperacionTabla6();
    this.valOperacionTabla7();
  }

  valOperacionTabla6(){
    let aux = [
      {'id': '21060100003','folio': '6','fechaapertura': '6/1/2021','fechaatencion': '6/1/2021','soeidasig': 'AP46036','soeidope': 'CZ20467','observaweb': 'EUC','division': 'SUR','distrito': 'DISTRITO VERACRUZ','sucursal': 'LAS BRISAS, VERACRUZ, VER','estatus': 'LIBERADA','aplicativo': 'SI'},
      {'id': '21060100003','folio': '6','fechaapertura': '6/1/2021','fechaatencion': '6/1/2021','soeidasig': 'AP46036','soeidope': 'CZ20467','observaweb': 'EUC','division': 'SUR','distrito': 'DISTRITO VERACRUZ','sucursal': 'LAS BRISAS, VERACRUZ, VER','estatus': 'LIBERADA','aplicativo': 'SI'},
      {'id': '21060100003','folio': '6','fechaapertura': '6/1/2021','fechaatencion': '6/1/2021','soeidasig': 'AP46036','soeidope': 'CZ20467','observaweb': 'EUC','division': 'SUR','distrito': 'DISTRITO VERACRUZ','sucursal': 'LAS BRISAS, VERACRUZ, VER','estatus': 'LIBERADA','aplicativo': 'SI'},
      {'id': '21060100003','folio': '6','fechaapertura': '6/1/2021','fechaatencion': '6/1/2021','soeidasig': 'AP46036','soeidope': 'CZ20467','observaweb': 'EUC','division': 'SUR','distrito': 'DISTRITO VERACRUZ','sucursal': 'LAS BRISAS, VERACRUZ, VER','estatus': 'LIBERADA','aplicativo': 'SI'},
      {'id': '21060100003','folio': '6','fechaapertura': '6/1/2021','fechaatencion': '6/1/2021','soeidasig': 'AP46036','soeidope': 'CZ20467','observaweb': 'EUC','division': 'SUR','distrito': 'DISTRITO VERACRUZ','sucursal': 'LAS BRISAS, VERACRUZ, VER','estatus': 'LIBERADA','aplicativo': 'SI'}
    ];
    this.tableData6 = aux;
  }

  valOperacionTabla7(){
    let aux = [
      { 'estatuseuc': 'CANCELADA', 'aplicado': '2', 'aplicadomonto': '$2,200,000', 'noaplicado': '30', 'noaplimonto': '$15,165,822', 'nolocalizado': '18', 'nolocmonto': '$12,125,904', 'operaciones': '50', 'subtotal': '$29,490,726' },
      { 'estatuseuc': 'CANCELADA', 'aplicado': '2', 'aplicadomonto': '$2,200,000', 'noaplicado': '30', 'noaplimonto': '$15,165,822', 'nolocalizado': '18', 'nolocmonto': '$12,125,904', 'operaciones': '50', 'subtotal': '$29,490,726' },
      { 'estatuseuc': 'CANCELADA', 'aplicado': '2', 'aplicadomonto': '$2,200,000', 'noaplicado': '30', 'noaplimonto': '$15,165,822', 'nolocalizado': '18', 'nolocmonto': '$12,125,904', 'operaciones': '50', 'subtotal': '$29,490,726' },
      { 'estatuseuc': 'CANCELADA', 'aplicado': '2', 'aplicadomonto': '$2,200,000', 'noaplicado': '30', 'noaplimonto': '$15,165,822', 'nolocalizado': '18', 'nolocmonto': '$12,125,904', 'operaciones': '50', 'subtotal': '$29,490,726' },
      { 'estatuseuc': 'CANCELADA', 'aplicado': '2', 'aplicadomonto': '$2,200,000', 'noaplicado': '30', 'noaplimonto': '$15,165,822', 'nolocalizado': '18', 'nolocmonto': '$12,125,904', 'operaciones': '50', 'subtotal': '$29,490,726' }
    ];
    this.tableData7 = aux;
  }

  busquedaSinDatos(){
    this.showBusquedaSinDatos = 1;
  }

  verDatoDiario(){
    Swal.fire({
      title: '¿Qué desea ver?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `6. Campañas (Detalles de Operación)`,
      denyButtonText: `7. Resumen`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.showDataTable6 = true;
        this.showDataTable7 = false;
        this.showDataGrid = false;
      } else if (result.isDenied) {
        this.showDataTable7 = true;
        this.showDataTable6 = false;
        this.showDataGrid = false;
      }
    });
  }

  boletinMes(){
    this.showDataTable7 = false;
    this.showDataTable6 = false;
    this.showDataGrid = true;
  }

}
