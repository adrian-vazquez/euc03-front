import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { NotificacionesService } from '../../../../../services/notificaciones.service';

export interface IFolios {
  pdfFolioId?: number,
  pdfFolioValor?: number,
  pdfFolioEspecialOferta?: number,
  pdfFolioIdCliente?: number,
}

export const foliosCatalog = [
  {
    pdfFolioId: 1,
    pdfFolioValor: 3434234,
    pdfFolioEspecialOferta: 2,
    pdfFolioIdCliente: 2
  }
];
 
const bodyTemplateGuide = ` 
<form>
  <div class="form-group row flex-column">
    <label for="pdfFolioValor" class="col col-form-label">Folio</label>
    <div >
      <input type="number"  class="form-control-plaintext form-control-sm" id="pdfFolioValor">
    </div>
  </div>
  <div class="row">
    <div class="form-group ml-2 col">
      <label for="pdfFolioEspecialOferta">PDF Especial</label>
      <select class="form-control-plaintext form-control-sm" style="width: 163px; margin: auto;" id="pdfFolioEspecialOferta">
        <option value="1">PDF especial 1</option>
        <option value="2">PDF especial 2</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="form-group ml-2 col">
      <label for="pdfFolioIdCliente">Cliente</label>
      <select class="form-control-plaintext form-control-sm" style="width: 163px; margin: auto;" id="pdfFolioIdCliente">
        <option value="1">Cliente 1</option>
        <option value="2">Cliente 2</option>
      </select>
    </div>
  </div>
</form>  
`;

import { base64Pdf } from '../../../../../../assets/data/pdf-base-64';
import { pdfsEspecialesCatalog } from '../pdf-especial/pdf-especial-carga/pdf-especial-carga.component';

@Component({
  selector: 'app-folios',
  templateUrl: './folios.component.html', 
  styleUrls: ['./folios.component.scss', '../catalogos.component.scss', '../ejecutivos-sucursal/ejecutivos-sucursal.component.scss']
})
export class FoliosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['pdfFolioId', 'pdfFolioValor', 'pdfFolioEspecialOferta', 'pdfFolioIdCliente' , 'edit'];
  dataSource: MatTableDataSource<IFolios>;

  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort: MatSort;

  bodyTemplateEjecutivo: string = bodyTemplateGuide;

  constructor(private notificacionesService: NotificacionesService) {
    // Create 100 users
    const folios: IFolios[] = foliosCatalog;

    const pdfsEspeciales = pdfsEspecialesCatalog;

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(folios);
  }

  ngOnInit(): void { 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openModalAdd() {
    this.openModal('Agregar', 'Guardar', 'Regresar','Folio agregado exitosamente','Error al agregar folio', this.bodyTemplateEjecutivo);
  }

  openModalEdit( folio: IFolios) {
    console.log(folio);
    let body = `
    <form>
      <div class="form-group row flex-column">
        <label for="pdfFolioValor" class="col col-form-label">Folio</label>
        <div >
          <input type="number"  class="form-control-plaintext form-control-sm" id="pdfFolioValor" value="${folio.pdfFolioValor}">
        </div>
      </div>
      <div class="row">
        <div class="form-group ml-2 col">
          <label for="pdfFolioEspecialOferta">PDF Especial</label>
          <select class="form-control-plaintext form-control-sm" style="width: 163px; margin: auto;" id="pdfFolioEspecialOferta">
            <option value="1">PDF especial 1</option>
            <option value="2">PDF especial 2</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group ml-2 col">
          <label for="pdfFolioIdCliente">Cliente</label>
          <select class="form-control-plaintext form-control-sm" style="width: 163px; margin: auto;" id="pdfFolioIdCliente">
            <option value="1">Cliente 1</option>
            <option value="2">Cliente 2</option>
          </select>
        </div>
      </div>
    </form>  
    `;

    this.openModal('EDICIÓN DE FOLIO', 'GUARDAR', 'CANCELAR','Folio editado exitosamente','Error al editar el folio', body);
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

  getPdfEspecialName(id: number) {
    // debugger
    return pdfsEspecialesCatalog.find( pe => pe.pdfEspecialOfertaId === id)?.pdfEspecialNombreArchivo?.name;
  }
}

