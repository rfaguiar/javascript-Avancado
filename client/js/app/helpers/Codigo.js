'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Codigo, codigo1, codigo2;

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

            Codigo = function () {
                function Codigo(texto) {
                    _classCallCheck(this, Codigo);

                    if (!this._validaTexto(texto)) throw new Error('O ' + texto + ' n\xE3o \xE9 um c\xF3digo v\xE1lido');
                    this._texto = texto;
                }

                _createClass(Codigo, [{
                    key: '_validaTexto',
                    value: function _validaTexto(texto) {
                        return (/\D{3}-\D{2}-\d{2}/.test(texto)
                        );
                    }
                }, {
                    key: 'texto',
                    get: function get() {
                        return this._texto;
                    }
                }]);

                return Codigo;
            }();

            codigo1 = new Codigo('GWZ-JJ-12');
            // válido
            console.log(codigo1.texto);
            codigo2 = new Codigo('1X1-JJ-12');
            // inválido
            console.log(codigo2.texto);
        }
    };
});
//# sourceMappingURL=Codigo.js.map