"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereço = void 0;
class Endereço {
    constructor(cep, logradouro, numero, complemento, cidade, uf) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
    }
}
exports.Endereço = Endereço;
