const prompt = require('prompt-sync')();

let n = Number(prompt('Digite o valor de N: '));
let f = 1;
let cont = 0;
let ln = 0;

while (cont < n) {
    cont += 1;
    f *= cont;
    ln += 1 / f;
    console.log("Fatorial: ", f);
    console.log("LN: ", ln);
}

console.log("Fatorial: ", f);
console.log("Logaritmo neperiano de ", n, " é ", 1 + ln);
