
function maiorValor(...valores){
    let maior = -Infinity;

    for (let pos in valores){
        if (maior < valores[pos]) {
            maior = valores[pos];
        }
    }
    return maior
}

let maiorV = maiorValor(-60, -82, 5, -8, 13, -25, -12, 7);
console.log(maiorV);
console.log();
console.log('---------------------------------------------------');
console.log();
function encontrarMaiorValor(...valores) {
    let maiorValor = -Infinity;
  
    for (let valor of valores) {
      if (valor > maiorValor) {
        maiorValor = valor;
      }
    }
  
    return maiorValor;
}

// Exemplo de uso
console.log(encontrarMaiorValor(5, 8, 2, 10, 3)); // Output: 10
console.log(encontrarMaiorValor(1, 0, -3, 7, 4)); // Output: 7
  