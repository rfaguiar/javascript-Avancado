class Codigo {

    constructor (texto) {

        if (!this._validaTexto(texto)) throw new Error(`O ${texto} não é um código válido`);
        this._texto = texto;
    }

    _validaTexto (texto) {
        return /\D{3}-\D{2}-\d{2}/.test(texto);
    }

    get texto () {
        return this._texto;
    }
}

let codigo1 = new Codigo('GWZ-JJ-12'); // válido
console.log(codigo1.texto);
let codigo2 = new Codigo('1X1-JJ-12'); // inválido
console.log(codigo2.texto);