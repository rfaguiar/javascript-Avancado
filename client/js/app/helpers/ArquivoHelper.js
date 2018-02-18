'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ArquivoHelper;

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

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

            ArquivoHelper = function () {
                function ArquivoHelper() {
                    _classCallCheck(this, ArquivoHelper);
                }

                _createClass(ArquivoHelper, null, [{
                    key: 'cria',
                    value: function cria(informacao) {
                        return new (Function.prototype.bind.apply(Arquivo, [null].concat(_toConsumableArray(informacao.toUpperCase().split('/')))))();
                    }
                }]);

                return ArquivoHelper;
            }();
        }
    };
});
//# sourceMappingURL=ArquivoHelper.js.map