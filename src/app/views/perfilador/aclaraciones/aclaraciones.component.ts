import { Component, OnInit } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-aclaraciones',
  templateUrl: './aclaraciones.component.html',
  styleUrls: ['./aclaraciones.component.scss']
})
export class AclaracionesComponent implements OnInit {
  public pdfAclaraciones: string = '../../../assets/images/Docs/Aclaraciones/Aclaraciones.pdf';
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  callBackFn(pdf: PDFDocumentProxy) {
    ( document.querySelector('.ng2-pdf-viewer-container') as HTMLElement).style.position = 'relative';
 }

}
