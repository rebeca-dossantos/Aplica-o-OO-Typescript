"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debito = exports.Credito = void 0;
class Credito {
    constructor(_valor, _data = new Date()) {
        this._valor = _valor;
        this._data = _data;
    }
    getvalor() {
        return this._valor;
    }
}
exports.Credito = Credito;
class Debito {
    constructor(_valor, _data = new Date()) {
        this._valor = _valor;
        this._data = _data;
    }
    getvalor() {
        return this._valor;
    }
}
exports.Debito = Debito;
