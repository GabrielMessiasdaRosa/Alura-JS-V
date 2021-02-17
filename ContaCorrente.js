export class ContaCorrente {
    agenciaBancaria;
    _saldoContaCorrente = 0;

    sacar(valor) {
        if (this._saldoContaCorrente >= valor) {
            this._saldoContaCorrente -= valor;
            return valor;
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this._saldoContaCorrente += valor;
            return valor;

        }
    }
}