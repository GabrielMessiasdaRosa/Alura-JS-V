//
import { Cliente } from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
//

//
const cliente1 = new Cliente('Gabriel Messias', "075.604.581-47", "13.858.148-5" );

const cliente2 = new Cliente("Joao das Neves","852.852.852-02", "55.555.555-6");
//

//
const contaCorrenteGabriel = new ContaCorrente(1001, cliente1);

const contaCorrenteJoao = new ContaCorrente(1002, cliente2);

//

//

contaCorrenteGabriel.depositar(180);
contaCorrenteGabriel.transferir(75, contaCorrenteJoao);
contaCorrenteGabriel.depositar(1027.12);
//

//
console.log(contaCorrenteGabriel);
console.log("Ola", cliente1.nomeCompleto, "\nSeu saldo é : ", contaCorrenteGabriel.saldo);
console.log("____________________________________________\n")
console.log(contaCorrenteJoao);
console.log("Ola", cliente2.nomeCompleto, "\nSeu saldo é : ", contaCorrenteJoao.saldo,"\n");
console.log(ContaCorrente.numeroDeContas)