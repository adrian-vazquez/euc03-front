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

interface ITasas
{
  tasaId: number;
  tasaDescripcion: string;
  tasaMontoDesde: number;
  tasaMontoHasta: number;
  tasaPlazo: number;
  tasaTipo: number;
  idTasaReferencia: number;
  porcentajeTasa: number;
  sobretasaTasa: number;
  tasaTasa: number;

}

 
const bodyTemplateGuide = ` 
<form>
  <div class="form-group row flex-column">
    <div class="form-floating">
        <textarea class="form-control form-control-sm" placeholder="Descripción" id="tasaDescripcion"></textarea>
    </div>
  </div>

  <div class="form-group row flex-column">
  <div class="form-floating">
  <input class="form-control form-control-sm" placeholder="Tasa monto desde " id="tasaMontoDesde" disabled/>
  </div>
</div>

<div class="form-group row flex-column">
<div class="form-floating">
<input class="form-control form-control-sm" placeholder="Tasa monto hasta" id="tasaMontoHasta"/>
</div>
</div>

<div class="form-group row flex-column">
<div class="form-floating">
<input class="form-control form-control-sm" placeholder="Plazo tasa" id="tasaPlazo" disabled/>
</div>
</div>

<div class="form-group row flex-column">
<div class="form-floating">
<input class="form-control form-control-sm" placeholder="Tipo de Tasa" id="tasaTipo"/> // podríamos agregar un select
</div>
</div>

<div class="form-group row flex-column">
<div class="form-floating">
<input class="form-control form-control-sm" placeholder="ID tasa de referencia" id="idTasaReferencia"/>
</div>
</div>

<div class="form-group row flex-column">
<div class="form-floating">
<input class="form-control form-control-sm" placeholder="Porcentaje de tasa" id="porcentajeTasa"/>
</div>
</div>

<div class="form-group row flex-column">
<div class="form-floating">
<input class="form-control form-control-sm" placeholder="Sobre tasa a tasa" id="sobretasaTasa"/>
</div>
</div>

<div class="form-group row flex-column">
<div class="form-floating">
<input class="form-control form-control-sm" placeholder="Tasa tasa" id="tasaTasa"/>
</div>
</div>

</form>  
`;

import { base64Pdf } from '../../../../../../assets/data/pdf-base-64';

@Component({
  selector: 'app-tasas',
  templateUrl: './tasas.component.html',
  styleUrls: ['./tasas.component.scss', '../catalogos.component.scss', '../ejecutivos-sucursal/ejecutivos-sucursal.component.scss']
})
export class TasasComponent implements OnInit {
  
  displayedColumns: string[] = ['tasaId','tasaDescripcion', 'tasaMontoDesde',
                              'tasaMontoHasta', 'tasaPlazo', 
                              'tasaTipo', 'idTasaReferencia',
                              'porcentajeTasa', 'sobretasaTasa',
                              'tasaTasa', 'edit'];

  dataSource: MatTableDataSource<ITasas>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  bodyTemplateEjecutivo: string = bodyTemplateGuide;

  constructor(private notificacionesService: NotificacionesService) {
    // Create 100 users
    const ofertas: ITasas[] = [
      {
  tasaId: 1,
  tasaDescripcion: "descripción 1",
  tasaMontoDesde: 11,
  tasaMontoHasta: 11,
  tasaPlazo: 11,
  tasaTipo: 11,
  idTasaReferencia: 11,
  porcentajeTasa: 11,
  sobretasaTasa: 11,
  tasaTasa: 11,
      },
      {
        tasaId: 2,
        tasaDescripcion: "descripción 2",
        tasaMontoDesde: 22,
        tasaMontoHasta: 22,
        tasaPlazo: 22,
        tasaTipo: 22,
        idTasaReferencia: 22,
        porcentajeTasa: 22,
        sobretasaTasa: 22,
        tasaTasa: 22,
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

  openModalEdit( tasa: ITasas) {
    
    let body = `
    <form>

      <div class="form-group row flex-column">
        <div class="form-floating">
            <textarea class="form-control form-control-sm" placeholder="Descripción" id="tasaDescripcion">${tasa.tasaDescripcion}</textarea>
        </div>
        </div>
    
      <div class="form-group row flex-column">
      <div class="form-floating">
      <input class="form-control form-control-sm" placeholder="Tasa monto desde " id="tasaMontoDesde" disable value='${tasa.tasaMontoDesde}' d/>
      </div>
    </div>
    
    <div class="form-group row flex-column">
    <div class="form-floating">
    <input class="form-control form-control-sm" placeholder="Tasa monto hasta" id="tasaMontoHasta" value='${tasa.tasaMontoHasta}' />
    </div>
    </div>
    
    <div class="form-group row flex-column">
    <div class="form-floating">
    <input class="form-control form-control-sm" placeholder="Plazo tasa" id="tasaPlazo" disable value='${tasa.tasaPlazo}' d/>
    </div>
    </div>
    
    <div class="form-group row flex-column">
    <div class="form-floating">
    <input class="form-control form-control-sm" placeholder="Tipo de Tasa" id="tasaTipo" value='${tasa.tasaTipo}' /> 
    </div>
    </div>
    
    <div class="form-group row flex-column">
    <div class="form-floating">
    <input class="form-control form-control-sm" placeholder="ID tasa de referencia" id="idTasaReferencia" value='${tasa.idTasaReferencia}' />
    </div>
    </div>
    
    <div class="form-group row flex-column">
    <div class="form-floating">
    <input class="form-control form-control-sm" placeholder="Porcentaje de tasa" id="porcentajeTasa" value='${tasa.porcentajeTasa}' />
    </div>
    </div>
    
    <div class="form-group row flex-column">
    <div class="form-floating">
    <input class="form-control form-control-sm" placeholder="Sobre tasa a tasa" id="sobretasaTasa" value='${tasa.sobretasaTasa}' />
    </div>
    </div>
    
    <div class="form-group row flex-column">
    <div class="form-floating">
    <input class="form-control form-control-sm" placeholder="Tasa tasa" id="tasaTasa" value='${tasa.tasaTasa}' />
    </div>
    </div>

     
    </form> 
    `;

    this.openModal('EDICIÓN DE TASA', 'GUARDAR', 'CANCELAR','Tasa editada exitosamente','Error al editar la tasa', body);
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
 

