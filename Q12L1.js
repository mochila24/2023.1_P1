const prompt = require('prompt-sync')();

let n1 = 0;
let n2 = 0;
let n3 = 0;
let media = 0;

do {
    n1 = Number(prompt('Informe a 1ª nota: ').replace(',', '.'));
} while( n1 < 0 || n1 > 10);

do {
    n2 = Number(prompt('Valor da segunda nota: ').replace(',', '.'));
} while( n1 < 0 || n1 > 10);

do {
    n3 = Number(prompt('3ª nota: ').replace(',', '.'));
} while( n1 < 0 || n1 > 10);

media = (n1 * 2.5 + n2 * 3.5 + n3 * 4) / 10;

console.log(`Apresentando as notas: ${n1.toFixed(1)}; ${n2.toFixed(1)}; ${n3.toFixed(1)}`);
console.log(`A média desse estudante é ${media.toFixed(1)}`);