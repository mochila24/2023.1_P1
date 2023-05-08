let numero = 3
let fatorial = 1
let sequencia = 1
console.clear()
console.log("Fatorial de um número")
while(sequencia <= numero){
    fatorial = fatorial * sequencia
    sequencia ++
}
console.log()
console.log(numero,"!: ", fatorial)


//importando a biblioteca prompt
// prompt sempre retorna em string, usar parseInt para transformar em inteiro.
prompt = require('prompt-sync')();
let v1 = 0
let v2 = 0
let soma = 0

//obtendo valores via teclado
console.clear()
console.log("obtendo os valores de v1 e v2")
console.log()
v1 = parseInt(prompt("v1: ",v1))
v2 =  parseInt(prompt("v2: "))
soma = v1 + v2
console.log()
console.log("v1: ",v1)
console.log("v2: ",v2)
console.log(v1," + ",v2," = ",soma)