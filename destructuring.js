/*

//exemplo sobre destructuring
// definindo um objeto

const pessoa = {
    nome: 'Luís Mário Silva',
    idade: 48
}

//definindo um array
const notas = [8.9, 10.0, 7.5, 9.5];


//destructuring
let {nome, idade} = pessoa

let[preNome, nomeDoMeio, sobrenome] = nome.split(' ') // transformando uma string em array usando o ' ' como separador

let[n1, n2, n3, n4] = notas

//resultado
console.log(`Aluno: ${nome} (${sobrenome.toUpperCase()}, ${preNome} ${nomeDoMeio})`);
console.log(`Idade.: ${idade} anos`);
console.log(`Nota 1: ${Number(n1).toFixed(1)}`);
console.log(`Nota 2: ${Number(n2).toFixed(1)}`);
console.log(`Nota 3: ${Number(n3).toFixed(1)}`);
console.log(`Nota 4: ${Number(n4).toFixed(1)}`);

//mostarando as estruturas iniciais inalteradas
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-');
console.log();
console.log(pessoa);
console.log(notas);
console.log();

*/

let opcoes = {
    tamanho: 200,
    altura: 100,
    nome: 'retângulo'
}

/* quando se trata de um objeto, se as chaves forem iguais aos nomes das variáveis
que receberão os valores desse objeto, os valores serão atribuídos às 
variáveis homônimas aos atributos do objeto, independente da posição.
*/
/*
//teste 01:
let {altura = h, tamanho = t, nome = n} = opcoes;
console.log(opcoes);
console.log();
console.log(`Altura: ${altura}\nTamanho: ${tamanho}\nNome: ${nome}`);
*/

//teste 02:
let {altura, tamanho, nome} = opcoes;
console.log(opcoes);
console.log();
console.log(`Altura: ${altura}\nTamanho: ${tamanho}\nNome: ${nome}`);
