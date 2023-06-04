const prompt = require('prompt-sync')();

function mediaAritmetica (...valores) {
    let maiorNota = -Infinity;
    let menorNota = Infinity;
    let soma = 0;
    let media = 0;

    for (let valor of valores) {
        if (valor >= maiorNota) {
            maiorNota = valor
        } 
        if (valor <= menorNota) {
            menorNota = valor
        }
    }

    if ( valores.includes(maiorNota)) {
        let indice = valores.indexOf(maiorNota);
        valores.splice(indice, 1);
    }

    if (valores.includes(menorNota)) {
        let indice = valores.indexOf(menorNota);
        valores.splice(indice, 1);
    }

    for (let valor of valores) {
        soma += valor
    }

    media = soma / valores.length

    return media.toFixed(1)

}

console.log('-----------------------------------');
console.log('Calculando média');
console.log()
console.log(mediaAritmetica(10, 10, 10, 10, 10, 1));