import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccesoComponent } from './components/acceso/acceso.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProfesAdminComponent } from './components/publico/profes-admin/profes-admin.component';
import { ProfesCrearComponent } from './components/publico/profes-crear/profes-crear.component';
import { ProfesEditarComponent } from './components/publico/profes-editar/profes-editar.component';
import { ProfesPrincipalComponent } from './components/publico/profes-principal/profes-principal.component';
import { MenuLateralComponent } from './components/privado/menu-lateral/menu-lateral.component';
import { PrincipalComponent } from './components/privado/principal/principal.component';
import { DetalleComponent } from './components/privado/detalle/detalle.component';
import { ArregloPipe } from './misPipes/arreglo.pipe';
import { ProfesListarComponent } from './components/publico/profes-listar/profes-listar.component';


@NgModule({
  declarations: [
    AppComponent,
    AccesoComponent,
    MenuSuperiorComponent,
    NoEncontradoComponent,
    InicioComponent,
    ProfesAdminComponent,
    ProfesCrearComponent,
    ProfesEditarComponent,
    ProfesPrincipalComponent,
    MenuLateralComponent,
    PrincipalComponent,
    DetalleComponent,
    ArregloPipe,
    ProfesListarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
