const { Ferramentas, Efetuar } = require('./efetuar_ferramentas'); // Importando as classes do arquivo FerramentasEfetuar.js

const calculos = new Efetuar();

console.log(calculos.somar(2, 3)); 
console.log(calculos.multiplicar(4, 5)); 

console.log(Ferramentas.quadrado(3)); 
console.log(Ferramentas.cubo(2)); 
