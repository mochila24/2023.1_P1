const prompt = require('prompt-sync')();

let n = 'a'
let maior = n;
let menor = n;
let cont = 0;

while (n !== 0) {

    n = Number(prompt('Informe um valor qualquer: '));

    if (cont == 0) {
        maior = n;
        menor = n;
    } else if ( n == 0) {
        break
    }else if (n >= maior) {
        maior = n;
    } else {
        menor = n;
    }

    cont ++
}

console.log(`O MAIOR valor digitado foi ${maior}`);
console.log(`O menor valor digitado foi ${menor}`);