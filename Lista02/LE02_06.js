let x = 20
let contador = 1
let soma = 0
while (contador <= x){
    soma += 1/contador
    contador += 1
}
console.log("Soma: ",soma)


//professor//
let h = 0
let n = 20
let den = 1
console.log("cálculo de H")
while (den <= n){
    h = h + (1/den)
    den += 1
}
console.log("N: ",n)
console.log("H: ",h.toFixed(2)) //toFixed para determinar o número de casas decimais//