const prompt = require('prompt-sync')();

let resultado = 0;

console.log('Escolha um número para mostrarmos os divisores desse número.')
let num = Number(prompt('Digite o número escolhido: '));

function divisores(n) {
    let div = [];
    for (let cont = 1; cont <= n; cont++) {
        if (n % cont === 0){
            div.push(cont);
        }
    }
    return div
}

resultado = divisores(num);

console.log(`Os divisores de ${num} = [${resultado}]`);