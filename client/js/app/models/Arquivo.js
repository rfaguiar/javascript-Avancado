"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Arquivo;

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

            Arquivo = function () {
                function Arquivo(nome, tamanho, tipo) {
                    _classCallCheck(this, Arquivo);

                    this._nome = nome;
                    this._tamanho = tamanho;
                    this._tipo = tipo;
                }

                _createClass(Arquivo, [{
                    key: "nome",
                    get: function get() {
                        return this._nome;
                    }
                }, {
                    key: "tamanho",
                    get: function get() {
                        return this._tamanho;
                    }
                }, {
                    key: "tipo",
                    get: function get() {
                        return this._tipo;
                    }
                }]);

                return Arquivo;
            }();
        }
    };
});
//# sourceMappingURL=Arquivo.js.map