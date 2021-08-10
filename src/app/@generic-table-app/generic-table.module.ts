import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { GenericTableModule } from '@angular-generic-table/core';
import { VistaEjecutivoComponent } from '../views/solicitud-inversiones/vista-ejecutivo/vista-ejecutivo.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
    declarations: [TableComponent],
    imports: [ 
        CommonModule,
        GenericTableModule,
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatTabsModule

    ], 
    exports: [TableComponent ],
    entryComponents: [
		VistaEjecutivoComponent
	],
    providers: [], 
}) 
export class GenericTableAppAppModule {}