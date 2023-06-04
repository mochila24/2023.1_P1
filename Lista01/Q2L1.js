//importando a biblioteca prompt
// prompt sempre retorna em string, usar parseInt para transformar em inteiro.
const prompt = require('prompt-sync')();
let a = 0;
let b = 0;
let result = 0;

//obtendo valores via teclado
console.clear();
console.log("Obtendo as medidas do retângulo:");
console.log();
a = parseInt(prompt("Lado A: ", a));
b = parseInt(prompt("Lado B: ", b));
result = a * b;
console.log();
console.log("Lado A: ", a);
console.log("Lado B: ", b);
console.log(a, " x ", b, " = ", result);
console.log("O retângulo mede ", a, " x ", b, ", perfazendo uma área de ", result);
