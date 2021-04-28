import { ARREGLO_PROFEUNI } from './../../../mocks/profe-uni-mock';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProfeUni } from './../../../modelos/profe-uni';
import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/modelos/profesor';
import { Universidad } from 'src/app/modelos/universidad';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  public arrProfesUniversidades: Array<ProfeUni>;
  public cantidadUniversidades: number;
  public profeUniSeleccionado: ProfeUni;
  public tmp: any;

  constructor(private route: ActivatedRoute) {
    this.arrProfesUniversidades = [];
    this.cantidadUniversidades = 0;
    this.profeUniSeleccionado = new ProfeUni(
        new Profesor(0, 0, '', '', ''),
        new Universidad(0, '', '', '')
      );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parametro: ParamMap) => {
      this.tmp = parametro.get('codProfesor');
      const profeCodigo = parseFloat(this.tmp);

      if (Number.isNaN(profeCodigo) || profeCodigo == 0) {
        this.arrProfesUniversidades = ARREGLO_PROFEUNI;
        this.tmp = 0;
      } else {
        this.arrProfesUniversidades = ARREGLO_PROFEUNI.filter(
          (miProfeUni) => miProfeUni.codProfesor.codigo === profeCodigo
        );
      }
      this.cantidadUniversidades = this.arrProfesUniversidades.length;
      this.profeUniSeleccionado = new ProfeUni(
        new Profesor(0, 0, '', '', ''),
        new Universidad(0, '', '', '')
      );

    });
  }

  public seleccionarProfeUni(objPU: ProfeUni): void{
    this.profeUniSeleccionado = objPU;

  }

}
