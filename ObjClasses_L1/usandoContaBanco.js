const Conta = require('./contaBanco');
const prompt = require('prompt-sync')();

function gerarNum() {
    const min = 100000;
    const max = 999999;

    const numeroConta = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroConta.toString();
}
let banco = 'Banco Sorte';
let agencia = '024';
let nConta = gerarNum();

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-');
console.log('Abertura de Conta');
console.log();
let nome = prompt('Informe o nome do cliente que deseja abrir a conta: ');
let dinheiro = prompt('Informe o valor depositado para abrir a conta: ').replace(',','.');
console.log();
const cliente = new Conta();
console.log('A conta foi aberta com êxito. ');
cliente.Conta(nConta, banco, agencia, nome, dinheiro);
console.log(`nº da Conta: ${cliente._numero}`)
let saque1 = prompt('Informe o valor desejado para SAQUE: ').replace(',','.');
cliente.saque(saque1);
console.log();
let deposito1 = prompt('Informe o valor do DEPÓSITO: ').replace(',','.');
cliente.deposito(deposito1);




