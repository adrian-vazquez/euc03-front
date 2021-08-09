import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { GenericTableModule } from '@angular-generic-table/core';
import { VistaEjecutivoComponent } from '../views/solicitud-inversiones/vista-ejecutivo/vista-ejecutivo.component';

@NgModule({
    declarations: [TableComponent],
    imports: [ 
        CommonModule,
        GenericTableModule,

    ], 
    exports: [TableComponent ],
    entryComponents: [
		VistaEjecutivoComponent
	],
    providers: [], 
}) 
export class GenericTableAppAppModule {}