import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-autorizadores',
  templateUrl: './autorizadores.component.html',
  styleUrls: ['./autorizadores.component.scss']
})
export class AutorizadoresComponent implements OnInit {

  active:boolean = false;
  nivelAutori = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openXl(content) {
    this.modalService.open(content, { centered: true, size: 'xl', scrollable: true });
  }

  cerrarPopup(){
    this.active = false;
  }

  delete(){
    Swal.fire({
      title: 'Confirmación',
      text: "¿Estás seguro de eliminar el registro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Hecho',
          'El registro ha sido eliminado',
          'success'
        )
      }
    })
  }

  submit(){
    Swal.fire({
      title: 'Confirmación',
      text: "¿Estás seguro de continuar con la operación?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Hecho',
          'El registro ha sido aplicado',
          'success'
        )
      }
    });
  }

}
