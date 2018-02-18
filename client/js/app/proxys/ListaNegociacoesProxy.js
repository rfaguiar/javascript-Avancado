class ListaNegociacoesProxy extends ListaNegociacoes {

    constructor (armadilha) {

        super();
        this._armadilha = armadilha;
    }

    adiciona (negociacao) {

        super.adiciona(negociacao);
        this._armadilha(this);
    }

    esvazia () {

        super.esvazia
        this._armadilha(this);
    }
}