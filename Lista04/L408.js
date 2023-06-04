const prompt = require('prompt-sync')();

function fibonacci(qtde) {
    t1 = 0;
    t2 = 1;
    let lista = [0, 1];
    for (let i = 2; i < qtde; i++){
        t3 = t1 + t2;
        lista.push(t3);
        t1 = t2;
        t2 = t3;
    }
    return lista
}

let quantidade = Number(prompt('Quantos números você quer? '));
console.log(fibonacci(quantidade));