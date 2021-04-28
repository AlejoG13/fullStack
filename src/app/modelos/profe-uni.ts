import { Universidad } from './universidad';
import { Profesor } from './profesor';
export class ProfeUni {
  public codProfesor: Profesor;
  public codUniversidad: Universidad;

  constructor(codPro: Profesor, codUni: Universidad) {
    this.codProfesor = codPro;
    this.codUniversidad = codUni;
  }
}
