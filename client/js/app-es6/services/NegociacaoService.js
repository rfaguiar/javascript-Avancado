import {HttpService} from './HttpService';
import {ConnectionFactory} from './ConnectionFactory';
import {NegociacaoDao} from '../dao/NegociacaoDao';
import {Negociacao} from '../models/Negociacao';

export class NegociacaoService {

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

    obterNegociacoes() {

        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()])
        .then(periodos => {
            let negociacoes = periodos
                .reduce((dados, periodo) => dados.concat(periodo), [])
                .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor));

            return negociacoes;
        }).catch(erro => {throw new Erro(erro)});
    }

    cadastra (negociacao) {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.adiciona(negociacao))
            .then(() => 'Negociação adicionada com sucesso')
            .catch(() => {throw new Erro(erro)});
    }

    lista () {
        
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.listaTodos())
            .catch(() => {throw new Erro(erro)});
    }

    apaga () {

        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .catch(() => {throw new Erro(erro)});
    }

    importa (listaAtual) {

        return this.obterNegociacoes()
            .then(negociacoes => negociacoes.filter(negociacao => 
                !listaAtual.negociacoes.some(negociacaoExistente =>
                    negociacao.isEquals(negociacaoExistente)))
            ).catch(erro => {
                console.log(erro);
                reject('Não foi possível obter as negociações para importar.');
            });
    }
}