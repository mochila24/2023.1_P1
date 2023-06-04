const prompt = require('prompt-sync')();

const n = Number(prompt('Defina um número: '))

let t1 = 0;
let t2 = 1;
let t3 = t1 + t2;

console.log(`Sequência de Fibonacci:  `);
console.log(t1);

while( t3 < n) {
    console.log(t3);
    t3 = t1 + t2;
    t1 = t2;
    t2 = t3;
}