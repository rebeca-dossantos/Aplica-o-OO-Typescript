import { Cargo } from "./Cargo";
import { IUsuario } from "./interface";
import { Pessoa } from "./Pessoa";
export class Funcionario extends Pessoa implements IUsuario {
    public salario: number;
    protected cargos: Cargo[] = [];
    constructor(cpf: string, nome: string, telefone: string, salario: number) {
        super(cpf, nome, telefone);
        this.salario = salario;
    }
    adicionarcargo(cargo: Cargo): void {
        this.cargos.push(cargo)
    }
    autenticar(): boolean {
        return true;
    }
}