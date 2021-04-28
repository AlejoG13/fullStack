export class Profesor {
  public codigo: number;
  public documento: number;
  public nombreProfesor: string;
  public nombrefoto: string;
  public fotoBase64: string;

  public constructor(
    cod: number,
    doc: number,
    noP: string,
    noF: string,
    f64: string
  ) {
    this.codigo = cod;
    this.documento = doc;
    this.nombreProfesor = noP;
    this.nombrefoto = noF;
    this.fotoBase64 = f64;
  }
}
