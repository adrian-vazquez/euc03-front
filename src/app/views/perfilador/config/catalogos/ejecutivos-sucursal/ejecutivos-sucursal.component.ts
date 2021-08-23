import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { NotificacionesService } from '../../../../../services/notificaciones.service';

interface IEjecutivo {
  soied?: string,
  nomina: string,
  nombre: string,
  sirhSucursal?: string,
  puestoTipo: string,
  priority?: boolean,

}

import { base64Pdf } from '../../../../../../assets/data/pdf-base-64';

const bodyTemplateGuide = `
<form>
  <div class="form-group row">
    <label for="soeid" class="col-sm-3 col-form-label">SOEID</label>
    <div class="col-sm-9">
      <input type="text"  class="form-control-plaintext form-control-sm" id="soeid">
    </div>
  </div>
  <div class="form-group row">
    <label for="nomina" class="col-sm-3 col-form-label">Nomina</label>
    <div class="col-sm-9">
      <input type="text"  class="form-control-plaintext form-control-sm" id="nomina">
    </div>
  </div>
  <div class="form-group row">
    <label for="nombre" class="col-sm-3 col-form-label">Nombre</label>
    <div class="col-sm-9">
      <input type="text"  class="form-control-plaintext form-control-sm" id="nombre">
    </div>
  </div>
  <div class="form-group row">
    <label for="sirh" class="col-sm-3 col-form-label">SIRH</label>
    <div class="col-sm-9">
      <input type="text"  class="form-control-plaintext form-control-sm" id="sirh">
    </div>
  </div>
  <div class="row">
    <div class="form-group ml-2 col-5">
      <label for="priority">Priority</label>
      <select class="form-control-plaintext form-control-sm" id="priority">
        <option value="0">0</option>
        <option value="1">1</option>
      </select>
    </div>
    <div class="form-check col-5">
      <input class="form-check-input" type="checkbox" value="" id="priorityDisbled">
      <label class="form-check-label" for="priorityDisbled">
        Inhabilitado
      </label>
    </div>
  </div>
  <div class="row">
    <div class="form-group ml-2 col-5">
      <label for="tipoPuesto">Tipo de puesto</label>
      <select class="form-control-plaintext form-control-sm" id="tipoPuesto">
        <option value="Administrador">Administrador</option>
        <option value="Ejecutivo">Ejecutivo</option>
      </select>
    </div>
    <div class="form-check col-5">
      <input class="form-check-input" type="checkbox" value="" id="tipoPuestoDisbled">
      <label class="form-check-label" for="tipoPuestoDisbled">
        Inhabilitado
      </label>
    </div>
  </div>
</form> 
`;

@Component({
  selector: 'app-ejecutivos-sucursal',
  templateUrl: './ejecutivos-sucursal.component.html',
  styleUrls: ['./ejecutivos-sucursal.component.scss',  '../catalogos.component.scss']
})
export class EjecutivosSucursalComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nomina', 'nombre', 'puestoTipo', 'edit'];
  dataSource: MatTableDataSource<IEjecutivo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  bodyTemplateEjecutivo: string = bodyTemplateGuide;

  constructor(private notificacionesService: NotificacionesService) {
    // Create 100 users
    const ejecutivos: IEjecutivo[] = [
      {
        soied: '1',
        nomina: '123',
        nombre: 'USER TEST (ADMIN)',
        puestoTipo: 'Administrador',
      },
      {
        soied: '2',
        nomina: '1234',
        nombre: 'USER TEST',
        puestoTipo: 'Administrador',
      },
    ]  

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ejecutivos);
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

  openModalEdit( ejecutivo: IEjecutivo) {
    console.log(ejecutivo);
    let body = `
    <form>
      <div class="form-group row">
        <label for="soeid" class="col-sm-3 col-form-label">SOEID</label>
        <div class="col-sm-9">
          <input type="text" value="${ejecutivo.soied}" class="form-control-plaintext form-control-sm" id="soeid">
        </div>
      </div>
      <div class="form-group row">
        <label for="nomina" class="col-sm-3 col-form-label">Nomina</label>
        <div class="col-sm-9">
          <input type="text" value="${ejecutivo.nomina}" class="form-control-plaintext form-control-sm" id="nomina">
        </div>
      </div>
      <div class="form-group row">
        <label for="nombre" class="col-sm-3 col-form-label">Nombre</label>
        <div class="col-sm-9">
          <input type="text" value="${ejecutivo.nombre}" class="form-control-plaintext form-control-sm" id="nombre">
        </div>
      </div>
      <div class="form-group row">
        <label for="sirh" class="col-sm-3 col-form-label">SIRH</label>
        <div class="col-sm-9">
          <input type="text" value="${ejecutivo.sirhSucursal || '' }" class="form-control-plaintext form-control-sm" id="sirh">
        </div>
      </div>
      <div class="row">
        <div class="form-group ml-2 col-5">
          <label for="priority">Priority</label>
          <select class="form-control-plaintext form-control-sm" id="priority">
            <option value="0">0</option>
            <option value="1">1</option>
          </select>
        </div>
        <div class="form-check col-5">
          <input class="form-check-input" type="checkbox" value="" id="priorityDisbled">
          <label class="form-check-label" for="priorityDisbled">
            Inhabilitado
          </label>
        </div>
      </div>
      <div class="row">
        <div class="form-group ml-2 col-5">
          <label for="tipoPuesto">Tipo de puesto</label>
          <select class="form-control-plaintext form-control-sm" id="tipoPuesto">
            <option value="Administrador">Administrador</option>
            <option value="Ejecutivo">Ejecutivo</option>
          </select>
        </div>
        <div class="form-check col-5">
          <input class="form-check-input" type="checkbox" value="" id="tipoPuestoDisbled">
          <label class="form-check-label" for="tipoPuestoDisbled">
            Inhabilitado
          </label>
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
