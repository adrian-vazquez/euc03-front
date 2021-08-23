import { Component, OnInit } from '@angular/core';
import { DatosGraficas } from '../../campanas-online/congifGraficas/DatosGraficas';
import { DatosGraficasTime } from '../../campanas-online/congifGraficas/graficasTimeliness/DatosGrafica';
import { GraficasTime } from '../../campanas-online/congifGraficas/graficasTimeliness/Graficas';
import { GraficaBarraImpl } from '../../campanas-online/congifGraficas/graficasTimeliness/graficas/graficaBarraImpl';
import { IGraficaToroideImpl } from '../../campanas-online/congifGraficas/graficasTimeliness/graficas/GraficaToroideImpl';
import { IGrafica } from '../../campanas-online/congifGraficas/graficasTimeliness/graficas/IGrafica';
import { IGraficaToroide } from '../../campanas-online/congifGraficas/graficasTimeliness/graficas/IGraficaToroide';



@Component({
  selector: 'app-campaniasonlinestimeliness',
  templateUrl: './campaniasonlinestimeliness.component.html',
  styleUrls: ['./campaniasonlinestimeliness.component.scss']
})
export class CampaniasonlinestimelinessComponent implements OnInit {

  // fecha = Date.now();
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

    let graficaToroide: IGraficaToroide = new IGraficaToroideImpl();
    let graficaBarra: IGrafica = new GraficaBarraImpl();
    
            // graficaToroideEspecialesTiempo();
            graficaToroide.graficaToroide("graficaToroideEspecialesTiempo", DatosGraficas.etiquetasGraficas(), new DatosGraficas().colorGraficas(), DatosGraficas.datosGrafica());

                  // graficaBarrasEspecialesEstatus();
    graficascalcularTimeliness.grafica(datos.datosEtiquetas(),datos.obtenerColores() ,"graficaBarraEspecialesEstatus");
    
     // graficaToroideCampanaTiempo();
    graficascalcularTimeliness.graficaToroide("graficaToroideCampanaRETEN2021", DatosGraficas.etiquetasGraficas(), new DatosGraficas().colorGraficas(), DatosGraficas.datosGrafica());

       // graficaBarrasCampanaEstatus(); 
    graficascalcularTimeliness.grafica(datos.datosEtiquetas(),datos.obtenerColores() ,"graficaBarraCampanaRETEN2021");

    // graficaBarrasEXCEPGEREstatus();
    graficascalcularTimeliness.grafica(datos.etiquetasBarraCampanaRETEN2021(),
                                      datos.obtenerColoresBarraCampanaRETEN2021() ,
                                      "graficaBarraEXCEPGEREstatus");

                                      
                          
                                     
                                    
                               
                                      

  }

  
  getRandom(min: number, max: number): Array<number> {
    let datosGraficas: Array<number> = [Math.random() * (max - min) + min,
    Math.random() * (max - min) + min,
    Math.random() * (max - min) + min,
    Math.random() * (max - min) + min];
    return datosGraficas;
} 

}
