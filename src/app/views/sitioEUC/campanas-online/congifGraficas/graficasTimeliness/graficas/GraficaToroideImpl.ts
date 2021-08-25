import { IGraficaToroide } from "./IGraficaToroide";
import Chart from 'chart.js';

export class IGraficaToroideImpl implements IGraficaToroide
{
    public graficaToroide(nombreGrafica: string, etique:Array<string>, color: Array<string>, dts: Array<number>): void {

        if( nombreGrafica !== null && nombreGrafica !== '' && etique !== null && color !== null && dts !== null )
        {
            if( etique.length > 0 && color.length > 0 && dts.length > 0 )
            {

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
        }
}

   