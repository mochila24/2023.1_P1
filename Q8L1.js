const prompt = require('prompt-sync')();

let notas = 0;

const nome = prompt('Nome do estudante: ')
for (let c=0; c<4; c++){
    notas += Number(prompt(`Nota ${c + 1}: `))
}

const media = notas / 4

const situa = media >= 6 ? 'Aprovado' : ( media < 4 ? 'Reprovado' : 'Recuperação')

console.log(`${nome} obteve média: ${media.toFixed(2)}. Status: ${situa}.`)