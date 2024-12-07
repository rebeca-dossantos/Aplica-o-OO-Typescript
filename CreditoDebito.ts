export class Credito {
    constructor(
        protected _valor: number,
        protected _data: Date = new Date()
    ) { }
    public getvalor(): number {
        return this._valor
    }
}

export class Debito {
    constructor(
        protected _valor: number,
        protected _data: Date = new Date()
    ) { }
    public getvalor(): number {
        return this._valor
    }
}