'use strict';

System.register(['./controllers/NegociacaoController', './polyfill/fetch.js'], function (_export, _context) {
  "use strict";

  var currentInstance, negociacaoController;
  return {
    setters: [function (_controllersNegociacaoController) {
      currentInstance = _controllersNegociacaoController.currentInstance;
    }, function (_polyfillFetchJs) {}],
    execute: function () {
      negociacaoController = currentInstance();


      document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
      document.querySelector('#importar').onclick = negociacaoController.importaNegociacoes.bind(negociacaoController);
      document.querySelector('#apagar').onclick = negociacaoController.apagar.bind(negociacaoController);
    }
  };
});
//# sourceMappingURL=boot.js.map