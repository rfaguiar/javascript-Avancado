class ListaNegociacoes {

    constructor () {

        this._negociacoes = [];
    }

    adiciona (negociacao) {

        this._negociacoes.push(negociacao);
    }

    total () {
        let total = 0.0;
        this._negociacoes.map(n => total += n.valor)
        return total;
    }

    get negociacoes () {

        return [].concat(this._negociacoes);
    }
}