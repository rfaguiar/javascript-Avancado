class ListaNegociacoes {

    constructor () {

        this._negociacoes = [];
    }

    adiciona (negociacao) {

        this._negociacoes.push(negociacao);
    }

    esvazia () {

        this._negociacoes = [];
    }

    ordena(criterio) {
        this._negociacoes.sort(criterio);        
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }

    get volumeTotal () {
        let total = 0.0;
        this._negociacoes.map(n => total += n.valor)
        return total;
    }

    get negociacoes () {

        return [].concat(this._negociacoes);
    }
}