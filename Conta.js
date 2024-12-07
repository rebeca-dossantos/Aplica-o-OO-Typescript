"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const CreditoDebito_1 = require("./CreditoDebito");
class Conta {
    constructor(numero, saldoinicial) {
        this._debitos = [];
        this._creditos = [];
        this._numero = numero;
        this._saldo = saldoinicial;
    }
    depositar(valor) {
        this._saldo += valor;
        const credito = new CreditoDebito_1.Credito(valor);
        this._creditos.push(credito);
    }
}
exports.Conta = Conta;
