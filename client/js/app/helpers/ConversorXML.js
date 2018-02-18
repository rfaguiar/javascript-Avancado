'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ConversorXML;

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

            ConversorXML = function () {
                function ConversorXML() {
                    _classCallCheck(this, ConversorXML);
                }

                _createClass(ConversorXML, null, [{
                    key: 'converte',
                    value: function converte(objeto) {
                        // converte um objeto em XML
                    }
                }]);

                return ConversorXML;
            }();

            ConversorXML.converte({ nome: 'Guaraci', idade: 40 });;
        }
    };
});
//# sourceMappingURL=ConversorXML.js.map