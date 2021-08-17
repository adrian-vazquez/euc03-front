import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-rendimiento',
  templateUrl: './table-rendimiento.component.html',
  styleUrls: ['../comparativo.component.scss', '../../catalogos.component.scss']
})
export class TableRendimientoComponent implements OnInit {
  @Input() edit;
  @Input() dataSource ;
  @Input() title;
  displayedColumns: string[] = [];

  tables = [0];

  constructor() {
    this.displayedColumns.length = 17;

    this.displayedColumns[0] = 'range';
    this.displayedColumns[1] = 'perfiles';
    this.displayedColumns[2] = 'integral';
    this.displayedColumns[3] = 'pagTBase28';
    this.displayedColumns[4] = 'pagTBase60';
    this.displayedColumns[5] = 'pagTBase90';
    this.displayedColumns[6] = 'pagMargFex14';
    this.displayedColumns[7] = 'pagMargFex90';
    this.displayedColumns[8] = 'pagMargFex180';
    this.displayedColumns[9] = 'pagMargFex366';
    this.displayedColumns[10] = 'bancanet60';
    this.displayedColumns[11] = 'porta30';
    this.displayedColumns[12] = 'porta60';
    this.displayedColumns[13] = 'porta90';
    this.displayedColumns[14] = 'porta120';
    this.displayedColumns[15] = 'porta180';
    this.displayedColumns[16] = 'porta365';
    

    // The first two columns should be position and name; the last two columns: weight, symbol
  }
  ngOnInit(): void {
  }
}

export interface PeriodicElement {
  range: string;
  id: string;
  range2: string;
  id2: string;
  perfiles: string,
  integral: string,
  pagTBase28: string,
  pagTBase60: string,
  pagTBase90: string,
  pagMargFex90: string,
  pagMargFex180: string,
  pagMargFex366: string,
  pagMargFex14: string,
  bancanet60: string,
  porta30: string,
  porta60: string,
  porta90: string,
  porta120: string,
  porta180: string,
  porta365  : string,

}