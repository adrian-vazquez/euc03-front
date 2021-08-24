import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { NotificacionesService } from '../../../../../services/notificaciones.service';



interface ICampania {
  campanaId: number,
  campanaNombre: string,
  campanaInicio: Date,
  campanaFin: Date,
  campanaEstatus: boolean,
}


const bodyTemplateGuide = ` 
<form>
  <div class="form-group row flex-column">
    <div class="form-floating">
    <input class="form-control form-control-sm" placeholder="Nombre campaña" id="campanaNombre"/>
    </div>
  </div>


<div class="form-group row flex-coFlumn">
<div class="input-group mb-3">
<span class="input-group-text">Fecha Inicio</span>
<input type="date" class="form-control" value='2019-10-10'>
</div>
</div>


    <div class="form-group row flex-coFlumn">
    <div class="input-group mb-3">
    <span class="input-group-text">Fecha Inicio</span>
    <input type="date" class="form-control" value='2019-10-10' />
  </div>
  </div>

  <div class="form-group row flex-column">
<div class="form-floating">
<label for='estatusCampana'> Estatus campaña
<input type="checkbox" checked data-toggle="toggle" id='estatusCampana'>
</label>
</div>
</div>

</form>  
`;

import { base64Pdf } from '../../../../../../assets/data/pdf-base-64';

@Component({
  selector: 'app-campania',
  templateUrl: './campania.component.html',
  styleUrls: ['./campania.component.scss', '../catalogos.component.scss', '../ejecutivos-sucursal/ejecutivos-sucursal.component.scss']
})
export class CampaniaComponent implements OnInit {

  fecha: string = '1994-2-2';

  gola: string = '1994-2-2';

  displayedColumns: string[] = ['campanaId', 'campanaNombre', 'campanaInicio','campanaFin','campanaEstatus', 'edit'];
  dataSource: MatTableDataSource<ICampania>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  bodyTemplateEjecutivo: string = bodyTemplateGuide;

  constructor(private notificacionesService: NotificacionesService) {
    // Create 100 users
    const campania: ICampania[] = [
      {
        campanaId: 1,
        campanaNombre: "campañia 1",
        campanaInicio: new Date(),
        campanaFin: new Date(),
        campanaEstatus: false



      },
      {
        campanaId: 1,
        campanaNombre: "campañia 2",
        campanaInicio: new Date(),
        campanaFin: new Date(),
        campanaEstatus: true



      },
    ]

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(campania);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openModalAdd() {
    this.openModal('Agregar', 'Guardar', 'Regresar', 'Ejecutivo agregado exitosamente', 'Error al agregar ejecutivo', this.bodyTemplateEjecutivo);
  }

  openModalEdit(campania: ICampania) {
console.log( campania);
    let body = `
    <form>

        <div class="form-group row flex-column">
          <div class="form-floating">
             <input class="form-control form-control-sm" placeholder="Nombre campaña" id="campanaNombre" value='${campania.campanaNombre}'>
          </div>
      </div>


      <div class="form-group row flex-coFlumn">
        <div class="input-group mb-3">
          <span class="input-group-text">Fecha Inicio</span>
          <input type="date" class="form-control" value='2019-10-10' >
        </div>
      </div>


    <div class="form-group row flex-coFlumn">
    <div class="input-group mb-3">
    <span class="input-group-text">Fecha Inicio</span>
    <input type="date" class="form-control" value='2019-11-11'>
  </div>
  </div>

  <div class="form-group row flex-column">
<div class="form-floating">
<label for='estatusCampana'> Estatus campaña
<input type="checkbox" checked data-toggle="toggle" id='estatusCampana'>
</label>
</div>
</div>

    </form> 
    `;

    this.openModal('EDICIÓN DE CAMPAÑA', 'GUARDAR', 'CANCELAR', 'Campaña editada exitosamente', 'Error al editar la Campaña', body);
  }

  openModal(title: string, btnOk: string, btnCancel: string, successMessage: string, errorMessage: string, body: string) {
    Swal.fire({
      title: title,
      html: body,
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

    }).then(res => {
      console.log('res', res);
      if (!res.dismiss) {
        this.notificacionesService.lanzarNotificacion(successMessage, '', 'success')
      } else {
        this.notificacionesService.lanzarNotificacion(errorMessage, '', 'error')
      }
    })
      .catch(err => {
        console.log('error', err)
      })
  }

  downloadPdf(base64String, fileName) {
    const source = `${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}`
    link.click();
  }

  onClickDownloadPdf(nameFile: string) {
    let base64String = base64Pdf;
    this.downloadPdf(base64String, nameFile);
  }
}



