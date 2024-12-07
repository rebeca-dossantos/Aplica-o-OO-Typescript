import { Conta } from "./Conta";
import { Credito, Debito } from "./CreditoDebito";
export class ContaPoupança extends Conta {
    constructor(numero: string, saldoinicial: number){
        super(numero, saldoinicial);
    }
    sacar(valor:number):void{
        if (valor<=this._saldo){
            this._saldo-=valor;
            const debito= new Debito(valor);
            this._debitos.push(debito);
            console.log('Saldo realizado com sucesso')}
        else {
            console.log('Operação falhou. Saldo insuficiente')
        }
    }
    calcularosaldo():number{
        const somacreditos=this._creditos.reduce((acc, credito)=> acc+credito.getvalor(), 0);
        const somadebitos=this._debitos.reduce((acc, debito)=> acc+debito.getvalor(), 0);
        return somacreditos - somadebitos}
    }