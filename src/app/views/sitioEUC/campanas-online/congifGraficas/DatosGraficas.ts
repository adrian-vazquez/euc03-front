import { DatosGraficasTime } from "./graficasTimeliness/DatosGrafica";
import { ILabelGrafica, LabelGrafica } from "./graficasTimeliness/ILabelGrafica";
import { IColores } from "./IColores";


export class DatosGraficas
{
    private fechas: Array<string>;
    private color: IColores;

    private etiquetas: Array<string>;

    constructor()
    {
        
    }

    public static etiquetasGraficas()
    {
        return ['En tiempo'];
    }
    public colorGraficas(): Array<string>
    {
        return [this.datosColores().AutDistritales, "rgb(255,255,255)"];
    }
    public datosColores(): IColores
    {
    return { 
        AutDistritales : "rgba(170, 73, 132)", 
        AutDivicionales : "rgb(129, 113, 159)", 
        ExcepcionGerencia : "rgb(181, 235, 255)", 
        PortabilidadEspNomina : "rgb(207, 206, 209)", 
        Reten2021 : "rgba(66, 162, 169)",
        RetenSaldoBase : "rgba(66, 204, 245)" };
    }
    public datosFechas(): Array<string>
    {
    return ["19/04/2021", "20/04/202", "21/04/202", "22/04/202","23/04/202"];
    }

    public static datos( info: number ): Array<number>
    {
        return [info, info, info, info, info, info];
    }
    public static color( colorFondo: string ): Array<string>
    {
        return [colorFondo, colorFondo, colorFondo, colorFondo, colorFondo, colorFondo];
    }

    public coloresGrafica(): Array<string>
    {
        return [ this.datosColores().AutDistritales , this.datosColores().AutDivicionales , this.datosColores().ExcepcionGerencia , this.datosColores().PortabilidadEspNomina , this.datosColores().Reten2021 , this.datosColores().RetenSaldoBase];
    }

    public static datosGrafica(): Array<number>
    {
        return [DatosGraficasTime.getRandom(10, 300), DatosGraficasTime.getRandom(1, 10)];
    }

    public static datosGraficaOnline(): Array<number>
    {
        return [DatosGraficasTime.getRandom(0, 350), DatosGraficasTime.getRandom(0, 350),DatosGraficasTime.getRandom(0, 350), DatosGraficasTime.getRandom(0, 350),DatosGraficasTime.getRandom(0, 350), DatosGraficasTime.getRandom(0, 350) ];
    }

    public static etiquetasGraficaOnline(): Array<string>
    {
        let etiquetasLabel: ILabelGrafica =  new LabelGrafica().nombreGrafica;
       

        return [ etiquetasLabel.AutDistritales,etiquetasLabel.AutDivicionales,
            etiquetasLabel.ExcepcionGerencia, etiquetasLabel.PortabilidadEspNomina,
            etiquetasLabel.Reten2021, etiquetasLabel.RetenSaldoBase ];
    }


}