const prompt = require('prompt-sync')();

let n = Number(prompt('Digite um número inteiro não negativo: '));
let cont = 0;
let fat = 1;

if (Number.isInteger(n) && n >= 0) {
    if (n === 0) {
        fat = 1;
    } else {
        for (let i = 1; i <= n; i++) {
            fat *= i;
        }
    }
    console.log(`O fatorial de ${n} é ${fat}.`);
} else {
    console.log('Entrada inválida. Digite um número inteiro não negativo.');
}
