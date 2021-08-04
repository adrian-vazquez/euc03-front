import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesEspecialesComponent } from './solicitudes-especiales/solicitudes-especiales.component';
import { VistaEjecutivoComponent } from './vista-ejecutivo/vista-ejecutivo.component';

const routes: Routes = [
    { path: 'solicitudes-especiales', component: SolicitudesEspecialesComponent },
    { path: 'vista-ejecutivo', component: VistaEjecutivoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SolicitudEspecialRoutingModule {}
