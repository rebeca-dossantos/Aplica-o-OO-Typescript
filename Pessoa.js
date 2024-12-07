"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(cpf, nome, telefone) {
        this._cpf = cpf;
        this._nome = nome;
        this._telefone = telefone;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(valor) {
        this._telefone = valor;
    }
}
exports.Pessoa = Pessoa;
