import { IColores } from "./IColores";


export class DatosGraficas
{
    private fechas: Array<string>;
    private color: IColores;

    constructor(){}

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

}