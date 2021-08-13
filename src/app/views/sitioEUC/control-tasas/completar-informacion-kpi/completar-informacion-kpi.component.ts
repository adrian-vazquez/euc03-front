import { Component, OnInit } from '@angular/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-completar-informacion-kpi',
  templateUrl: './completar-informacion-kpi.component.html',
  styleUrls: ['./completar-informacion-kpi.component.scss'],
})
export class CompletarInformacionKpiComponent implements OnInit {

  columHeader = [
    {name: 'ID_TASAAUTO'},
    {name: 'FECHA SOLICITUD'},
    {name: 'CAMPAÑA'},
    {name: 'FECHA SOEID ASIG'},
    {name: 'SOEID OPE'},
    {name: 'SOEID PROC'},
    {name: 'ESTATUS'},
  ];

  data = [
    {
      id_tasaAuto: '24002497989',
      fechaSolic: '21-04-2021 23:10:18',
      campania: 'AutoCETE98',
      fechaSoeidAsig: '',
      soeidOpe: '',
      soeidProc: '',
      estatus: 'RECHAZADA',
    },
    {
      id_tasaAuto: '24002497989',
      fechaSolic: '21-04-2021 23:10:18',
      campania: 'AutoCETE98',
      fechaSoeidAsig: '',
      soeidOpe: '',
      soeidProc: '',
      estatus: 'RECHAZADA',
    },
    {
      id_tasaAuto: '24002497989',
      fechaSolic: '21-04-2021 23:10:18',
      campania: 'AutoCETE98',
      fechaSoeidAsig: '',
      soeidOpe: '',
      soeidProc: '',
      estatus: 'RECHAZADA',
    },
    {
      id_tasaAuto: '24002497989',
      fechaSolic: '21-04-2021 23:10:18',
      campania: 'AutoCETE98',
      fechaSoeidAsig: '',
      soeidOpe: '',
      soeidProc: '',
      estatus: 'RECHAZADA',
    },
    {
      id_tasaAuto: '24002497989',
      fechaSolic: '21-04-2021 23:10:18',
      campania: 'AutoCETE98',
      fechaSoeidAsig: '',
      soeidOpe: '',
      soeidProc: '',
      estatus: 'RECHAZADA',
    },
    {
      id_tasaAuto: '24002497989',
      fechaSolic: '21-04-2021 23:10:18',
      campania: 'AutoCETE98',
      fechaSoeidAsig: '',
      soeidOpe: '',
      soeidProc: '',
      estatus: 'RECHAZADA',
    },
  ];
  showTable = false;
  constructor() { }

  ngOnInit(): void {
  }

}
