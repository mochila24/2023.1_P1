const prompt = require("prompt-sync")();

let nome1 = prompt('Digite um nome: ');
let id1 = Number(prompt(`Qual a idade de ${nome1}? `));

let nome2 = prompt('Digite o nome de uma segunda pessoa fictícia: ');
let id2 = Number(prompt(`Atribua uma idade para ${nome2}: `));

let nome3 = prompt('Escreva o nome para um terceiro personagem fictício: ');
let id3 = Number(prompt(`Qual idade escolhida para o ${nome3}? `))

console.log(`nome: ${nome1} idade: ${id1} nome2: ${nome2} idade2: ${id2} nome3: ${nome3} idade3: ${id3}`);

let pvelha = '';
let pnova = '';

if (id1 > id2 && id1 > id3){
    pvelha = nome1
} else if( id2 > id1 && id2 > id3){
    pvelha = nome2
} else if( id3 > id1 && id3 > id2){
    pvelha = nome3
} else {
    pvelha = 'Existem pessoas com a mesma idade .'
}
console.log(`Pessoa mais velha: ${pvelha}`)

if( id1 < id2 && id1 < id3) {
    pnova = nome1
} else if ( id2< id1 && id2 < id3) {
    pnova = nome2
} else if (id3 < id1 && id3 < id2) {
    pnova = nome3
} else {
    pnova = 'Devido a existencia de idade repetida não foi possível ser conclusivo.'
}
console.log(`Pessoa mais nova: ${pnova}`)