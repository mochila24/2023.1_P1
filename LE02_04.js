const prompt = require('prompt-sync')();

let nota;
let notas = 0;
let media;
let cont = 1;

do {
    nota = Number(prompt(`Digite a nota do ${cont}º estudante : `).replace(',','.'));
    if (nota !== 99) {
        notas += nota;
        cont++;
    }else {
        cont--;
        if (cont > 0){
            media = notas / cont;
            console.log(`A média dos ${cont} estudantes é ${media.toFixed(1)}`);
        } else {
            console.log('Nenhum estudante informado.');
        }   
    }
} while (nota !== 99);