class cliente {
    nomeCompleto;
    cpf;
    rg
    conta;
}
class contaCorrente {
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

    const cliente1 = new cliente();

    cliente1.nomeCompleto = 'Gabriel Messias'
    cliente1.cpf = "075.604.589-47"
    cliente1.rg = "13.858.148-5"


    const contaCorrenteGabriel = new contaCorrente();
    contaCorrenteGabriel._saldoContaCorrente;
    contaCorrenteGabriel.agenciaBancaria = 1001;


    console.log(cliente1);

    console.log("Seu saldo é : ", contaCorrenteGabriel._saldoContaCorrente);