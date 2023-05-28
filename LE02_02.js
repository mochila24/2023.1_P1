const prompt = require('prompt-sync')();

let n = 50;
let soma = 0;

n = Number(prompt('Digite um valor maior que 1: '));
console.log();
if (n > 1){
    for (let c = 1; c <= n; c++) {
        console.log(c);
        soma += c;
    }
    console.log();
    console.log("Soma dos números entre 1 e " + n + ": ");
    console.log("Soma: ",soma);
}
else{
    console.log("O valor de n não é válido!!!");
}