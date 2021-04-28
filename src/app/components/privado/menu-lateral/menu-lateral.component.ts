import { ArregloPipe } from './../../../misPipes/arreglo.pipe';
import { Profesor } from './../../../modelos/profesor';
import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { ARREGLO_PROFESORES } from 'src/app/mocks/profesor-mock';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
  providers: [ArregloPipe]
})
export class MenuLateralComponent implements OnInit {
  public arrProfesores: Array<Profesor>;
  public objProfeSeleccionado: Profesor;

  constructor(private ordenar: ArregloPipe) {
    this.arrProfesores = [];
    this.objProfeSeleccionado = new Profesor(0,0,'','','');
  }

  ngOnInit(): void {
    const parametros = ['nombreProfesor', 'asc'];
    this.arrProfesores = this.ordenar.transform(ARREGLO_PROFESORES, parametros);
  }

  public seleccionProfe(obj: Profesor):void{
    this.objProfeSeleccionado = obj;
  }

  public inicializar():void{
    const parametros = ['nombreProfesor', 'asc'];
    this.arrProfesores = this.ordenar.transform(ARREGLO_PROFESORES, parametros);
    this.objProfeSeleccionado = new Profesor(0,0,'','','');
  }

}
