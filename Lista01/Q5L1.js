const prompt = require('prompt-sync')();

const numValores = 3; // Número de valores a serem inseridos
let maior = 0;

for (let i = 1; i <= numValores; i++) {
    const valor = parseInt(prompt(`Digite o valor ${i}: `));

    if (valor > maior) {
        maior = valor;
    }
}

console.log("O maior valor inserido é", maior);
