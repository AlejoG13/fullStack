export class Universidad {
  public codigoUniversidad: number;
  public nombreUniversidad: string;
  public nombreLogo: string;
  public logoBase64: string;

  constructor(codUni: number, nomUni: string, nomLog: string, logBase: string) {
    this.codigoUniversidad = codUni;
    this.nombreUniversidad = nomUni;
    this.nombreLogo = nomLog;
    this.logoBase64 = logBase;
  }
}
