
import Chart from 'chart.js';
import { DatosGraficasTime } from './DatosGrafica';


export class GraficasTime {

    private getRandom(min: number, max: number): Array<number> {
        let datosGraficas: Array<number> = [Math.random() * (max - min) + min,
        Math.random() * (max - min) + min,
        Math.random() * (max - min) + min,
        Math.random() * (max - min) + min];
        return datosGraficas;
    }


    grafica(nombreEtiquetas: string[], color: string[], grafica: string) {
        const etiquetas = nombreEtiquetas;
        let datosBarra: Array<number> = this.getRandom(2, 15);

        const myChart = <HTMLCanvasElement>document.getElementById(grafica);
        const cnx = myChart.getContext('2d');

        const datos19042021 = {
           
            data: datosBarra,
            backgroundColor: color,
            borderColor: color,
            borderWidth: 1,
        };

        new Chart(cnx, {
            type: 'bar',// Tipo de gráfica
            data: {
                labels: etiquetas,
                datasets: [
                    datos19042021,

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
                    display: false, // en true para mostrar el laber que va por arriba de la grafica
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10,
                            min: 0,
                            max: (Math.max(...datosBarra) + 5),

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


    public graficaToroide(nombreGrafica: string, etique:Array<string>, color: Array<string>, dts: Array<number>): void {

        let myChart = <HTMLCanvasElement>document.getElementById(nombreGrafica);
        var cnx: CanvasRenderingContext2D = myChart.getContext('2d');

        const etiquetas = etique;
        // Podemos tener varios conjuntos de datos. Comencemos con uno
        const datosIngresos = {
            data: dts, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
            // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
            backgroundColor: color,// Color de fondo
            borderColor: color,// Color del borde
            borderWidth: 1,// Ancho del borde
        };
        new Chart(cnx, {
            type: 'doughnut',// Tipo de gráfica. Puede ser dougnhut o pie
            data: {
                labels: etiquetas,
                datasets: [
                    datosIngresos,
                    // Aquí más datos...
                ]
            },
            options: {
                legend: {
                    display: true,
                    labels: {
                        fontSize: 8
                    },
                    position: 'right'
                }
            }
        });
    }

}
