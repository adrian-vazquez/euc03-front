import { IColores } from "./IColores";

import Chart from 'chart.js';
import { DatosGraficas } from "./DatosGraficas";



export class GraficasImpl
{

    grafica( fechas: string [], color: IColores, grafica: string, datos:Array<number>  )
    {
        let numeroMayor: Array<number> = datos;
        

         const myChart = <HTMLCanvasElement> document.getElementById(grafica);
          const cnx = myChart.getContext('2d');

        const etiquetas = fechas;
        const datos19042021 = {
          label: ["AUTO.DISTRITALES"],
          data: DatosGraficas.datos(numeroMayor[0]), 
          backgroundColor:  DatosGraficas.color(color.AutDistritales),// Color de fondo,
          borderColor: DatosGraficas.color(color.AutDistritales),

          borderWidth: 1,
      };
      const datos20042021 = {
          label: ["AUTO. DIVISIONALES"],
          data: DatosGraficas.datos(numeroMayor[1]), 
          backgroundColor:  DatosGraficas.color(color.AutDivicionales),// Color de fondo,
          borderColor: DatosGraficas.color(color.AutDivicionales),
          borderWidth: 1,
      };
      
      const datos21042021 = {
          label: ["EXCEPCION GERENCIAL"],
          data: DatosGraficas.datos(numeroMayor[2]), 
          backgroundColor:  DatosGraficas.color(color.ExcepcionGerencia),// Color de fondo,
          borderColor: DatosGraficas.color(color.ExcepcionGerencia),
          borderWidth: 1,
      };
      const datos22042021 = {
          label: ["PORTABILIDAD ESP. NOMINA"],
          data: DatosGraficas.datos(numeroMayor[3]), 
          backgroundColor:  DatosGraficas.color(color.PortabilidadEspNomina),// Color de fondo,
          borderColor: DatosGraficas.color(color.PortabilidadEspNomina),
          borderWidth: 1,
      };
      const datos23042021 = {
          label: ["RETEN 2021"],
          data: DatosGraficas.datos(numeroMayor[4]), 
          backgroundColor:  DatosGraficas.color(color.Reten2021),// Color de fondo,
          borderColor: DatosGraficas.color(color.Reten2021),
          borderWidth: 1,
      };
      const datos00042021 = {
        label: ["RETEN SUELDO BASE"],
        data: DatosGraficas.datos(numeroMayor[5]), 
        backgroundColor:  DatosGraficas.color(color.RetenSaldoBase),// Color de fondo,
        borderColor: DatosGraficas.color(color.RetenSaldoBase),
        borderWidth: 1,
    };

      
new Chart(cnx, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
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
        legend:{
            display: true,
            labels:{
                fontSize:8,
            },
            
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 10,
                    min: 0,
              	    max:( Math.max(... numeroMayor) + 50),
                    
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

    

    public graficaPastel():void
{

  let myChart = <HTMLCanvasElement> document.getElementById('myChartPastel');
  var cnx: CanvasRenderingContext2D = myChart.getContext('2d');

  const etiquetas = 
  ["AUT.DISTRITALES", "AUT. DIVISIONALES", "EXCEPCION GERENCIA", 
  "PORTABLIDAD ESP. NOMINA", "RETEN 2021", "RETEN SALDO BASE"];
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresos = {
    data: [300, 15, 170, 15, 200, 300], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgba(170, 73, 132)',
        'rgba(112, 120, 155.2)',
        'rgba(176, 238, 255.2)',
        'rgba(208, 208, 212.2)',
        'rgba(67, 162, 169)',
        'rgba(68, 204, 243)',
    ],// Color de fondo
    borderColor: [
        'rgba(170, 73, 132)',
        'rgba(112, 120, 155)',
        'rgba(176, 238, 255)',
        'rgba(208, 208, 212)',
        'rgba(67, 162, 169)',
        'rgba(68, 204, 243)',
    ],// Color del borde
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
        legend:{
            display: true,
            labels:{
                fontSize: 8
            },
            position: 'right'
        }
    }
});
}
    
}