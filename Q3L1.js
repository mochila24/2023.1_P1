//importando a biblioteca prompt
// prompt sempre retorna em string, usar parseInt para transformar em inteiro.
prompt = require('prompt-sync')();
let c = 0
let f = 0


//obtendo valores via teclado
console.clear()
console.log("obtendo o valor da temperatura em Farenheit")
console.log()
v1 = parseInt(prompt("F: ",f))

c = (f - 32) /1.8
console.log()
console.log("Convertendo em Celsius temos: ",c,"º")