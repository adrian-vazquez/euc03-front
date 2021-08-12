import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


import { GraficasImpl } from './congifGraficas/GraficasImpl';
import { DatosGraficas } from './congifGraficas/DatosGraficas';

import { Chart } from "chart.js";

@Component({
  selector: 'app-campanas-online',
  templateUrl: './campanas-online.component.html',
  styleUrls: ['./campanas-online.component.scss']
})
export class CampanasOnlineComponent implements OnInit {

    numeroPaginas: number;
    mostrarMensaje: Boolean;;
    mensaje: string;

  constructor() {   }
 
  ngOnInit(): void 
  {
    this.mostrarMensaje = false;
    this.mensaje = "";
   


      this.numeroPaginas = 2;

          let graficas: GraficasImpl = new GraficasImpl();
          let datos: DatosGraficas = new DatosGraficas();

          graficas.grafica(datos.datosFechas(), datos.datosColores(), 'graficaSolicitudesCampana');
          graficas.grafica(datos.datosFechas(), datos.datosColores(), 'graficaMontoCampana');
          graficas.graficaPastel();
        
  }

//   El Botón “Calcular” permite recalcular las gráficas en cualquier momento.
  calcular():void
  {
    this.mostrarMensaje = !this.mostrarMensaje;
    this.mensaje = "Mensaje";
  }
  ejecutivosPyme(): void
  {
    this.mostrarMensaje = !this.mostrarMensaje;
    this.mensaje = "Mensaje";
  }


  solicitudInversiones():void
  {

  }




  

}

