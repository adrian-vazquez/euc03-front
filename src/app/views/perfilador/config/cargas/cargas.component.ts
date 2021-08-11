import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.component.html',
  styleUrls: ['./cargas.component.scss']
})
export class CargasComponent implements OnInit {
  
  
  iconCarga:string = 'assets/images/Img/load.PNG';
  
  constructor() { }

  ngOnInit(): void {
  }

}
