const prompt = require('prompt-sync')();

function semana (n) {
    let diaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira','sábado'];

    if (isNaN(n) || n < 0) {
        return 'Tem que ser um NÚMERO e não pode ser negativo.'
    }

    let indice = n % diaSemana.length;
    return diaSemana[indice];
}

let num = Number(prompt('Digite um número: '))

let resultado = semana(num);

console.log(resultado);
