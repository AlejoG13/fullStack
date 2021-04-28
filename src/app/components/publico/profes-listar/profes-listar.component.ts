import { Profesor } from './../../../modelos/profesor';
import { ArregloPipe } from './../../../misPipes/arreglo.pipe';
import { ARREGLO_PROFESORES } from './../../../mocks/profesor-mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profes-listar',
  templateUrl: './profes-listar.component.html',
  styleUrls: ['./profes-listar.component.css'],
  //No se les olvide incluir el provider, para pipe
  providers: [ArregloPipe],
})
export class ProfesListarComponent implements OnInit {
  public arrProfesores: Array<Profesor>;
  public paginaActual: number;
  public cantidadMostrar: number;
  public cantidadPaginas: number;
  public cantidadTotalRegistros: number;

  constructor(private ordenar: ArregloPipe) {
    const parametros = ['codigo', 'DesC'];
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
