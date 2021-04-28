import { ARREGLO_PROFESORES } from './profesor-mock';
import { ProfeUni } from '../modelos/profe-uni';
import { ARREGLO_UNIVERSIDADES } from './universidad-mock';

export const ARREGLO_PROFEUNI: Array<ProfeUni> = [
  new ProfeUni(ARREGLO_PROFESORES[0], ARREGLO_UNIVERSIDADES[0]),
  new ProfeUni(ARREGLO_PROFESORES[0], ARREGLO_UNIVERSIDADES[1]),
  new ProfeUni(ARREGLO_PROFESORES[1], ARREGLO_UNIVERSIDADES[4]),
  new ProfeUni(ARREGLO_PROFESORES[1], ARREGLO_UNIVERSIDADES[5]),
  new ProfeUni(ARREGLO_PROFESORES[2], ARREGLO_UNIVERSIDADES[4]),
  new ProfeUni(ARREGLO_PROFESORES[2], ARREGLO_UNIVERSIDADES[3]),
  new ProfeUni(ARREGLO_PROFESORES[3], ARREGLO_UNIVERSIDADES[5]),
  new ProfeUni(ARREGLO_PROFESORES[3], ARREGLO_UNIVERSIDADES[6]),
  new ProfeUni(ARREGLO_PROFESORES[4], ARREGLO_UNIVERSIDADES[7]),
  new ProfeUni(ARREGLO_PROFESORES[4], ARREGLO_UNIVERSIDADES[8]),
  new ProfeUni(ARREGLO_PROFESORES[6], ARREGLO_UNIVERSIDADES[10]),
  new ProfeUni(ARREGLO_PROFESORES[6], ARREGLO_UNIVERSIDADES[12]),
  new ProfeUni(ARREGLO_PROFESORES[7], ARREGLO_UNIVERSIDADES[11]),
  new ProfeUni(ARREGLO_PROFESORES[7], ARREGLO_UNIVERSIDADES[12]),
  new ProfeUni(ARREGLO_PROFESORES[9], ARREGLO_UNIVERSIDADES[13]),
  new ProfeUni(ARREGLO_PROFESORES[10], ARREGLO_UNIVERSIDADES[14]),
  new ProfeUni(ARREGLO_PROFESORES[10], ARREGLO_UNIVERSIDADES[0]),
  new ProfeUni(ARREGLO_PROFESORES[10], ARREGLO_UNIVERSIDADES[12]),
  new ProfeUni(ARREGLO_PROFESORES[12], ARREGLO_UNIVERSIDADES[14]),
  new ProfeUni(ARREGLO_PROFESORES[14],ARREGLO_UNIVERSIDADES[0]),
];