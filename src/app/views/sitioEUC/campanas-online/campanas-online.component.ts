import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType, Label } from 'chart.js';
 //import * as pluginDataLabels from 'chartjs-plugin-datalabels';

 import Chart from 'chart.js';



@Component({
  selector: 'app-campanas-online',
  templateUrl: './campanas-online.component.html',
  styleUrls: ['./campanas-online.component.scss']
})
export class CampanasOnlineComponent implements OnInit {

  constructor() { }



  ngOnInit(): void 
  {
      let fechas: Array<string> = ["19/04/2021", "20/04/202", "21/04/202", "22/04/202","23/04/202"];
      const color: IColores  = 
      { 
          AutDistritales : "rgba(170, 73, 132)", 
          AutDivicionales : "rgb(129, 113, 159)", 
          ExcepcionGerencia : "rgb(181, 235, 255)", 
          PortabilidadEspNomina : "rgb(207, 206, 209)", 
          Reten2021 : "rgba(66, 162, 169)",
          RetenSaldoBase : "rgba(66, 204, 245)" };
    
this.graficaSolicitudesCampana(fechas, color, 'graficaSolicitudesCampana');
this.graficaSolicitudesCampana(fechas, color, 'graficaMontoCampana');
this.graficaPastel();

  }

//   El Botón “Calcular” permite recalcular las gráficas en cualquier momento.
  calcular():void
  {

  }
  

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

/*    public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
   public barChartType: ChartType = 'bar';
   public barChartLegend = true;
  public barChartPlugins = [pluginDatLabels];

   public barChartData: ChartDataSets[] = [
     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
   ]; */


  

  private graficaSolicitudesCampana(fechas: string [], color: IColores, grafica: string ):void
{
    let myChart = <HTMLCanvasElement> document.getElementById(grafica);
    var cnx: CanvasRenderingContext2D = myChart.getContext('2d');

  const etiquetas = 
  fechas;
  const datos19042021 = {
  //  label: ["AUTO.DISTRITALES"],
    data: [180, 10, 50, 22, 250, 320], 
    backgroundColor:  [
        color.AutDistritales,
        color.AutDistritales,
        color.AutDistritales,
        color.AutDistritales,
        color.AutDistritales,
        
    ],// Color de fondo,
    borderColor: [
        color.AutDistritales,
        color.AutDistritales,
        color.AutDistritales,
        color.AutDistritales,
        color.AutDistritales,
        
    ],
    borderWidth: 1,
};
const datos20042021 = {
  //  label: ["OTRO"],
  data: [180, 10, 50, 22, 250, 320], 
    backgroundColor:  [
        color.AutDivicionales,
        color.AutDivicionales,
        color.AutDivicionales,
        color.AutDivicionales,
        color.AutDivicionales,
        
    ],// Color de fondo,
    borderColor: [
        color.AutDivicionales,
        color.AutDivicionales,
        color.AutDivicionales,
        color.AutDivicionales,
        color.AutDivicionales,
        
    ],
    borderWidth: 1,
};

const datos21042021 = {
  //  label: ["EXCEPCION GERENCIAL"],
    data: [180, 10, 50, 22, 250, 320], 
    backgroundColor:  [
        color.ExcepcionGerencia,
        color.ExcepcionGerencia,
        color.ExcepcionGerencia,
        color.ExcepcionGerencia,
        color.ExcepcionGerencia,
        
    ],// Color de fondo,
    borderColor: [
        color.ExcepcionGerencia,
        color.ExcepcionGerencia,
        color.ExcepcionGerencia,
        color.ExcepcionGerencia,
        color.ExcepcionGerencia,
        
    ],
    borderWidth: 1,
};
const datos22042021 = {
   // label: ["PORTABILIDAD ESP. NOMINA"],
    data: [180, 10, 50, 22, 250, 320], 
    backgroundColor:  [
        color.PortabilidadEspNomina,
        color.PortabilidadEspNomina,
        color.PortabilidadEspNomina,
        color.PortabilidadEspNomina,
        color.PortabilidadEspNomina,
        
    ],// Color de fondo,
    borderColor: [
        color.PortabilidadEspNomina,
        color.PortabilidadEspNomina,
        color.PortabilidadEspNomina,
        color.PortabilidadEspNomina,
        color.PortabilidadEspNomina,
        
    ],
    borderWidth: 1,
};
const datos23042021 = {
   // label: ["RETEN 2021"],
    data: [180, 10, 50, 22, 250, 320], 
    backgroundColor:  [
        color.Reten2021,
        color.Reten2021,
        color.Reten2021,
        color.Reten2021,
        color.Reten2021,
        
    ],// Color de fondo,
    borderColor: [
 
        color.Reten2021,
        color.Reten2021,
        color.Reten2021,
        color.Reten2021,
        color.Reten2021,
        
    ],
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
        datos23042021
          // Aquí más datos...
      ]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }],
      },
  }
});

}

private graficaMontoCampanaMillones():void
{
    let myChart = <HTMLCanvasElement> document.getElementById('graficaMontoCampana');
    let cnx: CanvasRenderingContext2D = myChart.getContext('2d');
   const etiquetas = 
  ["19/04/2021", "20/04/202", "21/04/202", "22/04/202","23/04/202"];

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
        type: 'bar',
        data: {
            labels: etiquetas,
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}

private graficaPastel():void
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
    //    labels: etiquetas,
        datasets: [
            datosIngresos,
            // Aquí más datos...
        ]
    },
});
}


}
interface IColores
{
    AutDistritales: String;
    AutDivicionales: String;
    ExcepcionGerencia: String;
    PortabilidadEspNomina: String;
    Reten2021: String;
    RetenSaldoBase: String;
}
