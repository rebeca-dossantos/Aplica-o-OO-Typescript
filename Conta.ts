import { Credito, Debito } from "./CreditoDebito";
export abstract class Conta {
    protected _numero: String;
    protected _saldo: number;
    protected _debitos: Debito[] = [];
    protected _creditos: Credito[] = [];

    constructor(numero: string, saldoinicial: number) {
        this._numero = numero;
        this._saldo = saldoinicial;
    }
    abstract calcularosaldo(): number;
    abstract sacar(valor: number): void;
    depositar(valor: number): void {
        this._saldo += valor
        const credito = new Credito(valor);
        this._creditos.push(credito);
    }

}