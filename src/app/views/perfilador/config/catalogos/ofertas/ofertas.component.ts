

import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { NotificacionesService } from '../../../../../services/notificaciones.service';

interface IOferta {
  participacionId: number,
  participacionDescripcion: string,

}

 
const bodyTemplateGuide = ` 
<form>
  <div class="form-group row flex-column">
    <div class="form-floating">
        <textarea class="form-control form-control-sm" placeholder="Descripción" id="participacionDescripcion"></textarea>
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
  displayedColumns: string[] = ['participacionId', 'participacionDescripcion',  'edit'];
  dataSource: MatTableDataSource<IOferta>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  bodyTemplateEjecutivo: string = bodyTemplateGuide;

  constructor(private notificacionesService: NotificacionesService) {
    // Create 100 users
    const ofertas: IOferta[] = [
      {
        participacionId: 1,
        participacionDescripcion: 'Descripción 1'
      },
      {
        participacionId: 2,
        participacionDescripcion: 'Descripción 2'
      },
    ]  

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ofertas);
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

  openModalEdit( oferta: IOferta) {
    console.log(oferta);
    let body = `
    <form>
      <div class="form-group row flex-column">
        <div class="form-floating">
            <textarea class="form-control form-control-sm" placeholder="Descripción" id="participacionDescripcion">${oferta.participacionDescripcion}</textarea>
        </div>
      </div>
    </form> 
    `;

    this.openModal('EDICIÓN DE OFERTA', 'GUARDAR', 'CANCELAR','Oferta editada exitosamente','Error al editar la Oferta', body);
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
 


