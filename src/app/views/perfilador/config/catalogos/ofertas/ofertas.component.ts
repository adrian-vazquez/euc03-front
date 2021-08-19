

import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { NotificacionesService } from '../../../../../services/notificaciones.service';

interface IPDFEspecial {
  pdfEspecialOfertaId?: string,
  pdfEspecialNombreArchivo?: IPdf,
  pdfEspecialUrl?: string,
  pdfEspecialTipo?: boolean,
}

interface IPdf {
  name: string,
  base64: string,
}

 
const bodyTemplateGuide = ` 
<form>
  <div class="form-group row flex-column">
    <label for="pdfEspecialNombreArchivo" class="col col-form-label">Nombre del archivo</label>
    <div >
      <input type="text"  class="form-control-plaintext form-control-sm" id="pdfEspecialNombreArchivo">
    </div>
  </div>
  <div class="form-group row flex-column">
    <label for="pdfEspecialNombreArchivo" class="col col-form-label">Archivo</label>
    <div class="col">
      <input type="file"  id="pdfEspecialFile" accept="pdf/*" style="display: none;">
      <label class="label-file" for="pdfEspecialFile">Selecciona un Archivo...</label>
    </div>
  </div>
  <div class="row">
    <div class="form-group ml-2 col">
      <label for="pdfEspecialTipo">Tipo de PDF Epecial.</label>
      <select class="form-control-plaintext form-control-sm" style="width: 163px; margin: auto;" id="pdfEspecialTipo">
        <option value="true">Foleado</option>
        <option value="false">No Foleado</option>
      </select>
    </div>
  </div>
</form>  
`;

import { base64Pdf } from '../../../../../../assets/data/pdf-base-64';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss', '../catalogos.component.scss', '../ejecutivos-sucursal/ejecutivos-sucursal.component.scss']
})
export class OfertasComponent implements OnInit {
  displayedColumns: string[] = ['pdfEspecialOfertaId', 'pdfEspecialNombreArchivo', 'pdfEspecialUrl', 'pdfEspecialTipo' , 'edit'];
  dataSource: MatTableDataSource<IPDFEspecial>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  bodyTemplateEjecutivo: string = bodyTemplateGuide;

  constructor(private notificacionesService: NotificacionesService) {
    // Create 100 users
    const pdfsEspeciales: IPDFEspecial[] = [
      {
        pdfEspecialOfertaId: '1',
        pdfEspecialNombreArchivo: {
          name: 'nombre archivo 1',
          base64: base64Pdf
        } ,
        pdfEspecialTipo: true,
        pdfEspecialUrl: 'https://www.alberguemontfalco.com/fotosbd/120520140951280826.pdf'
      },
      {
        pdfEspecialOfertaId: '2',
        pdfEspecialNombreArchivo: {
          name: 'nombre archivo 2',
          base64: base64Pdf
        } ,        pdfEspecialTipo: false,
        pdfEspecialUrl: 'https://www.alberguemontfalco.com/fotosbd/120520140951280826.pdf'
      },
    ]  

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(pdfsEspeciales);
  }

  ngOnInit(): void { 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openModalAdd() {
    this.openModal('Agregar', 'Guardar', 'Regresar','Ejecutivo agregado exitosamente','Error al agregar ejecutivo', this.bodyTemplateEjecutivo);
  }

  openModalEdit( pdfEspecial: IPDFEspecial) {
    console.log(pdfEspecial);
    let body = `
    <form>
        <div class="form-group row flex-column">
          <label for="pdfEspecialNombreArchivo" class="col col-form-label">Nombre del archivo</label>
          <div >
            <input type="text"  class="form-control-plaintext form-control-sm" id="pdfEspecialNombreArchivo" value="${pdfEspecial.pdfEspecialNombreArchivo.name}">
          </div>
        </div>
        <div class="form-group row flex-column">
          <label for="pdfEspecialNombreArchivo" class="col col-form-label">Archivo</label>
          <div class="col">
            <input type="file"  id="pdfEspecialFile" accept="pdf/*" style="display: none;">
            <label class="label-file" for="pdfEspecialFile">Selecciona un Archivo...</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group ml-2 col">
            <label for="pdfEspecialTipo">Tipo de PDF Epecial.</label>
            <select class="form-control-plaintext form-control-sm" style="width: 163px; margin: auto;" id="pdfEspecialTipo">
              <option selected="${pdfEspecial.pdfEspecialTipo === false ? true : false}" value="true">Foleado</option>
              <option selected="${pdfEspecial.pdfEspecialTipo === true ? true : false}" value="false">No Foleado</option>
            </select>
          </div>
        </div>
      </form> 
    `;

    this.openModal('EDICIÓN DE USUARIO', 'GUARDAR', 'CANCELAR','Usuario editado exitosamente','Error al editar la usuario', body);
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



