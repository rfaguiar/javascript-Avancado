class ContaCorrente extends Conta {

    constructor (titular, conta) {

        super(titular, conta);
    }

    //somando a taxa ao saldo
    atualiza (taxa) {
        this._saldo += taxa
    }
}