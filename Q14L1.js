const prompt = require('prompt-sync')();

let l1 = 0;
let l2 = 0;
let l3 = 0;

do {
    l1 = Number(prompt('Lado 01: ').replace(',','.'));
} while(!Number.isInteger(l1));

do {
    l2 = Number(prompt('Lado 02: ').replace(',','.'));
} while(!Number.isInteger(l2));

do {
    l3 = Number(prompt('Lado 03: ').replace(',','.'));
} while(!Number.isInteger(l3));

if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2) {
    if (l1 == l2 && l2 == l3 ) {
        console.log('É um triângulo Equilátero.');
    } else if ( l1 == l2 || l1 == l3 || l2 == l3) {
        console.log('É um triângulo Isósceles.');
    } else {
        console.log('É um triângulo Escaleno.');
    }
} else {
    console.log('Não é um triângulo.');
}
