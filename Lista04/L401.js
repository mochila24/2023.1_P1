const prompt = require('prompt-sync')();

let delta = 0;
let naturezaDaRaiz;

console.log('A partir da expressão ax² + bx + c = 0, identifique os valores de: ');
let a = Number(prompt('a = '));
let b = Number(prompt('b = '));
let c = Number(prompt('c = '));
let resultado = 0;

console.clear();

function calcularDelta(a, b, c){
    delta = (b * b) - (4 * a * c);
    return delta
}

resultado = calcularDelta(a, b, c);
if (resultado > 0) {
    naturezaDaRaiz = 'A equação possui duas raízes reais distintas.';
} else if (resultado === 0) {
    naturezaDaRaiz = 'A equação possui duas raízes reais e iguais.';
} else {
    naturezaDaRaiz = 'A equação não possui raízes reais.';
}

console.log(`valor de Delta: ${resultado}. ${naturezaDaRaiz}`);
