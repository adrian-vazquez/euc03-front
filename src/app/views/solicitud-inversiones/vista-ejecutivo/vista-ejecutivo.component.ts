import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NotificacionesService } from '../../../services/notificaciones.service';
import { SolicitudInversionesService } from '../../../services/solicitud-inverciones/solicitud-inversiones.service';



@Component({
  selector: 'app-vista-ejecutivo',
  templateUrl: './vista-ejecutivo.component.html',
  styleUrls: ['./vista-ejecutivo.component.scss']
})
export class VistaEjecutivoComponent implements OnInit {

  columnHeader = {
    id: 'ID',
    bookName: 'Book Name',
    price: 'Price',
    author: 'Author',
    cancel: 'Cancelar',
    actions: 'Actions'
  };
  tableData: any[];

  constructor(public SolicitudInversionesService: SolicitudInversionesService) {}

  ngOnInit() {
    // Apply condition on edit and delete button
    this.SolicitudInversionesService.getList().subscribe(res => {
      this.tableData = res.map(item => {
        if (item['author'] === 'A') {
          item['isEditable'] = false;
          return item;
        }
        if (item['author'] === 'B') {
          item['isDeletable'] = false;
          return item;
        }
        return item;
      });
    });
  }
  
}
