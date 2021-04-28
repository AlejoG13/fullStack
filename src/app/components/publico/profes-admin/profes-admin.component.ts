import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ARREGLO_PROFESORES } from './../../../mocks/profesor-mock';
import { ArregloPipe } from './../../../misPipes/arreglo.pipe';
import { Profesor } from './../../../modelos/profesor';
import { Component, OnInit, TemplateRef } from '@angular/core';

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
  public profeSeleccionado: Profesor;
  public modalRef: BsModalRef;
  public initializeModal: any;
  public modalTitulo: string;
  public modalTexto: string;
  public modalContenido: string;

  constructor(
    private ordenar: ArregloPipe,
    public modalService: BsModalService
  ) {
    const parametros = ['codigo', 'asc'];
    this.profeSeleccionado = new Profesor(0, 0, '', '', '');
    this.modalRef = this.initializeModal;
    this.modalTitulo = '';
    this.modalTexto = '';
    this.modalContenido = '';
    this.arrProfesores = this.ordenar.transform(ARREGLO_PROFESORES, parametros);
    this.paginaActual = 1;
    this.cantidadMostrar = 5;
    this.cantidadTotalRegistros = this.arrProfesores.length;
    this.cantidadPaginas = Math.ceil(
      this.cantidadTotalRegistros / this.cantidadMostrar
    );
  }

  ngOnInit(): void {}

  public eliminarProfesor(objProfesor: Profesor): void {
    this.arrProfesores = this.arrProfesores.filter(
      (elemento) => elemento != objProfesor
    );
    this.profeSeleccionado = new Profesor(0, 0, '', '', '');
  }

  public eliminar(): void {
    this.eliminarProfesor(this.profeSeleccionado);
    this.modalRef.hide();
  }

  public cancelarEliminar(): void {
    this.modalRef.hide();
  }

  public abrirModalEliminar(
    template: TemplateRef<any>,
    profTmp: Profesor
  ): void {
    this.profeSeleccionado = profTmp;
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.modalTitulo = 'ADVERTENCIA';
    this.modalTexto = '¿Realmente quiere eliminar este registro?';
  }

  public cancelar(): void {
    this.profeSeleccionado = new Profesor(0, 0, '', '', '');
    this.modalRef.hide();
  }
}
