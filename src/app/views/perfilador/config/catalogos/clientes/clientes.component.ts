import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificacionesService } from '../../../../../services/notificaciones.service';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  ofertaDirigida = [ 
    'CLIENTE_OFERTA_1',
    'CLIENTE_OFERTA_2',
    'CLIENTE_OFERTA_3',
    'CLIENTE_OFERTA_4',
    'CLIENTE_OFERTA_5',
    'CLIENTE_OFERTA_6',
    'CLIENTE_OFERTA_7',
    'CLIENTE_OFERTA_8',
    'CLIENTE_OFERTA_9',
    'CLIENTE_OFERTA_10',
    'CLIENTE_OFERTA_11',
    'CLIENTE_OFERTA_12',
    'CLIENTE_OFERTA_13',
    'CLIENTE_OFERTA_14',
    'CLIENTE_OFERTA_15',
    'CLIENTE_OFERTA_16',
    'CLIENTE_OFERTA_17',
    'CLIENTE_OFERTA_18',
    'CLIENTE_OFERTA_19',
    'CLIENTE_OFERTA_20',
  ];
  form: FormGroup;

  clientes: { numCte: string, ofertaDirigida: string }[] = [
    {
      numCte: '',
      ofertaDirigida: ''
    }
  ] 



 constructor(private fb: FormBuilder,
             private notificacionesService:NotificacionesService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
        password: ['', Validators.required],
        passwordRepeat: ['', Validators.required]
    });
  } 

  addClientForm(): void {
    this.clientes.push({
      numCte: '',
      ofertaDirigida: ''
    })
  }
  saveClients() {
    this.notificacionesService.lanzarNotificacion('Clientes guardados', 'Clientes', 'success').catch( error => console.log(error));
  }
}
