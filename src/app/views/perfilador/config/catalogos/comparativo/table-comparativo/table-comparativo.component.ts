import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-comparativo',
  templateUrl: './table-comparativo.component.html',
  styleUrls: ['../comparativo.component.scss', '../../catalogos.component.scss']
})
export class TableComparativoComponent implements OnInit {
  @Input() edit;
  @Input() dataSource ;
  @Input() title;
  displayedColumns: string[] = [];

  tables = [0];

  constructor() {
    const length = this.displayedColumns.length = 20;
    this.displayedColumns[2] = 'perfiles';
    this.displayedColumns[3] = 'integral';
    this.displayedColumns[4] = 'pagTBase28';
    this.displayedColumns[5] = 'pagTBase60';
    this.displayedColumns[6] = 'pagTBase90';
    this.displayedColumns[7] = 'pagMargFex90';
    this.displayedColumns[8] = 'pagMargFex180';
    this.displayedColumns[9] = 'pagMargFex366';
    this.displayedColumns[10] = 'pagMargFex14';
    this.displayedColumns[11] = 'bancanet60';
    this.displayedColumns[12] = 'porta30';
    this.displayedColumns[13] = 'porta60';
    this.displayedColumns[14] = 'porta90';
    this.displayedColumns[15] = 'porta120';
    this.displayedColumns[16] = 'porta180';
    this.displayedColumns[17] = 'porta365';
    

    // The first two columns should be position and name; the last two columns: weight, symbol
    this.displayedColumns[0] = 'id';
    this.displayedColumns[1] = 'range';
    this.displayedColumns[length -2] = 'range2';
    this.displayedColumns[length -1] = 'id2';
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