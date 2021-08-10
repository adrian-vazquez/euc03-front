import {
	AfterViewInit,
	Component,
	Input,
	OnInit,
	ViewChild
  } from '@angular/core';
  import { MatPaginator } from '@angular/material/paginator';
  import { MatSort } from '@angular/material/sort';
  import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit, AfterViewInit{
  @Input() tableData;
  @Input() columnHeader;
  @Input() service;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  objectKeys = Object.keys;
  dataSource: any;
  isLoadingResults = false;
  resultsLength;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handleClick(event, eventType) {
    console.log(this.service);
    console.log(event, eventType);
  }
}