import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../../../../services/notificaciones.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private notificationService: NotificacionesService) { }

  ngOnInit(): void {
  }

  loadImg( banner: number ) {
    if( banner === 1) {

    } else if( banner === 2) {

    } else if( banner === 3) {

    } else if( banner === 4) {

    }
    this.notificationService.lanzarNotificacion(`Banner cargado correctamente`, 'Banner', 'success').catch((error) => {console.log(error)})

  }
  loadDocument( document: number ) {
    if( document === 1) {

    } else if( document === 2) {

    } else if( document === 3) {

    } else if( document === 4) {

    }
    this.notificationService.lanzarNotificacion(`Documento cargado correctamente`, 'Documento', 'success').catch((error) => {console.log(error)})

  }

}
