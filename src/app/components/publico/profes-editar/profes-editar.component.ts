import { ARREGLO_PROFESORES } from './../../../mocks/profesor-mock';
import { Profesor } from './../../../modelos/profesor';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profes-editar',
  templateUrl: './profes-editar.component.html',
  styleUrls: ['./profes-editar.component.css'],
})
export class ProfesEditarComponent implements OnInit {
  public tmpBase64: any;
  public objProfesor: Profesor;

  constructor(private toastr: ToastrService, private route: ActivatedRoute) {
    this.objProfesor = new Profesor(0, 0, '', '', '');
  }

  //Consumir servicios
  ngOnInit(): void {
    this.route.paramMap.subscribe((parametro: ParamMap) => {
      let tmpObj: any;
      const dato = String(parametro.get('codProfesor'));
      const datoNumerico = parseFloat(dato);

      tmpObj = ARREGLO_PROFESORES.find(
        (profe) => profe.codigo === datoNumerico
      );
      this.objProfesor = tmpObj;
    });
  }

  public seleccionarFoto(input: any): any {
    if (!input.target.files[0] || input.target.files[0].length === 0) {
      return;
    }
    const mimeType = input.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      const parametros = {
        closeButton: true,
        enableHtml: true,
        progressBar: true,
        positionClass: 'toast-top-right',
        timeOut: 8000,
      };

      this.toastr.error(
        'Solo se permiten <strong> imágenes</strong>',
        'Te lo estoy advirtiendo',
        parametros
      );
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(input.target.files[0]);
    reader.onload = () => {
      this.tmpBase64 = reader.result;

      this.objProfesor.fotoBase64 = this.tmpBase64;
      this.objProfesor.nombrefoto = input.target.files[0].name;
    };
  }

  public enviarInfo(form: NgForm): boolean {
    this.mensajeOk();
    return true;
  }

  public mensajeOk(): void {
    const parametros = {
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      timeOut: 8000,
    };
    this.toastr.success(
      'Se ha actualizado <br/> correctamente el profesor',
      'EXITO',
      parametros
    );
  }
}
