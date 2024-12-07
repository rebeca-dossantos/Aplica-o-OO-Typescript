"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    constructor(cpf, nome, telefone, vip) {
        super(cpf, nome, telefone);
        this._enderecos = [];
        this.vip = vip;
        this._contas = [];
    }
    autenticar() {
        return true;
    }
    adicionarconta(conta) {
        this._contas.push(conta);
    }
    adicionarenderecos(endereco) {
        this._enderecos.push(endereco);
    }
    listarEnderecos() {
        return this._enderecos;
    }
}
exports.Cliente = Cliente;
