prompt = require("prompt-sync")()

let nome1 = ''
let id1 = 0
let nome2 = ''
let id2 = 0
let nome3 = ''
let id3 = 0

nome1 = prompt('Bote um nome: ')
id1 = Number(prompt(`Qual a idade de ${nome1}? `))
nome2 = prompt('Nome para uma segunda pessoa fictícia: ')
console.log(`nome: ${nome1} idade: ${id1} nome2: ${nome2}`)