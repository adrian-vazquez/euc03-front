import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


import { GraficasImpl } from './congifGraficas/Graficas';
import { DatosGraficas } from './congifGraficas/DatosGraficas';
import { Tablas } from './congifGraficas/Tablas';

import {  GraficasTime } from './congifGraficas/graficasTimeliness/Graficas';
import { DatosGraficasTime } from './congifGraficas/graficasTimeliness/DatosGrafica';



@Component({
  selector: 'app-campanas-online',
  templateUrl: './campanas-online.component.html',
  styleUrls: ['./campanas-online.component.scss']
})
export class CampanasOnlineComponent implements OnInit {

    numeroPaginas: number;
    mostrarMensaje: Boolean;
    mensaje: string;
    tablaDivisionales: Boolean;
    tablaSucursales: Boolean;
    tablaGerMercado: Boolean;
    tablaRegionales: Boolean;

    seleccion: string;

    mostrarTablas: Array<Boolean>;

  constructor() {   }
 
  ngOnInit(): void 
  {
    this.mostrarMensaje = false;
    this.tablaDivisionales = true;
    this.tablaSucursales = false;
    this.tablaGerMercado = false;
    this.tablaRegionales = false;

    this.mostrarTablas = [ this.tablaDivisionales,
                            this.tablaSucursales, 
                            this.tablaGerMercado ,
                            this.tablaRegionales ];

    this.mensaje = "";
    this.seleccion = "Divisionales";
   this.mostrarGraficas();

   // Va en otro apartado, solo esta aqui de ejemplo
   this.mostrarGraficasTimeLiness();


      this.numeroPaginas = 2;

 
        
  }
  private getRandom(min: number, max: number): Array<number> {
    let datosGraficas: Array<number> = [Math.random() * (max - min) + min,
                                        Math.random() * (max - min) + min,
                                        Math.random() * (max - min) + min,
                                        Math.random() * (max - min) + min,
                                        Math.random() * (max - min) + min,
                                        Math.random() * (max - min) + min];
    return datosGraficas;
  }

//   El Botón “Calcular” permite recalcular las gráficas en cualquier momento.
  calcular():void
  {
    this.mostrarMensaje = !this.mostrarMensaje;
    this.mensaje = "Mensaje";
    this.mostrarGraficas();
    
  }
  ejecutivosPyme(): void
  {
    this.mostrarMensaje = !this.mostrarMensaje;
    this.mensaje = "Mensaje";
  }


  solicitudInversiones():void
  {

  }
       
 
  public mostrarTablaDivisiones(): void
  {
    this.mostrarTablas = Tablas.mostrarTablas(0);
    this.seleccion = "Divisionales";
  }
  public mostrarTablaSucursales(): void
  {
    this.mostrarTablas = Tablas.mostrarTablas(1);
    this.seleccion = "Sucursales";
  }
  public mostrarTablaGerMercado(): void
  {
this.mostrarTablas = Tablas.mostrarTablas(2);
this.seleccion = "Ger Mercado";
  }
  public mostrarTablaRegionales(): void
  {
    this.mostrarTablas = Tablas.mostrarTablas(3);
    this.seleccion = "Regionales";
  }


  private mostrarGraficas():void
  {
    let graficas: GraficasImpl = new GraficasImpl();
    let datos: DatosGraficas = new DatosGraficas();

    let datosGrafica:Array<number> = this.getRandom(50,300);
    graficas.grafica(datos.datosFechas(), datos.datosColores(), 'graficaSolicitudesCampana', datosGrafica);
    graficas.grafica(datos.datosFechas(), datos.datosColores(), 'graficaMontoCampana', datosGrafica);
    graficas.graficaPastel();
  }

  // Evento para calcular los datos para las gráficas Campaña On-LineTimeliness
  // Solo esta aqui para ejemplo, agregarlo en su lugar y borarlo de este ts
  public calcularTimeliness():void{this.mostrarGraficasTimeLiness();}

  // Muestra las gráficas de la vista Campaña On-LineTimeliness
  private mostrarGraficasTimeLiness(): void
  {
    const graficascalcularTimeliness: GraficasTime  = new GraficasTime();
    let datos: DatosGraficasTime = new DatosGraficasTime();

    graficascalcularTimeliness.graficaToroide("graficaToroideEspecialesTiempo");
    graficascalcularTimeliness.graficaToroide("graficaToroideCampanaRETEN2021");

    graficascalcularTimeliness.grafica(datos.datosEtiquetas(),datos.obtenerColores() ,"graficaBarraEspecialesEstatus");
    graficascalcularTimeliness.grafica(datos.datosEtiquetas(),datos.obtenerColores() ,"graficaBarraCampanaRETEN2021");
    graficascalcularTimeliness.grafica(datos.etiquetasBarraCampanaRETEN2021(),
                                      datos.obtenerColoresBarraCampanaRETEN2021() ,
                                      "graficaBarraEXCEPGEREstatus");
 
  }







}


