import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PlantillaComponent } from './plantilla/plantilla.component';


const routes: Routes = [
  {path: '', redirectTo: 'plantilla', pathMatch: 'full'},
  {path: 'login', component: InicioSesionComponent},
  {path: 'plantilla', component: PlantillaComponent, children:  [{
  path: '', redirectTo: 'principal', pathMatch: 'full'},
  {path: 'principal', component: PaginaPrincipalComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
