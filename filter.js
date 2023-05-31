/*
let numeros = [9, -20, 8, 12, -3, 0, 7, 10, -5, 23, -4];

const filtrarPositivos = valor => valor > 0;

let numerosPositivos = numeros.filter(filtrarPositivos)

console.log()
console.log('Array original')
console.log(numeros)

console.log()
console.log('Array de números positivos')
console.log(numerosPositivos)
*/

//busca por pessoas com o primeiro nome igual

let pessoas = ['Marcus Altino', 'Marieta Josefa', 'Brina Souza', 'Altamiro Carrilho', 'Marcus de Jesus', 'Matheus Brito', 'Josué Marcus', "Vanessa D'Avila", 'Nicete Bruno', 'Melquiades de Abreu', 'Moisé Victório']

const filtrarNome = nome => nome.includes('Marcus');

let nomesValidos = pessoas.filter(filtrarNome)
// ou let nomesValidos = pessoas.filter(nome => nome.includes('Marcus'));

console.log()
console.log('Nomes informados')
console.log(pessoas)


console.log()
console.log('Nomes encontrados')
console.log(nomesValidos);