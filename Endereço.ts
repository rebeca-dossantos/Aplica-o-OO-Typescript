export class Endereço{
    protected _cep: String;
    protected _logradouro: String;
    protected _numero: String;
    protected _complemento: String;
    protected _cidade: String;
    protected _uf: String;
    constructor(cep: string, logradouro: string, numero: string, complemento: string,cidade: string, uf: string) {
        this._cep=cep;
        this._logradouro=logradouro;
        this._numero=numero;
        this._complemento=complemento;
        this._cidade=cidade;
        this._uf=uf;
    }
}