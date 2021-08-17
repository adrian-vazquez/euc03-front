import { IColores } from "../IColores";
import { IColorTime } from "./IColorTime";


export class DatosGraficasTime
{
    private etiquetas: Array<string>;

    constructor()
    {
        this.etiquetas = ["LIBERADA","", "","ACEPTADA"];
    }

    private datosColores(): IColorTime
    {
    return { 
        liberada : "rgba(171, 73, 132)", 
        sinNombre : "rgb(68, 96, 147)", 
        sinNombreLabel : "rgb(191, 230, 244)", 
        aceptada : "rgb( 198, 198, 200)"
     };
    }
    public datosEtiquetas(): Array<string>
    {
    return this.etiquetas;
    }

    public obtenerColores(): Array<string>
    {
        let colores = [this.datosColores().liberada,
            this.datosColores().sinNombre,
            this.datosColores().sinNombreLabel,
            this.datosColores().aceptada];
        return colores;
    }


    public static getRandom(min: number, max: number): number {
        let datosGraficas: number = Math.random() * (max - min) + min;
        return datosGraficas;
      }


      public etiquetasBarraCampanaRETEN2021(): Array<string>
      {
        return ["RECHAZADA","LIBERADA"];
      }
      public obtenerColoresBarraCampanaRETEN2021(): Array<string>
      {
          let colores = [this.datosColores().liberada,this.datosColores().sinNombre];
              
          return colores;
      }


}