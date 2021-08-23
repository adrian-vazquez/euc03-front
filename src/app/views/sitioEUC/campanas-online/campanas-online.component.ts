import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


import { GraficasImpl } from './congifGraficas/Graficas';
import { DatosGraficas } from './congifGraficas/DatosGraficas';
import { Tablas } from './congifGraficas/Tablas';

import { GraficasTime } from './congifGraficas/graficasTimeliness/Graficas';
import { DatosGraficasTime } from './congifGraficas/graficasTimeliness/DatosGrafica';
import { LabelGrafica } from './congifGraficas/graficasTimeliness/ILabelGrafica';
import { IGrafica } from './congifGraficas/graficasTimeliness/graficas/IGrafica';
import { GraficaBarraImpl } from './congifGraficas/graficasTimeliness/graficas/graficaBarraImpl';
import { GraficaBarLineImpl } from './congifGraficas/graficasTimeliness/graficas/GraficaBarLineImpl';
import { IColores } from './congifGraficas/IColores';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-campanas-online',
  templateUrl: './campanas-online.component.html',
  styleUrls: ['./campanas-online.component.scss']
})
export class CampanasOnlineComponent implements OnInit {

  numeroPaginas: number;
  
  // banderas para mostrar u ocultar las tablas de las campañas
  tablaDivisionales: Boolean;
  tablaSucursales: Boolean;
  tablaGerMercado: Boolean;
  tablaRegionales: Boolean;
  // banderas para mostrar u ocultar las tablas de las campañas


  seleccion: string;
  mostrarTablas: Array<Boolean>;

  constructor() {

    // banderas para mostrar u ocultar las tablas de las campañas y 
    // por default se muestra la tabla divisional
    this.tablaDivisionales = true;
    this.tablaSucursales = false;
    this.tablaGerMercado = false;
    this.tablaRegionales = false;
    // banderas para mostrar u ocultar las tablas de las campañas
  }

  ngOnInit(): void {

    this.mostrarTablas = [this.tablaDivisionales,
    this.tablaSucursales,
    this.tablaGerMercado,
    this.tablaRegionales];


    this.seleccion = "Divisionales";

    // Método para generar las gráficas, al seleccionar la vista de vista-campanas
    this.mostrarGraficas();

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
  calcular(): void {
    // Método para generar las gráficas
    this.mostrarGraficas();

  }
  ejecutivosPyme(): void {

  }


  // eventos click que permiten mostrar la tabla correspondiente 
  // según la pestaña que se seleccione de las tablas, divisionales, Sucursales, Ger Mercado y Regionales
  // y agrega el nombre al botón
  public mostrarTablaDivisiones(): void {
    this.mostrarTablas = Tablas.mostrarTablas(0);
    this.seleccion = "Divisionales";
  }
  public mostrarTablaSucursales(): void {
    this.mostrarTablas = Tablas.mostrarTablas(1);
    this.seleccion = "Sucursales";
  }
  public mostrarTablaGerMercado(): void {
    this.mostrarTablas = Tablas.mostrarTablas(2);
    this.seleccion = "Ger Mercado";
  }
  public mostrarTablaRegionales(): void {
    this.mostrarTablas = Tablas.mostrarTablas(3);
    this.seleccion = "Regionales";
  }


  // función permite mostrar las gráficas, bar y doughnut
  // para generar las gráficas, se desarrollaron dos clases que son las encargadas de generar las gráficas
  private mostrarGraficas(): void {

    // se instancian las clases que contienen las funciones para generar las gráficas y
    // los datos Fecha, y colores que tendran las gráficas
    let graficaBar: IGrafica = new GraficaBarraImpl();
    let graficaBarLine: IGrafica = new GraficaBarLineImpl();

    let datos: DatosGraficas = new DatosGraficas();

    
    let datosGrafica: Array<number> = this.getRandom(50, 300);

  // grádica de barra, solicita los datos que irán en la grafica en la parte inferior, los colores de la gráfica, el id del canvas
  // y los datos que llevará la gráfica
    graficaBar.grafica('graficaSolicitudesCampana', datosGrafica);
    // datosGrafica

     // grádica de barra, solicita los datos que irán en la grafica en la parte inferior, los colores de la gráfica, el id del canvas,
  //  los datos que llevará la gráfica y llevará un tipo de gráfica type line
    graficaBarLine.grafica('graficaMontoCampana', datosGrafica);
    // datosGrafica
    

    
    new GraficasTime().graficaToroide("myChartPastel", DatosGraficas.etiquetasGraficaOnline(), new DatosGraficas().coloresGrafica(), DatosGraficas.datosGraficaOnline() );

  }








}


