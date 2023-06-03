const prompt = require('prompt-sync')();

let lista = [];

while (lista.length < 50) {
    let numero = Math.floor(Math.random() * 101);
    if (!lista.includes(numero)) {
        lista.push(numero);
    }
}

lista.sort((a, b) => a - b);

function posicaoNumero( n, l) {
    let posicao = l.indexOf(n);
    if (posicao >= 0) {
        return `o número está na posição:${l.indexOf(n)}`;
    } else {
        return `Não existe o número ${n} na lista`
    }
}


let num;
do {
    num = Number(prompt('Digite um número entre 0 e 100: '))
} while(isNaN(num) || num < 0 || num > 100);

let resultado = posicaoNumero(num, lista);

console.log();
console.log(`Lista: ${[lista]}`);
console.log();
console.log(`${resultado}.`);
