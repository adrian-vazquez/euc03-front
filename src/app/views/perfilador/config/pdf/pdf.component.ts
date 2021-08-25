import { Component, OnInit } from '@angular/core';
import { RestAppServices } from 'src/app/app-rest.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  iconCarga:string = 'assets/images/Img/load.PNG';
  iconPdf:string = 'assets/images/dummy/pdficon.jpg';

  constructor(private peticinoHttp: RestAppServices) { }

  private parametrosWS: any = {
    modulo: 'Rest',
    subModulo: 'rest'
  };

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
        //this.parametrosWS.parametros = {'reporte': 'pdf'}; //objeto prueba
        this.parametrosWS.operacion = 'pdf-ver';
        console.log(this.parametrosWS);
        this.parametrosWS.callBack = (data: any) => {
          Swal.fire('¡Cargado!','Se cargó el registro con éxito '+ data,'success');
          console.log(data);
        };
        this.parametrosWS.error = (data:any) => {
          Swal.fire('Error',data.error?.message || 'Se presento un problema con la operacion', 'error');
        };
        this.peticinoHttp.peticion(this.parametrosWS);
      }
    });
  }

}
