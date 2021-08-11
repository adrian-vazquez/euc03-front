import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { NotificacionesService } from '../../../../../services/notificaciones.service';

export interface IGuiasOperativas {
  id: string,
  description: string,
}

const bodyTemplateGuide = `
<form>
  <div class="form-group row">
    <label for="idGuide" class="col-sm-3 col-form-label">ID</label>
    <div class="col-sm-9">
      <input type="text"  class="form-control-plaintext" id="idGuide">
    </div>
  </div>
  <div class="form-group row">
    <label for="description" class="col-sm-4 col-form-label">Descripción</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="description" >
    </div>
  </div>
</form>
`;


@Component({
  selector: 'app-guias-operativas',
  templateUrl: './guias-operativas.component.html',
  styleUrls: ['./guias-operativas.component.scss',  '../catalogos.component.scss']
})
export class GuiasOperativasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'description', 'edit', 'editSteps'];
  dataSource: MatTableDataSource<IGuiasOperativas>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  bodyTemplateGuide = bodyTemplateGuide;
  constructor(private notificacionesService: NotificacionesService) {
    // Create 100 users
    const guiasOperativas: IGuiasOperativas[] = [
      {
        id: 'OFERTA_BAU',
        description: 'Guía de las ofertas BAU de sucursal',
      },
      {
        id: 'OFERTA_FONDOS_1',
        description: 'Guía de las ofertas BAU de: Fondo BLKGUB1 B0-D1',
      },
    ] 

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(guiasOperativas);
  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openModalAdd() {
    this.openModal('ALTA DE GUÍAS INFORMATIVAS', 'GUARDAR', 'CANCELAR','Guia dada de alta','Error al dar de alta la guia', this.bodyTemplateGuide);
  }

  openModalEdit(type:number, guide) {
    console.log(guide);
    let body = `
    <form>
      <div class="form-group row">
        <label for="idGuide" class="col-sm-3 col-form-label">ID</label>
        <div class="col-sm-9">
          <input type="text" value="${guide.id}" class="form-control-plaintext" id="idGuide">
        </div>
      </div>
      <div class="form-group row">
        <label for="description" class="col-sm-4 col-form-label">Descripción</label>
        <div class="col-sm-8">
          <input type="text" value="${guide.description}" class="form-control" id="description" >
        </div>
      </div>
    </form>
    `;

    if( type === 1 ) {
      this.openModal('EDICIÓN DE GUÍAS INFORMATIVAS', 'GUARDAR', 'CANCELAR','Guia editada exitosamente','Error al editar la guia', body);
      
    } else if( type === 2 ) {
      body += `
            <table class="table table-striped table-sm table-responsive">
              <thead>
                <tr>
                  <th scope="col">Paso</th>
                  <th scope="col">Descripción del Paso</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Agregar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>1.Ingresa a la siguiente ruta de Alianzas Fondos si requieres mayor información o la liga de contratación: http://intranet.banamex.com/alianzas/citibluecapacitacion.html</td>
                  <td>E</td>
                  <td>+</td>
                  <td>X</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>descripción</td>
                  <td>E</td>
                  <td>+</td>
                  <td>X</td>
                </tr>
              </tbody>
            </table>
      `;

      this.openModal('EDICIÓN DE PASOS DE LA GUÍA INFORMATIVA', 'GUARDAR', 'CANCELAR','Guia editada exitosamente','Error al editar la guia', body);

    }

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

 
}
