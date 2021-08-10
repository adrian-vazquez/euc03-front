import { Component, OnInit } from '@angular/core';

import Chart from "chart.js";
;
@Component({
  selector: 'app-campanas-online',
  templateUrl: './campanas-online.component.html',
  styleUrls: ['./campanas-online.component.scss']
})
export class CampanasOnlineComponent implements OnInit {

  constructor() { }



  ngOnInit(): void 
  {
this.graficas();
this.graficaPastel();
  }

  graficas():void
{

  const grafica = document.querySelector("#myChart");

  const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"];
  const datosVentas2020 = {
    label: "Ventas por mes",
    data: [5000, 1500, 8000, 5102], 
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
};

new Chart(grafica, {
  type: 'bar',// Tipo de gráfica
  data: {
      labels: etiquetas,
      datasets: [
          datosVentas2020,
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

public graficaPastel():void
{
  const $grafica = document.querySelector("#myChartPastel");
  const etiquetas = ["Ventas", "Donaciones", "Trabajos", "Publicidad"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresos = {
    data: [1500, 400, 2000, 7000], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgba(163,221,203,0.2)',
        'rgba(232,233,161,0.2)',
        'rgba(230,181,102,0.2)',
        'rgba(229,112,126,0.2)',
    ],// Color de fondo
    borderColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
        'rgba(230,181,102,1)',
        'rgba(229,112,126,1)',
    ],// Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica, {
    type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: etiquetas,
        datasets: [
            datosIngresos,
            // Aquí más datos...
        ]
    },
});
}

}
