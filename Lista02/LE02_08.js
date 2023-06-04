const prompt = require('prompt-sync')();

let n = Number(prompt('Coloque um número: '));
let m = Number(prompt('Informe outro número: '));


let p = 1;
let s = 0;
let t = 0;
let cont = 0;
while (cont < n){
    cont += 1;
    s += cont;
    p *= cont;
}
t = s * p;
console.log("O produto de "+ s +" por "+ p +" é " + t);
