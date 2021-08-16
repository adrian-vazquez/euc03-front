import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NotificacionesService } from '../../../services/notificaciones.service';
import { SolicitudInversionesService } from '../../../services/solicitud-inverciones/solicitud-inversiones.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-vista-ejecutivo',
  templateUrl: './vista-ejecutivo.component.html',
  styleUrls: ['./vista-ejecutivo.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class VistaEjecutivoComponent implements OnInit {
  showTable = false;
  active:boolean = false;
  columnHeader = {
    id: 'ID',
    bookName: 'Book Name',
    price: 'Price',
    author: 'Author',
    cancel: 'Cancelar',
    actions: 'Actions'
  };

  columHeaderDummy = [
    {name: 'Estatus'},
    {name: 'Folio'},
    {name: 'Fecha Sol.'},
    {name: 'Tipo'},
    {name: 'Tipo de oferta'},
    {name: 'Tipo de campaña'},
    {name: 'Contrato'},
    {name: 'Num.Cte'},
    {name: 'Plazo'},
    {name: 'Monto'},
    {name: 'Tasa'},
    {name: 'Autorizadores'},
    {name: 'Fecha Autori'},
    {name: 'Autorizador'},
    {name: 'Fecha Libera'},
    {name: 'Cancelación'},
    {name: 'Descargar'},
    {name: 'SIRH'},
    {name: 'Observaciones'},
  ];

  data = [ 
    {
      estatus:'CANCELADA',
      folio:'0',
      fechaSolic:'2021-03-08 12:35',
      tipoOferta: '',
      tipoCampania: '',
      tipo: 'RET099767',
      contrato: '66576576576',
      numCliente: '289',
      plazo: '62',
      Monto: '10000000',
      tasa: '4.07',
      autorizadores: 'AT876655|AT456655',
      fechaAutori: '12/08/2021',
      autorizador: '0',
      fechaLibera: '2021-05-06 10:18',
      cancelacion: true,
      descargar: true,
      sirh: '1',
      observaciones: 'Prueba exitosa',
    },
    {
      estatus:'LIBERADA',
      folio:'0',
      fechaSolic:'2021-03-08 12:35',
      tipoOferta: '',
      tipoCampania: '',
      tipo: 'RET099767',
      contrato: '66576576576',
      numCliente: '290',
      plazo: '62',
      Monto: '10000000',
      tasa: '4.07',
      autorizadores: 'AT876655|AT456655',
      fechaAutori: '12/08/2021',
      autorizador: '0',
      fechaLibera: '2021-05-06 10:18',
      cancelacion: true,
      descargar: true,
      sirh: '1',
      observaciones: 'Prueba exitosa',
    },
    {
      estatus:'LIBERADA',
      folio:'0',
      fechaSolic:'2021-03-08 12:35',
      tipoOferta: '',
      tipoCampania: '',
      tipo: 'RET099767',
      contrato: '66576576576',
      numCliente: '289',
      plazo: '62',
      Monto: '10000000',
      tasa: '4.07',
      autorizadores: 'AT876655|AT456655',
      fechaAutori: '12/08/2021',
      autorizador: '0',
      fechaLibera: '2021-05-06 10:18',
      cancelacion: true,
      descargar: true,
      sirh: '1',
      observaciones: 'Prueba exitosa',
    }
  ]
  tableData: any[];
  formSearch: FormGroup;
  formCancelacion: FormGroup;
  constructor(config: NgbModalConfig, private modalService: NgbModal, public SolicitudInversionesService: SolicitudInversionesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    // Apply condition on edit and delete button
    this.SolicitudInversionesService.getList().subscribe(res => {
      this.tableData = res.map(item => {
        if (item['author'] === 'A') {
          item['isEditable'] = false;
          return item;
        }
        if (item['author'] === 'B') {
          item['isDeletable'] = false;
          return item;
        }
        return item;
      });
    });
    this.crearFormulario();
    this.crearFormularioCancelacion();
  }

  crearFormulario(){
    this.formSearch = new FormGroup({
      nominaEjec: new FormControl(''),
      numCliente: new FormControl(''),
    })
  }
  crearFormularioCancelacion(){
    this.formCancelacion = new FormGroup({
      numeroEjec: new FormControl(''),
      nombreEjec: new FormControl(''),
      justificacion: new FormControl(''),
    })
  }
  search(){
    console.log(this.formSearch.value)
    const filter = this.data.filter(data => 
      data.numCliente == this.formSearch.get('numCliente').value
      
      );
    console.log(filter)
    this.tableData = filter;
    this.showTable = true
  }

  openModalCancelacion(){
    this.active = true;
  }

  closeModalCancelacion(){
    this.active = false;
  }


  open(content) {
    this.modalService.open(content);
  }

  save(data){
    this.modalService.dismissAll();
    console.log(this.formCancelacion.value);
  }
  
}
