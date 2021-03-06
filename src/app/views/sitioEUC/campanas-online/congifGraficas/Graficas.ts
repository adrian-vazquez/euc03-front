import { IColores } from "./IColores";

import Chart from 'chart.js';
import { DatosGraficas } from "./DatosGraficas";
import { ILabelGrafica, LabelGrafica } from "./graficasTimeliness/ILabelGrafica";



export class GraficasImpl {

    private etiquetasLabel: ILabelGrafica;

    constructor()
    {
        // nombre de las etiquetas que se veran reflejadas en las bar del lado superior
        this.etiquetasLabel = new LabelGrafica().nombreGrafica;
    }

    // función que recibe 3 parámetros para generar los datos de las gráficas
    public grafica(fechas: string[], color: IColores, grafica: string, datos: Array<number>) {

        // variable que guarda el número mayor de los datos que le envíen
        let numeroMayor: Array<number> = datos;


        const myChart = <HTMLCanvasElement>document.getElementById(grafica);
        const cnx = myChart.getContext('2d');

        // constante que recibe los nombres de las etiquetas para las gráficas en el aldo inferior de las mismas
        const etiquetas = fechas;

        const datos19042021 = {
            label: [this.etiquetasLabel.AutDistritales],
            data: DatosGraficas.datos(numeroMayor[0]),
            backgroundColor: DatosGraficas.color(color.AutDistritales),// Color de fondo,
            borderColor: DatosGraficas.color(color.AutDistritales),

            borderWidth: 1,
        };
        const datos20042021 = {
            label: [this.etiquetasLabel.AutDivicionales],
            data: DatosGraficas.datos(numeroMayor[1]),
            backgroundColor: DatosGraficas.color(color.AutDivicionales),// Color de fondo,
            borderColor: DatosGraficas.color(color.AutDivicionales),
            borderWidth: 1,
        };

        const datos21042021 = {
            label: [this.etiquetasLabel.ExcepcionGerencia],
            data: DatosGraficas.datos(numeroMayor[2]),
            backgroundColor: DatosGraficas.color(color.ExcepcionGerencia),// Color de fondo,
            borderColor: DatosGraficas.color(color.ExcepcionGerencia),
            borderWidth: 1,
        };
        const datos22042021 = {
            label: [this.etiquetasLabel.PortabilidadEspNomina],
            data: DatosGraficas.datos(numeroMayor[3]),
            backgroundColor: DatosGraficas.color(color.PortabilidadEspNomina),// Color de fondo,
            borderColor: DatosGraficas.color(color.PortabilidadEspNomina),
            borderWidth: 1,
        };
        const datos23042021 = {
            label: [this.etiquetasLabel.Reten2021],
            data: DatosGraficas.datos(numeroMayor[4]),
            backgroundColor: DatosGraficas.color(color.Reten2021),// Color de fondo,
            borderColor: DatosGraficas.color(color.Reten2021),
            borderWidth: 1,
        };
        const datos00042021 = {
            label: [this.etiquetasLabel.RetenSaldoBase],
            data: DatosGraficas.datos(numeroMayor[5]),
            backgroundColor: DatosGraficas.color(color.RetenSaldoBase),// Color de fondo,
            borderColor: DatosGraficas.color(color.RetenSaldoBase),
            borderWidth: 1,
        };


        new Chart(cnx, {
            type: 'bar',// Tipo de gráfica
            data: {
                labels: etiquetas,
                datasets: [{
                    data: [100,80,70,60,50,20],
                    label: "Ejemplo Linea",
                    borderColor: "#3e95cd",
                    backgroundColor: "rgb(62,149,205)",
                    borderWidth: 1,
                    type: 'line',
                    fill: false
                },
                   
                    datos19042021,
                    datos20042021,
                    datos21042021,
                    datos22042021,
                    datos23042021,
                    datos00042021
                   
                    // Aquí más datos...
                ]
            },
            options: {
                layout: {
                    padding: {
                        top: 8
                    }
                },
                legend: {
                    display: true,
                    labels: {
                        fontSize: 8, // cambiar font al label que está en el lado superior de la gráfica de barra
                    },

                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                            min: 0,
                            max: (Math.max(...numeroMayor) + 50),

                        },
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10
                        }
                    }],
                },

            }
        });

    }


}