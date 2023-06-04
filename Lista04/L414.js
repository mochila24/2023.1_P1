const prompt = require('prompt-sync')();

function mediaPonderada (notas, pesos) {
    if (notas.length !== pesos.length) {
        return 'quantidade de notas e pesos devem ser iguais!! '
    }

    let somaNotas = 0;
    let somaPesos = 0;

    for (let pos in notas) {
        somaNotas += notas[pos] * pesos[pos];
        somaPesos += pesos[pos];
    }
    const mediaPond = somaNotas / somaPesos;
    return mediaPond;
}

let notas = [];
let pesos = [];
let qtde = 0;

console.log('Calcular Média Ponderada')
console.log();

qtde = Number(prompt('Informe a quantidade de notas que serão digitadas: '));


for (let i = 1; i <= qtde; i++){
    let nota = Number(prompt(`Informe a NOTA ${i}: `));
    notas.push(nota);
    let peso = Number(prompt(`Informe o PESO da nota ${i}: `));
    pesos.push(peso);

}

console.log(mediaPonderada(notas, pesos));
