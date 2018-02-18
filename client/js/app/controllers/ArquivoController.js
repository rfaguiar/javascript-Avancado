'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ArquivoController;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            ArquivoController = function () {
                function ArquivoController() {
                    _classCallCheck(this, ArquivoController);

                    this._inputDados = document.querySelector('.dados-arquivo');
                }

                _createClass(ArquivoController, [{
                    key: 'envia',
                    value: function envia() {
                        //cria um Arquivo com as suas propriedades;
                        var arquivo = ArquivoHelper.cria(this._inputDados.value);
                        // exibe mensagem no console com os dados do arquivo.
                        console.log('Dados do arquivo: ' + arquivo.nome + ', ' + arquivo.tamanho + ', ' + arquivo.tipo);
                        this._limpaFormulario();
                    }
                }, {
                    key: '_limpaFormulario',
                    value: function _limpaFormulario() {
                        this._inputDados.value = '';
                        this._inputDados.focus();
                    }
                }]);

                return ArquivoController;
            }();
        }
    };
});
//# sourceMappingURL=ArquivoController.js.map