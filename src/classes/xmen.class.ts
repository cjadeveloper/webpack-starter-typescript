export class XMen {
  constructor(public nombre: string, public clave: string) {}

  show() {
    console.log(`${this.nombre} - ${this.clave}`);
  }
}
