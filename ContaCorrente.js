import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //atributos publicos

    static numeroDeContas = 0;
    _agenciaBancaria;
    cidade = "Curitiba";
    cliente;
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
            return;
        }
        else {
            return;
        }

    }
    get cliente() {
        return this._cliente;
    }

    // atributos privados
    _saldoContaCorrente = 0;

    get saldo() {
        return this._saldoContaCorrente;
    }

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

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    constructor(agencia,cliente) {
        this._agenciaBancaria = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
        return cliente,agencia;
    }
}