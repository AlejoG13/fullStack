import { ARREGLO_PROFESORES } from 'src/app/mocks/profesor-mock';
import { Profesor } from 'src/app/modelos/profesor';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profes-crear',
  templateUrl: './profes-crear.component.html',
  styleUrls: ['./profes-crear.component.css'],
})
export class ProfesCrearComponent implements OnInit {
  public tmpBase64: any;
  public objProfesor: Profesor;

  constructor(private toastr: ToastrService, private router: Router) {
    this.objProfesor = new Profesor(0, 0, '', '', '');
  }

  ngOnInit(): void {}

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
    this.crearProfesor();
    this.objProfesor = new Profesor(0, 0, '', '', '');
    this.mensajeOk();
    //Aca colocamos un ruteo de rediccionamiento
    this.router.navigate(['/profesores/listar'])
    return true;
  }

  public crearProfesor(): void {
    this.objProfesor.codigo = ARREGLO_PROFESORES.length + 1;
    ARREGLO_PROFESORES.push(this.objProfesor);
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
      'Se ha creado <br/> correctamente el profesor',
      'EXITO',
      parametros
    );
  }
}
