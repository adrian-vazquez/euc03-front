import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  iconCarga:string = 'assets/images/Img/load.PNG';
  iconPdf:string = 'assets/images/dummy/pdficon.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
