//importação
import { Cargo } from "./Cargo";
import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupança } from "./ContaPoupança";
import { Endereço } from "./Endereço";
import { Funcionario } from "./Funcionario";

//Aplicação dos objetos

//Crie dois funcionários do banco, um gerente e um atendente.
const gerente= new Cargo("gerente");
const atendente= new Cargo("atendente");

const Joao= new Funcionario("54387432354","João","8365791032",2000);
const Marcos=new Funcionario("30541267082", "Marcos","1154238788",5000);

Joao.adicionarcargo(atendente);
Marcos.adicionarcargo(gerente);

//1- Crie um cliente e adicione 3 endereços a ele. 2-Imprima os endereços deste cliente.
const Paulo= new Cliente("54377856249", "Paulo","2186453725", true);
Paulo.adicionarenderecos(new Endereço("37856490340","43527843","Rodovia dos Imigrantes","765","São Paulo","SP"))
Paulo.adicionarenderecos(new Endereço("45376245344","74953785","Rua Oscar Freire","876","São Paulo","SP"))
Paulo.adicionarenderecos(new Endereço("78653086543","87437234","Rua Paissandu","674","Rio de Janeiro","RJ"))
console.log(Paulo.listarEnderecos());

//1- Crie um cliente que possua uma ContaCorrente. 2-Efetue três depósitos de 100 nessa ContaCorrente. 3-Efetue um saque de 50 reais nessa ContaCorrente. 4-Imprima o valor do saldo dessa ContaCorrente
const Mateus= new Cliente("31453267543", "Mateus", "8276453823", false);
const CCMATEUS = new ContaCorrente("396710",2000,0);
Mateus.adicionarconta(CCMATEUS);
[100,100,100].forEach(valor => {CCMATEUS.depositar(valor)});
CCMATEUS.sacar(50);
console.log(CCMATEUS.calcularosaldo());

//1-Crie um cliente que possua uma ContaCorrente. 2-Efetue um depósito de 1000 nessa ContaCorrente. 3-Crie um cliente que possua uma ContaPoupanca. 4-Efetue um depósito de 1000 reais nesta ContaPoupanca. 5-Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca. 6-Exiba o saldo das duas contas.
const Otavio= new Cliente("42315734524", "Otávio", "9564834264", true);
const CCOTAVIO= new ContaCorrente("537895", 50000,0);
Otavio.adicionarconta(CCOTAVIO);
CCOTAVIO.depositar(1000);
const Mario= new Cliente("02546735442", "Mario", "3374658970", false);
const CPMARIO= new ContaPoupança("654398", 32000);
Mario.adicionarconta(CPMARIO);
CPMARIO.depositar(1000);
CCOTAVIO.transferir(500,CPMARIO);
console.log("Saldo de Octávio:",CCOTAVIO.calcularosaldo(), "Saldo de Mario:",CPMARIO.calcularosaldo());

//1-Crie um cliente que possua uma ContaCorrente. 2-fetue um depósito de 300 nessa ContaCorrente. 3-Defina o valor do limite da ContaCorrete para 100 reais. 4-Crie um cliente que possua uma ContaPoupança. 5-Efetue um depósito de 100 reais nesta ContaPoupança. 6-Tente efetuar uma transferência de 1000 reais da primeira ContaCorrente para a segunda ContaPoupanca.
const Antonio = new Cliente("52754835598", "Antônio", "6154327659", true);
const CCANTONIO= new ContaCorrente("76498", 20,100);
Antonio.adicionarconta(CCANTONIO);
CCANTONIO.depositar(300);
const Rafael = new Cliente("31874523125", "Rafael", "6345763245", true);
const CPRAFAEL= new ContaPoupança("345325",300);
Rafael.adicionarconta(CPRAFAEL);
CPRAFAEL.depositar(100);
CCANTONIO.transferir(1000,CPRAFAEL);



