const prompt = require('prompt-sync')();

let qtde = Number(prompt('Digite a quantidade de números que deseja na lista (máximo de 100): '))

let lista = [];

while (lista.length < qtde) {
    let numero = Math.floor(Math.random() * 101);
    if (!lista.includes(numero)) {
        lista.push(numero);
    }
}

lista.sort((a, b) => a - b);
console.log(lista);
console.log('====================--------------------------=======================');
console.log();



function verificaPrimos(lista) {
    return lista.map((valor) => {
      if (valor < 2) {
        return `${valor}: Não é primo`;
      }
      for (let i = 2; i < valor; i++) {
        if (valor % i === 0) {
          return `${valor}: Não é primo`;
        }
      }
      return `${valor}: É primo`;
    });
  }

  let resultado = verificaPrimos(lista);

  console.log(resultado);
