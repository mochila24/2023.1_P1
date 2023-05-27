const prompt = require('prompt-sync')();

let nome = ''
let notas = 0
let media = 0
let situa = ''

nome = prompt('Nome do estudante: ')
for (let c=0; c<4; c++){
    notas += Number(prompt(`Nota ${c + 1}: `))
}

media = notas/4

situa = media >= 6 ? 'Aprovado' : ( media < 4 ? 'Reprovado' : 'Recuperação')

console.log(`${nome} obteve média: ${media.toFixed(2)}. Status: ${situa}.`)