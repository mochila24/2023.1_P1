// Importando as classes do arquivo FerramentasEfetuar.js
const { Ferramentas, Efetuar } = require('./efetuar_ferramentas');

// Criando uma instância da classe Efetuar
const calculos = new Efetuar();

// Utilizando os métodos da classe Efetuar para realizar cálculos
console.log(calculos.somar(2, 3)); 
console.log(calculos.multiplicar(4, 5)); 

// Utilizando métodos estáticos da classe Ferramentas
console.log(Ferramentas.quadrado(3)); 
console.log(Ferramentas.cubo(2)); 


