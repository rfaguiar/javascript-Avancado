class Conta {

    constructor (titular, conta) {

        this._titular = titular;
        this._conta = conta;
        this._saldo = 0.0;
    }

    deposita(valor) {
        console.log('Valor depositado: ' + valor);
        this._saldo += valor;
    }

    atualiza (taxa) {

        throw new Error('Ométodo atualiza deve ser implementado pelas subclasses');
    }

    get saldo () {
        return this._saldo;
    }

    get titular () {
        return this._titular;
    }

    get conta () {
        return this._conta;
    }
}