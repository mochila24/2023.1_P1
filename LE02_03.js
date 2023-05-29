const prompt = require('prompt-sync')();

let soma = 0;
let n;

do {
    n = Number(prompt('Digite um número positivo (Ou negativo para sair): '));

    if (n >= 0){
        soma += n;
    }
} while (n >= 0);

console.log(`A soma dos valores positivo é ${soma}`);