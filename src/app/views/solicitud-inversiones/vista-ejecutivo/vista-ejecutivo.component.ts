import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../../../services/notificaciones.service';

@Component({
  selector: 'app-vista-ejecutivo',
  templateUrl: './vista-ejecutivo.component.html',
  styleUrls: ['./vista-ejecutivo.component.scss']
})
export class VistaEjecutivoComponent implements OnInit {

  constructor(private notificacionesService: NotificacionesService) { }

  ngOnInit(): void {
  }

  searchClient(){
    this.notificacionesService.lanzarNotificacion('Alerta', 'Titulo', 'success').catch((error) => {console.log(error)})
  }

}
