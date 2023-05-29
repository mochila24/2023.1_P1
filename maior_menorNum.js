const prompt = require('prompt-sync')();

let numero;
let maior = Number.NEGATIVE_INFINITY; // Inicializa com o menor valor possível
let menor = Number.POSITIVE_INFINITY; // Inicializa com o maior valor possível

do {
    numero = Number(prompt('Digite um número (0 para sair): '));

    if (numero !== 0) {
        if (numero > maior) {
            maior = numero;
        }
        if (numero < menor) {
            menor = numero;
        }
    }
} while (numero !== 0);

console.log(`Maior número: ${maior}`);
console.log(`Menor número: ${menor}`);
