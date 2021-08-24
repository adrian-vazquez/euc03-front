
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { NotificacionesService } from '../../../../../../services/notificaciones.service';

interface IOferta {
    ofertaId: number,
    ofertaTipoDirigida: number,
    ofertaDigital: boolean,
    ofertaNTD: boolean,
    ofertaNTP: boolean,
    ofertaECM: boolean,
    ofertaNTB: boolean,
    ofertaBAU: boolean,
    ofertaClienteTipoPersona: string,
    ofertaSegmento: number,
    ofertaNombreLargo: string,
    ofertaCampaniaId: string,
    ofertaMontoDesde: string,
    ofertaDineroNuevoMin: string,
    ofertaMontoHasta: string,
    ofertaDineroNuevoMax: string,
    ofertaPlazoMinimo: number,
    ofertaPlazoMaximo: number,
    ofertaTasaId: string,
    ofertaParticipacionUnica: string,
    ofertaDiasCliente: string,
    ofertaSiguentePaso: number,
    ofertaInformativaFondos: boolean,
    ofertaSeccion: number,
    ofertaPrimeraBusqueda: boolean,
    ofertaSegundaBusqueda: boolean,
    ofertaGuiaInformativaId: number,
    ofertaPdfEspecialId: number,
}

const bodyTemplateGuide = ` 
<form style="overflow-x: hidden; overflow-y: auto ; max-height: 25em;">
<div class="form-group row flex-column" style="font-size: 0.8em;  margin-left: 0.2em;">

<div class="form-floating  mt-2">
<input class="form-control form-control-sm col-md-11" placeholder="Oferta Guía Informativa Id">
</div>

    <div class="form-floating mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
            <input class="form-check-input" type="checkbox" value="">
            <label style="margin-top: 0.4em;" class="form-check-label">
                Oferta Digital
            </label>
        </div>
    </div>

    <div class="form-floating  mt-2">
       <div class="form-check" style="text-align: initial; font-size: 0.8em;">
          <input class="form-check-input" type="checkbox" value="">
          <label style="margin-top: 0.4em;" class="form-check-label">
              Oferta NTD
          </label>
       </div>
    </div>

    <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
          <input class="form-check-input" type="checkbox" value="">
          <label style="margin-top: 0.4em;" class="form-check-label">
            Oferta NTP
          </label>
       </div>
    </div>

    <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
          <input class="form-check-input" type="checkbox" value="">
          <label style="margin-top: 0.4em;" class="form-check-label">
            Oferta ECM
          </label>
       </div>
    </div>

    <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
          <input class="form-check-input" type="checkbox" value="">
          <label style="margin-top: 0.4em;" class="form-check-label">
            Oferta NTB
          </label>
        </div>
    </div>

    <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
            <input class="form-check-input" type="checkbox" value="">
            <label style="margin-top: 0.4em;" class="form-check-label">
                Oferta BAU
            </label>
        </div>
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Cliente Tipo Persona">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Segmento">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Nombre Largo">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder=Oferta Campania Id">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Monto Desde">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Dinero Nuevo Min">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Monto Hasta">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Dinero Nuevo Max">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Plazo Minimo">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Tasa Id">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Participación Unica">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta DÍas Cliente">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11"  placeholder="Oferta Siguente Paso">
    </div>

    <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
            <input class="form-check-input" type="checkbox" value="">
            <label style="margin-top: 0.4em;" class="form-check-label">
                Oferta Informativa Fondos
            </label>
        </div>
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Seccion">
    </div>

    <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
            <input class="form-check-input" type="checkbox" value="">
            <label style="margin-top: 0.4em;" class="form-check-label">
                Oferta Primera Búsqueda
            </label>
        </div>
    </div>

    <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
            <input class="form-check-input" type="checkbox" value="">
            <label style="margin-top: 0.4em;" class="form-check-label">
            Oferta Segunda Búsqueda
            </label>
        </div>
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Guía Informativa Id">
    </div>

    <div class="form-floating  mt-2">
        <input class="form-control form-control-sm col-md-11" placeholder="Oferta Pdf Especial Id">
    </div>
    </div>
</form> 
`;

import { base64Pdf } from '../../../../../../../assets/data/pdf-base-64';

@Component({
    selector: 'app-ofertas-general',
    templateUrl: './ofertas-general.component.html',
    styleUrls: ['./ofertas-general.component.scss', '../../catalogos.component.scss', '../../ejecutivos-sucursal/ejecutivos-sucursal.component.scss']
})
export class OfertasGeneralComponent implements OnInit {

    displayedColumns: string[] = [
        'ofertaId',
        'ofertaTipoDirigida',
        'ofertaDigital',
        'ofertaNTD',
        'ofertaNTP',
        'ofertaECM',
        'ofertaNTB',
        'ofertaBAU',
        'ofertaClienteTipoPersona',
        'ofertaSegmento',
        'ofertaNombreLargo',
        'ofertaCampaniaId',
        'ofertaMontoDesde',
        'ofertaDineroNuevoMin',
        'ofertaMontoHasta',
        'ofertaDineroNuevoMax',
        'ofertaPlazoMinimo',
        'ofertaPlazoMaximo',
        'ofertaTasaId',
        'ofertaParticipacionUnica',
        'ofertaDiasCliente',
        'ofertaSiguentePaso',
        'ofertaInformativaFondos',
        'ofertaSeccion',
        'ofertaPrimeraBusqueda',
        'ofertaSegundaBusqueda',
        'ofertaGuiaInformativaId',
        'ofertaPdfEspecialId',
        'edit'
    ];
    dataSource: MatTableDataSource<IOferta>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    bodyTemplateEjecutivo: string = bodyTemplateGuide;

    constructor(private notificacionesService: NotificacionesService) {
        // Create 100 users
        const ofertas: IOferta[] = [
            {
                ofertaId: 1234567898765432,
                ofertaTipoDirigida: 12345678987654321123,
                ofertaDigital: false,
                ofertaNTD: true,
                ofertaNTP: true,
                ofertaECM: false,
                ofertaNTB: false,
                ofertaBAU: true,
                ofertaClienteTipoPersona: '2',
                ofertaSegmento: 3,
                ofertaNombreLargo: 'Campaña nombre',
                ofertaCampaniaId: 'camId',
                ofertaMontoDesde: '12323434.98',
                ofertaDineroNuevoMin: '765.98',
                ofertaMontoHasta: '877',
                ofertaDineroNuevoMax: '123.45',
                ofertaPlazoMinimo: 321,
                ofertaPlazoMaximo: 999,
                ofertaTasaId: 'oferta tasa ID',
                ofertaParticipacionUnica: 'no hay',
                ofertaDiasCliente: '123',
                ofertaSiguentePaso: 1,
                ofertaInformativaFondos: true,
                ofertaSeccion: 3,
                ofertaPrimeraBusqueda: false,
                ofertaSegundaBusqueda: false,
                ofertaGuiaInformativaId: 12345432322323,
                ofertaPdfEspecialId: 12345432322323,
            },

        ]

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(ofertas);
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    openModalAdd() {
        this.openModal('Agregar', 'Guardar', 'Regresar', 'Ejecutivo agregado exitosamente', 'Error al agregar ejecutivo', this.bodyTemplateEjecutivo);
    }

    openModalEdit(oferta: IOferta) {
        console.log(oferta);
        let body = `
    <form style="overflow-x: hidden; overflow-y: auto ; max-height: 25em;">
    <div class="form-group row flex-column" style="margin-left: 1em">
        <div class="form-floating">
            <input type="number" class="form-control form-control-sm col-md-11" value="${oferta.ofertaTipoDirigida}" placeholder="Oferta Tipo Dirigida">
        </div>

        <div class="form-floating mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
            <input class="form-check-input" type="checkbox" value="">
            <label style="margin-top: 0.2em;" class="form-check-label">
                Oferta Digital
            </label>
        </div>
    </div>

    <div class="form-floating  mt-2">
       <div class="form-check" style="text-align: initial; font-size: 0.8em;">
          <input class="form-check-input" type="checkbox" value="">
          <label style="margin-top: 0.2em;" class="form-check-label">
              Oferta NTD
          </label>
       </div>
    </div>

    <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
          <input class="form-check-input" type="checkbox" value="">
          <label style="margin-top: 0.2em;" class="form-check-label">
            Oferta NTP
          </label>
       </div>
    </div>

    <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
          <input class="form-check-input" type="checkbox" value="">
          <label style="margin-top: 0.2em;" class="form-check-label">
            Oferta ECM
          </label>
       </div>
    </div>

    <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
          <input class="form-check-input" type="checkbox" value="">
          <label style="margin-top: 0.2em;" class="form-check-label">
            Oferta NTB
          </label>
        </div>
    </div>

    <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
            <input class="form-check-input" type="checkbox" value="">
            <label style="margin-top: 0.2em;" class="form-check-label">
                Oferta BAU
            </label>
        </div>
    </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaClienteTipoPersona}" placeholder="Oferta Cliente Tipo Persona">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaSegmento}" placeholder="Oferta Segmento">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaNombreLargo}" placeholder="Oferta Nombre Largo">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaCampaniaId}" placeholder=Oferta Campania Id">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaMontoDesde}" placeholder="Oferta Monto Desde">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaDineroNuevoMin}" placeholder="Oferta Dinero Nuevo Min">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaMontoHasta}" placeholder="Oferta Monto Hasta">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaDineroNuevoMax}" placeholder="Oferta Dinero Nuevo Max">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaPlazoMinimo}" placeholder="Oferta Plazo Minimo">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaTasaId}" placeholder="Oferta Tasa Id">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaParticipacionUnica}" placeholder="Oferta Participación Unica">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaDiasCliente}" placeholder="Oferta DÍas Cliente">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11"  value="${oferta.ofertaSiguentePaso}" placeholder="Oferta Siguente Paso">
        </div>

        <div class="form-floating  mt-2">
            <div class="form-check" style="text-align: initial; font-size: 0.8em;">
                <input class="form-check-input" type="checkbox" value="">
                <label style="margin-top: 0.2em;" class="form-check-label">
                    Oferta Informativa Fondos
                </label>
            </div>
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaSeccion}" placeholder="Oferta Seccion">
        </div>

        <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
            <input class="form-check-input" type="checkbox" value="">
            <label style="margin-top: 0.2em;" class="form-check-label">
                Oferta Primera Búsqueda
            </label>
        </div>
    </div>

    <div class="form-floating  mt-2">
        <div class="form-check" style="text-align: initial; font-size: 0.8em;">
            <input class="form-check-input" type="checkbox" value="">
            <label style="margin-top: 0.2em;" class="form-check-label">
            Oferta Segunda Búsqueda
            </label>
        </div>
    </div>


        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaGuiaInformativaId}" placeholder="Oferta Guía Informativa Id">
        </div>

        <div class="form-floating  mt-2">
            <input class="form-control form-control-sm col-md-11" value="${oferta.ofertaPdfEspecialId}" placeholder="Oferta Pdf Especial Id">
        </div>
        </div>
    </form> 
    `;
        this.openModal('EDICIÓN DE OFERTA', 'GUARDAR', 'CANCELAR', 'Oferta editada exitosamente', 'Error al editar la Oferta', body);
    }

    openModal(title: string, btnOk: string, btnCancel: string, successMessage: string, errorMessage: string, body: string) {
        Swal.fire({
            title: title,
            html: body,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: btnOk,
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: btnCancel,
            cancelButtonAriaLabel: 'Thumbs down',
            allowOutsideClick: false,

            didClose: () => {
                console.log('close')
            }

        }).then(res => {
            console.log('res', res);
            if (!res.dismiss) {
                this.notificacionesService.lanzarNotificacion(successMessage, '', 'success')
            } else {
                this.notificacionesService.lanzarNotificacion(errorMessage, '', 'error')
            }
        })
            .catch(err => {
                console.log('error', err)
            })
    }

    downloadPdf(base64String, fileName) {
        const source = `${base64String}`;
        const link = document.createElement("a");
        link.href = source;
        link.download = `${fileName}`
        link.click();
    }

    onClickDownloadPdf(nameFile: string) {
        let base64String = base64Pdf;
        this.downloadPdf(base64String, nameFile);
    }
}



