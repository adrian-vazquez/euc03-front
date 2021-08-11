import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf(base64String, fileName) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  }

  onClickDownloadPdf(){
    let base64String = "data:text/plain;base64,Y2FtcGHDsWEtIGRlc2NhcmdhIGFyY2hpdm8gdHh0DQpvZmVydGEgLSBkZXNjYXJnYSBhcmNoaXZvIHR4dA0KdGFzYXMgLSBDb25maWd1cmFjacOzbi0+IENhdGFsb2dvLT7igJ1UYXNhcyBkZWwgY29tcGFyYXRpdm/igJ0tPiANCg0KDQo=";
    this.downloadPdf(base64String,"export");
  }

}
