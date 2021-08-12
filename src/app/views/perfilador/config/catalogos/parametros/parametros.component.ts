import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../../../../../services/notificaciones.service';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss', '../catalogos.component.scss']
})
export class ParametrosComponent implements OnInit {

  constructor(private notificacionesService: NotificacionesService) { }

  ngOnInit(): void {
  }

  save() {
    this.notificacionesService.lanzarNotificacion('Parametro actualizado', '', 'success');
  }

}
