const prompt = require('prompt-sync')();
let v1 = 0;
let v2 = 0;
let a = 0;
let b = 0;
let resultado = 0;

v1 = parseInt(prompt("Digite um valor inteiro: ", v1));
v2 = parseInt(prompt("Digite outro valor inteiro: ", v2));

if (v1 > v2) {
    resultado = v1 - v2;
    a = v1;
    b = v2;
} else {
    resultado = v2 - v1;
    a = v2;
    b = v1;
}

console.log(`A diferença entre ${a} e ${b} é de ${resultado}.`);

