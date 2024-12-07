"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    constructor(cpf, nome, telefone, salario) {
        super(cpf, nome, telefone);
        this.cargos = [];
        this.salario = salario;
    }
    adicionarcargo(cargo) {
        this.cargos.push(cargo);
    }
    autenticar() {
        return true;
    }
}
exports.Funcionario = Funcionario;
