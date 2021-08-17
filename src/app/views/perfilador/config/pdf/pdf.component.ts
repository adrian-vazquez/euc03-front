import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  iconCarga:string = 'assets/images/Img/load.PNG';
  iconPdf:string = 'assets/images/dummy/pdficon.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    Swal.fire({
      title: 'Confirmación',
      text: "¿Deseas cargar la información?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Cargado!',
          'Se cargó el registro con éxito',
          'success'
        )
      }
    })
  }

}
