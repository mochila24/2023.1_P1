prompt = require('prompt-sync')();
let v1 = 0
let v2 = 0
let v3 = 0
let maior = 0

v1 = parseInt(prompt("Bote um valor inteiro: ",v1))
v2 =  parseInt(prompt("Outro valor inteiro: ", v2))
v3 = parseInt(prompt("Bote mais um valor inteiro: ",v3))

maior = v1
if (v2 > maior){
    maior = v2
}
if (v3 > maior){
    maior = v3
}
console.log("maior valor apresentado é ",maior)
