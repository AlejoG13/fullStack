import { ARREGLO_PROFESORES } from './../../../mocks/profesor-mock';
import { ArregloPipe } from './../../../misPipes/arreglo.pipe';
import { Profesor } from './../../../modelos/profesor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profes-admin',
  templateUrl: './profes-admin.component.html',
  styleUrls: ['./profes-admin.component.css'],
  providers: [ArregloPipe],
})
export class ProfesAdminComponent implements OnInit {
  public arrProfesores: Array<Profesor>;
  public paginaActual: number;
  public cantidadMostrar: number;
  public cantidadPaginas: number;
  public cantidadTotalRegistros: number;

  constructor(private ordenar: ArregloPipe) {
    const parametros = ['codigo', 'asc'];
    this.arrProfesores = this.ordenar.transform(ARREGLO_PROFESORES, parametros);
    this.paginaActual = 1;
    this.cantidadMostrar = 5;
    this.cantidadTotalRegistros = this.arrProfesores.length;
    this.cantidadPaginas = Math.ceil(
      this.cantidadTotalRegistros / this.cantidadMostrar
    );
  }

  ngOnInit(): void {}
}
