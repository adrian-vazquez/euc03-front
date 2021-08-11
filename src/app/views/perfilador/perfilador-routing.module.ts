import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfiladorComponent } from './perfilador/perfilador.component';
import { AclaracionesComponent } from './aclaraciones/aclaraciones.component';
import { CitivsotrosComponent } from './citivsotros/citivsotros.component';
import { CampaniaspagareComponent } from './campaniaspagare/campaniaspagare.component';

const routes: Routes = [
    { path: 'perfilador', component: PerfiladorComponent },
    { path: 'campaniaspagare', component: CampaniaspagareComponent },
    { path: 'aclaraciones', component: AclaracionesComponent },
    { path: 'citivsotros', component: CitivsotrosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PerfiladorRoutingModule {}
