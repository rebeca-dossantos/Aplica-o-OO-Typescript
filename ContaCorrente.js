"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_1 = require("./Conta");
const CreditoDebito_1 = require("./CreditoDebito");
class ContaCorrente extends Conta_1.Conta {
    constructor(numero, saldoinicial, limite) {
        super(numero, saldoinicial);
        this._limite = limite;
    }
    sacar(valor) {
        if (valor <= this._saldo + this._limite) {
            this._saldo -= valor;
            const debito = new CreditoDebito_1.Debito(valor);
            this._debitos.push(debito);
            console.log('Saldo realizado com sucesso.');
        }
        else {
            console.log('Operação falhou. Saldo insuficiente');
        }
    }
    transferir(valor, ContaDestino) {
        if (valor <= this._saldo + this._limite) {
            this._saldo -= valor;
            ContaDestino.depositar(valor);
            console.log('Transferência realizada com sucesso.');
        }
        else {
            console.log('Operação falhou. Saldo insuficiente.');
        }
    }
    calcularosaldo() {
        const somacreditos = this._creditos.reduce((acc, credito) => acc + credito.getvalor(), 0);
        const somadebitos = this._debitos.reduce((acc, debito) => acc + debito.getvalor(), 0);
        return somacreditos - somadebitos + this._limite;
    }
}
exports.ContaCorrente = ContaCorrente;
