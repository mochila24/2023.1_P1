let n = 50
let contador = 1
let soma = 0
console.log("Soma dos números entre 1 e ",n)
console.log()
if (n > 1){
    while (contador <= n){
        soma += contador
        contador += 1
    }
    console.log()
    console.log("Soma: ",soma)
}
else{
    console.log("O valor de n não é válido!!!")
}