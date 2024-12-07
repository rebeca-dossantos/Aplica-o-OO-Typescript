export abstract class Pessoa{
    protected _cpf : String;
    protected _nome: String;
    protected _telefone: String;

    constructor(cpf: string, nome: string, telefone: string){
        this._cpf=cpf;
        this._nome=nome;
        this._telefone=telefone;
    }
    public get telefone(): String {
        return this._telefone;
    }
    public set telefone(valor: String) {
        this._telefone = valor;
    }
}