import { Component, OnInit } from '@angular/core';
import { DatosGraficas } from '../../campanas-online/congifGraficas/DatosGraficas';
import { DatosGraficasTime } from '../../campanas-online/congifGraficas/graficasTimeliness/DatosGrafica';
import { GraficasTime } from '../../campanas-online/congifGraficas/graficasTimeliness/Graficas';

@Component({
  selector: 'app-campaniasonlinestimeliness',
  templateUrl: './campaniasonlinestimeliness.component.html',
  styleUrls: ['./campaniasonlinestimeliness.component.scss']
})
export class CampaniasonlinestimelinessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {
       
   this.mostrarGraficasTimeLiness();

  }

      // Evento para calcular los datos para las gráficas Campaña On-LineTimeliness
  
  public calcularTimeliness():void{this.mostrarGraficasTimeLiness();}

  // Muestra las gráficas de la vista Campaña On-LineTimeliness
  private mostrarGraficasTimeLiness(): void
  {
    const graficascalcularTimeliness: GraficasTime  = new GraficasTime();
    let datos: DatosGraficasTime = new DatosGraficasTime();

    graficascalcularTimeliness.graficaToroide("graficaToroideEspecialesTiempo", DatosGraficas.etiquetasGraficas(), new DatosGraficas().colorGraficas(), DatosGraficas.datosGrafica());
    graficascalcularTimeliness.graficaToroide("graficaToroideCampanaRETEN2021", DatosGraficas.etiquetasGraficas(), new DatosGraficas().colorGraficas(), DatosGraficas.datosGrafica());

    graficascalcularTimeliness.grafica(datos.datosEtiquetas(),datos.obtenerColores() ,"graficaBarraEspecialesEstatus");
    graficascalcularTimeliness.grafica(datos.datosEtiquetas(),datos.obtenerColores() ,"graficaBarraCampanaRETEN2021");
    graficascalcularTimeliness.grafica(datos.etiquetasBarraCampanaRETEN2021(),
                                      datos.obtenerColoresBarraCampanaRETEN2021() ,
                                      "graficaBarraEXCEPGEREstatus");
 
  }



}
