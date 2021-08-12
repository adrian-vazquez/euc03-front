import { Component, OnInit } from '@angular/core';

enum catalogs {
  CatCampanias = 'Catalogo de Campañas',
  CatOfertas = 'Catálogo de Ofertas',
  CaTasas = 'Catálogo de tasas',
  CatGuias = 'Catálogo de Guía Informativa',
  CatPDFEspecial = 'Catálogo de PDF especial',
  CatFolios = 'Catálogo de folios',
  CatSucursales = 'Catálogo de sucursales',
  CatParametros = 'Carga de valor de parámetros',
}

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss', '../catalogos.component.scss']
})
export class ConsultasComponent implements OnInit {
  files: {key:string,label}[] = []

  constructor() { 
    for (let motif in catalogs) {
      this.files.push({
        key: motif,
        label: catalogs[motif]
      })
        console.log(catalogs[motif]);
    }
  console.log(this.files);
  }

  ngOnInit(): void {
  }

  downloadPdf(base64String, fileName) {
    const source = `${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.txt`
    link.click();
  }

  onClickDownloadPdf(nameFile: string){
    let base64String = "data:text/plain;base64,Y2FtcGHDsWEtIGRlc2NhcmdhIGFyY2hpdm8gdHh0DQpvZmVydGEgLSBkZXNjYXJnYSBhcmNoaXZvIHR4dA0KdGFzYXMgLSBDb25maWd1cmFjacOzbi0+IENhdGFsb2dvLT7igJ1UYXNhcyBkZWwgY29tcGFyYXRpdm/igJ0tPiANCg0KDQo=";
    this.downloadPdf(base64String, nameFile);
  }

}
