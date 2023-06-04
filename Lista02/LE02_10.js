const prompt = require('prompt-sync')();

let quantidadePacientes = 0;
let somaIdadeHomens = 0;
let quantidadeMulheresAlturaPeso = 0;
let quantidadePessoasIdade = 0;
let pacienteMaisVelho = '';
let mulherMaisBaixa = '';
let idadeMaisVelho = 0;
let alturaMulherMaisBaixa = Infinity;

console.log('Digite os dados dos pacientes. Para encerrar, digite "fim" no nome do paciente.');

while (true) {
  let nome = prompt('Nome do paciente: ');
  
  if (nome.toLowerCase() === 'fim') {
    break;
  }
  
  let sexo = prompt('Sexo (M/F): ');
  let peso = Number(prompt('Peso (em kg): '));
  let idade = Number(prompt('Idade: '));
  let altura = Number(prompt('Altura (em metros): '));
  
  quantidadePacientes++;
  
  if (sexo.toLowerCase() === 'm') {
    somaIdadeHomens += idade;
  }
  
  if (sexo.toLowerCase() === 'f' && altura >= 1.60 && altura <= 1.70 && peso > 70) {
    quantidadeMulheresAlturaPeso++;
  }
  
  if (idade >= 18 && idade <= 25) {
    quantidadePessoasIdade++;
  }
  
  if (idade > idadeMaisVelho) {
    idadeMaisVelho = idade;
    pacienteMaisVelho = nome;
  }
  
  if (sexo.toLowerCase() === 'f' && altura < alturaMulherMaisBaixa) {
    alturaMulherMaisBaixa = altura;
    mulherMaisBaixa = nome;
  }
}

let mediaIdadeHomens = somaIdadeHomens / quantidadePacientes;

console.log('Relatório:');
console.log('Quantidade de pacientes:', quantidadePacientes);
console.log('Média de idade dos homens:', mediaIdadeHomens);
console.log('Quantidade de mulheres com altura entre 1,60 e 1,70 e peso acima de 70kg:', quantidadeMulheresAlturaPeso);
console.log('Quantidade de pessoas com idade entre 18 e 25:', quantidadePessoasIdade);
console.log('Nome do paciente mais velho:', pacienteMaisVelho);
console.log('Nome da mulher mais baixa:', mulherMaisBaixa);
