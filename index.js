import { Cliente } from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

    const cliente1 = new Cliente();

cliente1.nomeCompleto = 'Gabriel Messias'
cliente1.cpf = "075.604.589-47"
cliente1.rg = "13.858.148-5"


const contaCorrenteGabriel = new ContaCorrente();
contaCorrenteGabriel._saldoContaCorrente;
contaCorrenteGabriel.agenciaBancaria = 1001;


console.log(cliente1);

console.log("Seu saldo é : ", contaCorrenteGabriel._saldoContaCorrente);