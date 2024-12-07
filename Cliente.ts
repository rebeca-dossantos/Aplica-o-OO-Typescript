import { Pessoa } from "./Pessoa";
import { IUsuario } from "./interface";
import { Endereço } from "./Endereço";
import { Conta } from "./Conta";
export class Cliente extends Pessoa implements IUsuario {
    public vip: boolean;
    protected _enderecos: Endereço[] = [];
    protected _contas: Conta[];
    constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
        super(cpf, nome, telefone);
        this.vip = vip;
        this._contas = []
    }
    autenticar(): boolean {
        return true;
    }
    adicionarconta(conta: Conta): void {
        this._contas.push(conta);
    }
    adicionarenderecos(endereco: Endereço): void {
        this._enderecos.push(endereco);
    }
    listarEnderecos(): Endereço[] {
        return this._enderecos
    }
}