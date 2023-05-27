//importando a biblioteca prompt
// prompt sempre retorna em string, usar parseInt para transformar em inteiro.
const prompt = require('prompt-sync')();
let c = 0;
let f = 0;

// Obtendo valores via teclado
console.clear();
console.log("Obtendo o valor da temperatura em Fahrenheit");
console.log();
f = parseInt(prompt("F: "));
c = (f - 32) / 1.8;
console.log();
console.log("Convertendo em Celsius temos:", c, "º");
