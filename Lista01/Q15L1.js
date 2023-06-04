const prompt = require('prompt-sync')();

console.log('Da equação do 2º grau, extraia os valores de a, b e c:');
let a = Number(prompt('Qual o valor de "a": '))
let b = Number(prompt('Qual o valor de "b": '))
let c = Number(prompt('Qual o valor refetence a "c": '))

let delta = b * b - 4 * a * c

let resultado;
let x1 = 0;
let x2 = 0;

if (delta < 0) {
    resultado = 'A equação não possui raízes reais. Indica que a equação não possui intersseção com o eixo x, ou seja, não possui soluções reais.';
} else if ( delta === 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    resultado = `Equação com uma única solução real. x1 = x2 = ${x1}`
} else {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    resultado = `x1 = ${x1} e x2 = ${x2}`
}

console.log(`${resultado}`);
