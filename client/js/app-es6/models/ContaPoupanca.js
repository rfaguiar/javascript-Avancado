class ContaPoupanca extends Conta {

    constructor (titular, conta) {

        super(titular, conta);
    }

    //somando o dobro da taxa. 
    atualiza (taxa) {
        this._saldo += taxa * 2;
    }
}