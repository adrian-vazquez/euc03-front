import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-especial',
  templateUrl: './pdf-especial.component.html',
  styleUrls: ['./pdf-especial.component.scss', '../catalogos.component.scss']
})
export class PdfEspecialComponent implements OnInit {
  iconCarga:string = 'assets/images/Img/load.PNG';

  constructor() { }

  ngOnInit(): void {
  }

}
