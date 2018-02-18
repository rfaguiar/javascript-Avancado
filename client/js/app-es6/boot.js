import {currentInstance} from './controllers/NegociacaoController';
import {} from './polyfill/fetch.js';


let negociacaoController = currentInstance();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('#importar').onclick = negociacaoController.importaNegociacoes.bind(negociacaoController);
document.querySelector('#apagar').onclick = negociacaoController.apagar.bind(negociacaoController);