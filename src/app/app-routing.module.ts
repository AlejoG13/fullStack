import { DetalleComponent } from './components/privado/detalle/detalle.component';
import { PrincipalComponent } from './components/privado/principal/principal.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { ProfesListarComponent } from './components/publico/profes-listar/profes-listar.component';
import { ProfesEditarComponent } from './components/publico/profes-editar/profes-editar.component';
import { ProfesAdminComponent } from './components/publico/profes-admin/profes-admin.component';
import { ProfesCrearComponent } from './components/publico/profes-crear/profes-crear.component';
import { ProfesPrincipalComponent } from './components/publico/profes-principal/profes-principal.component';
import { AccesoComponent } from './components/acceso/acceso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  //Creacion de rutas
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: AccesoComponent },
  //Creacion de rutas con hijos
  {
    path: 'profesores',
    component: ProfesPrincipalComponent,
    children: [
      { path: 'principal', component: ProfesPrincipalComponent },
      { path: 'crear', component: ProfesCrearComponent },
      { path: 'admin', component: ProfesAdminComponent },
      { path: 'listar', component: ProfesListarComponent },
      { path: 'editar/:codProfesor', component: ProfesEditarComponent },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: '**', component: NoEncontradoComponent },
    ],
  },

  {
    path: 'externa',
    component: PrincipalComponent,
    children: [
      { path: 'detalle', component: DetalleComponent },
      { path: 'detalle/:codProfesor', component: DetalleComponent },
      { path: '', redirectTo: 'detalle', pathMatch: 'full' },
      { path: '**', component: NoEncontradoComponent },
    ],
  },

  //Ruteo de redireccion
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  //Ruteo de error
  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
