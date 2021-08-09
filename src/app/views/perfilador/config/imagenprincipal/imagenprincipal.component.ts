import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../../../../services/notificaciones.service';

@Component({
  selector: 'app-imagenprincipal',
  templateUrl: './imagenprincipal.component.html',
  styleUrls: ['./imagenprincipal.component.scss']
})
export class ImagenprincipalComponent implements OnInit {

  constructor(private notificationService: NotificacionesService) { }

  ngOnInit(): void {
  }

  loadImg( banner: number ) {
    this.notificationService.lanzarNotificacion(`Banner cargado correctamente`, 'Banner', 'success').catch((error) => {console.log(error)})
  }

}
