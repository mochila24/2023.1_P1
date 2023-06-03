prompt = require("prompt-sync")();
// criando os arrays
let lista = []
let nomes = ['JoÃo','Lucas','Breno','Joaquim']
console.log()
console.log('mostrando os arrays');
console.log(lista);
console.log(nomes);
console.log()
console.log('mostrando o tamanho do array');
console.log(nomes.length);
console.log()
console.log('Adicionando o nome "Alberto" na última posição do array');
nomes.push('Alberto');
console.log(nomes);
console.log()
console.log('Adicionando o nome "Beatriz" na primeira posição do array');
nomes.unshift('Beatriz');
console.log(nomes);
console.log()
console.log('Adicionando o nome "Karlos" na posição 3');
nomes[3] = 'Karlos';
console.log(nomes);
console.log()
console.log('Adicionando valores "5" e "20" no array');
lista.push(5);
lista.push(20);
console.log()
console.log('Concatenando valores de arrays em um novo array');
let novoArray = nomes.concat(lista);
console.log(novoArray);

console.log()
console.log('Percorrendo um array');
for (let indice in novoArray) {
console.log(`${indice} => ${novoArray[indice]}`) }
let numeros=[1,5,9,25,90,-12,56,-34,-11];
console.log()
console.log('Array de números');
console.log(numeros);
console.log
console.log('Retirando o último valor do array');
numeros.pop()
console.log(numeros);
console.log()
console.log('Adicionando 3 elementos na posição 3');
numeros.splice(3,0,4,8,7);
console.log(numeros);
console.log()
console.log('removendo 4 elementos da posição 3');
numeros.splice(3,4);
console.log(numeros);
console.log()
console.log('convertendo o array em string');
console.log(numeros.toString());
console.log()
console.log('convertendo o array em string informando o separador desejado ( - )');
console.log(numeros.join(' - '));
console.log()
console.log('gerando um novo array com parte dos valores originais informando a posição inicial e final (anterior ao índice final informado');
let numeros2 = numeros.slice(2,5);
console.log(numeros, numeros2);
