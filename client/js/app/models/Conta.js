'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Conta;

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

            Conta = function () {
                function Conta(titular, conta) {
                    _classCallCheck(this, Conta);

                    this._titular = titular;
                    this._conta = conta;
                    this._saldo = 0.0;
                }

                _createClass(Conta, [{
                    key: 'deposita',
                    value: function deposita(valor) {
                        console.log('Valor depositado: ' + valor);
                        this._saldo += valor;
                    }
                }, {
                    key: 'atualiza',
                    value: function atualiza(taxa) {

                        throw new Error('Ométodo atualiza deve ser implementado pelas subclasses');
                    }
                }, {
                    key: 'saldo',
                    get: function get() {
                        return this._saldo;
                    }
                }, {
                    key: 'titular',
                    get: function get() {
                        return this._titular;
                    }
                }, {
                    key: 'conta',
                    get: function get() {
                        return this._conta;
                    }
                }]);

                return Conta;
            }();
        }
    };
});
//# sourceMappingURL=Conta.js.map