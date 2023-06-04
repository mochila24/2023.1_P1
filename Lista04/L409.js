const prompt = require('prompt-sync')();

function tabuada (num){
    for ( let i = 1; i <= 10; i++) {
        console.log(`${num} + ${i} = ${num + i}`);
    }
}

let n = Number(prompt('Digite um número para ver a tabuada de soma: '));
tabuada(n);
