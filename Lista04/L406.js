const prompt = require('prompt-sync')();

function mediaValores (...valores) {
    if ( valores.length === 0) {
        return 0;
    }

    let soma = 0;

    for (let pos in valores) {
        soma += valores[pos]
    }

    let media = soma / valores.length;

    return media;
}

const resultado = mediaValores(2, 4, 6, 8, 10);
console.log(`A média dos valores é ${resultado}`);

