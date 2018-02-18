class NegociacaoService {

    constructor () {

        this._http = new HttpService();
    }

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            this._http
                    .get('/negociacoes/semana')
                    .then(negociacoes => resolve(negociacoes.map(objecto => new Negociacao(new Date(objecto.data), objecto.quantidade, objecto.valor))))
                    .catch(erro => {
                        console.log(erro);
                        reject('Não foi possível obter as negociações da semana.');
                    });
        });
    }

    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {
            this._http
                    .get('/negociacoes/anterior')
                    .then(negociacoes => resolve(negociacoes.map(objecto => new Negociacao(new Date(objecto.data), objecto.quantidade, objecto.valor))))
                    .catch(erro => {
                        console.log(erro);
                        reject('Não foi possível obter as negociações da semana anterior.');
                    });
        });
        
    }

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this._http
                    .get('/negociacoes/retrasada')
                    .then(negociacoes => resolve(negociacoes.map(objecto => new Negociacao(new Date(objecto.data), objecto.quantidade, objecto.valor))))
                    .catch(erro => {
                        console.log(erro);
                        reject('Não foi possível obter as negociações da semana retrasada.');
                    });
        });
    }
}