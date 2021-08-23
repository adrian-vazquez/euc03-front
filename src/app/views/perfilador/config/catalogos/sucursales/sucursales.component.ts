import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { NotificacionesService } from '../../../../../services/notificaciones.service';

interface ISucursal {
  sirhSucursalId?: number,
  nombreSucursal: string,
  distritoId: number,
  distritoNombre: string,
  divisionId: number,
  divisionNombre: string,
  tipoDispositivo: string,
  ejecutivoEAV: number,
  ejecutivoPriority: number,
  ejecutivoTotal: number,
  isClosed: boolean,
}

const bodyTemplateGuide = ` 
<form>
  <div class="form-group row flex-column">
    <label for="nombreSucursal" class="col col-form-label">Nombre de la Sucursal</label>
    <div >
      <input type="text"  class="form-control-plaintext form-control-sm" id="nombreSucursal">
    </div>
  </div>
  <div class="row">
    <div class="form-group ml-2 col">
      <label for="distritoNombre">Distrito</label>
      <select class="form-control-plaintext form-control-sm" style="width: 163px; margin: auto;" id="distritoNombre">
        <option value="1">Distrito 1</option>
        <option value="2">Distrito 2</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="form-group ml-2 col">
      <label for="divisionNombre">División</label>
      <select class="form-control-plaintext form-control-sm" style="width: 163px; margin: auto;" id="divisionNombre">
        <option value="1">División 1</option>
        <option value="2">División 2</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="form-group ml-2 col">
      <label for="tipoDispositivo">Tipo de dispositivo</label>
      <select class="form-control-plaintext form-control-sm" style="width: 163px; margin: auto;" id="tipoDispositivo">
        <option value="1">Dispositivo 1</option>
        <option value="2">Dispositivo 2</option>
      </select>
    </div>
  </div>
  <div class="form-group row flex-column">
    <label for="ejecutivoEAV" class="col col-form-label">Número de ejecutivos no priority asignados</label>
    <div >
      <input type="number" class="form-control-plaintext form-control-sm" id="ejecutivoEAV">
    </div>
  </div>
  <div class="form-group row flex-column">
    <label for="ejecutivoPriority" class="col col-form-label">Número total de Ejecutivos Prioririty asignados</label>
    <div >
      <input type="number" class="form-control-plaintext form-control-sm" id="ejecutivoPriority">
    </div>
  </div>
  <div class="form-group row flex-column">
    <label for="ejecutivoTotal" class="col col-form-label">Número de ejecutivo total de la sucursal</label>
    <div >
      <input type="number" class="form-control-plaintext form-control-sm" id="ejecutivoTotal">
    </div>
  </div>
  <div class="row justify-content-center flex-column">
    <label>¿Esta cerrado?</label>
    <div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Is_Closed1" value="true">
        <label class="form-check-label" for="inlineRadio1">Si</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Is_Closed2" value="false">
        <label class="form-check-label" for="inlineRadio2">No</label>
      </div>
    </div>
  </div>
</form>  
`;

import { base64Pdf } from '../../../../../../assets/data/pdf-base-64';


@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss', '../catalogos.component.scss', '../ejecutivos-sucursal/ejecutivos-sucursal.component.scss']
})
export class SucursalesComponent implements OnInit {
  displayedColumns: string[] = [
    'sirhSucursalId',
    'nombreSucursal', 
    'distritoId',
    'distritoNombre' ,
    'divisionId' ,
    'divisionNombre' ,
    'tipoDispositivo' ,
    'ejecutivoEAV' ,
    'ejecutivoPriority' , 
    'ejecutivoTotal' ,
    'isClosed' ,
    'edit'];
  dataSource: MatTableDataSource<ISucursal>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  bodyTemplateEjecutivo: string = bodyTemplateGuide;

  constructor(private notificacionesService: NotificacionesService) {
    // Create 100 users
    const sucursales: ISucursal[] = [
      {
        sirhSucursalId: 1,
        nombreSucursal: 'Sucursal1',
        distritoId: 2,
        distritoNombre: 'Distrito2',
        divisionId: 3,
        divisionNombre: 'Division3',
        tipoDispositivo: 'Dispositivo 1',
        ejecutivoEAV: 5,
        ejecutivoPriority: 3,
        ejecutivoTotal: 8,
        isClosed: false,
      },
    ]  

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(sucursales);
  }

  ngOnInit(): void { 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openModalAdd() {
    this.openModal('Agregar', 'Guardar', 'Regresar','Sucursal agregada exitosamente','Error al agregar sucursal', this.bodyTemplateEjecutivo);
  }

  openModalEdit( sucursal: ISucursal) {
    console.log(sucursal);
    let body = `
    <form>
  <div class="form-group row flex-column">
    <label for="nombreSucursal" class="col col-form-label">Nombre de la Sucursal</label>
    <div >
      <input type="text"  class="form-control-plaintext form-control-sm" id="nombreSucursal" value="${sucursal.nombreSucursal}">
    </div>
  </div>
  <div class="row">
    <div class="form-group ml-2 col">
      <label for="distritoNombre">Distrito</label>
      <select class="form-control-plaintext form-control-sm" style="width: 163px; margin: auto;" id="distritoNombre">
        <option value="1">Distrito 1</option>
        <option value="2">Distrito 2</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="form-group ml-2 col">
      <label for="divisionNombre">División</label>
      <select class="form-control-plaintext form-control-sm" style="width: 163px; margin: auto;" id="divisionNombre">
        <option value="1">División 1</option>
        <option value="2">División 2</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="form-group ml-2 col">
      <label for="tipoDispositivo">Tipo de dispositivo</label>
      <select class="form-control-plaintext form-control-sm" style="width: 163px; margin: auto;" id="tipoDispositivo">
        <option value="1">Dispositivo 1</option>
        <option value="2">Dispositivo 2</option>
      </select>
    </div>
  </div>
  <div class="form-group row flex-column">
    <label for="ejecutivoEAV" class="col col-form-label">Número de ejecutivos no priority asignados</label>
    <div >
      <input type="number" class="form-control-plaintext form-control-sm" id="ejecutivoEAV" value="${sucursal.ejecutivoEAV}">
    </div>
  </div>
  <div class="form-group row flex-column">
    <label for="ejecutivoPriority" class="col col-form-label">Número total de Ejecutivos Prioririty asignados</label>
    <div >
      <input type="number" class="form-control-plaintext form-control-sm" id="ejecutivoPriority" value="${sucursal.ejecutivoPriority}">
    </div>
  </div>
  <div class="form-group row flex-column">
    <label for="ejecutivoTotal" class="col col-form-label">Número de ejecutivo total de la sucursal</label>
    <div >
      <input type="number" class="form-control-plaintext form-control-sm" id="ejecutivoTotal" value="${sucursal.ejecutivoTotal}">
    </div>
  </div>
  <div class="row justify-content-center flex-column">
    <label>¿Esta cerrado?</label>
    <div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Is_Closed1" value="true" checked="true">
        <label class="form-check-label" for="inlineRadio1">Si</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Is_Closed2" value="false" checked="false">
        <label class="form-check-label" for="inlineRadio2">No</label>
      </div>
    </div>
  </div>
</form>  
    `;

    this.openModal('EDICIÓN DE SUCURSAL', 'GUARDAR', 'CANCELAR','Sucursal editada exitosamente','Error al editar la sucursal', body);
  }

  openModal(title: string, btnOk: string, btnCancel: string, successMessage: string, errorMessage: string, body: string ) {
    Swal.fire({
      title: title,
      html: body ,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: btnOk,
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: btnCancel,
      cancelButtonAriaLabel: 'Thumbs down',
      allowOutsideClick: false,
      
      didClose: () => {
        console.log('close')
      }
      
    }).then( res => {
      console.log('res',res);
      if( !res.dismiss ) {
        this.notificacionesService.lanzarNotificacion(successMessage, '', 'success')
      } else {
        this.notificacionesService.lanzarNotificacion( errorMessage , '', 'error')
      }
     })
    .catch( err => {
      console.log('error', err)
    } )
  }

  downloadPdf(base64String, fileName) {
    const source = `${base64String}`;
    const link = document.createElement("a"); 
    link.href = source;
    link.download = `${fileName}` 
    link.click();
  }

  onClickDownloadPdf(nameFile: string){
    let base64String = base64Pdf;
    this.downloadPdf(base64String, nameFile);
  }
}


