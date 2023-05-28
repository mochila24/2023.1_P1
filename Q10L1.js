const prompt = require('prompt-sync')();

let cusfab;
const dist = 0.28
const imp = 0.45
let cuscon;

cusfab = Number(prompt('Informe o custo de fábrica do carro: '))
cuscon = (cusfab * dist) + (cusfab * imp) + cusfab

console.log(`O valor de venda do carro é de R$${cuscon.toFixed(2)}.`)
