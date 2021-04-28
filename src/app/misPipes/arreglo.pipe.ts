import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arreglo',
})
export class ArregloPipe implements PipeTransform {
  transform(arregloExterno: Array<any>, parametros: Array<string>): Array<any> {
    const campo = parametros[0];
    const orden = parametros[1];

    return arregloExterno.sort(this.ordernarArreglo(campo,orden));
  }

  public ordernarArreglo(campo: string, orden = 'ASC'): any {
    //Funcion lambda
    return (arregloA: any, arregloB: any) => {
      if (!arregloA.hasOwnProperty(campo)) {
        return 0;
      }

      let obj1 = arregloA[campo];
      let obj2 = arregloB[campo];

      const ordenF = orden.toUpperCase();

      if (typeof arregloA[campo] === 'string') {
        obj1 = arregloA[campo].toUpperCase();
        obj2 = arregloB[campo].toUpperCase();
      }

      let resultado = 0;

      if (obj1 > obj2) {
        resultado = 1;
      } else if (obj1 < obj2) {
        resultado = -1;
      }

      return ordenF === 'ASC' ? resultado : resultado * -1;
    };
  }
}
