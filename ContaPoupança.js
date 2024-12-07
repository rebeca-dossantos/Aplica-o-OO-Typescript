"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupança = void 0;
const Conta_1 = require("./Conta");
const CreditoDebito_1 = require("./CreditoDebito");
class ContaPoupança extends Conta_1.Conta {
    constructor(numero, saldoinicial) {
        super(numero, saldoinicial);
    }
    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            const debito = new CreditoDebito_1.Debito(valor);
            this._debitos.push(debito);
            console.log('Saque realizado com sucesso');
        }
        else {
            console.log('Operação falhou. Saldo insuficiente');
        }
    }
    calcularosaldo() {
        const somacreditos = this._creditos.reduce((acc, credito) => acc + credito.getvalor(), 0);
        const somadebitos = this._debitos.reduce((acc, debito) => acc + debito.getvalor(), 0);
        return somacreditos - somadebitos;
    }
}
exports.ContaPoupança = ContaPoupança;
