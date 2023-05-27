const prompt = require("prompt-sync")();

let n1 = 0
let n2 = 0
let result = 0

console.log('------------Calculadora----------------')
console.log('--------                       --------')
n1 = Number(prompt('Informe um número: '))
n2 = Number(prompt('Coloque outro número: '))
console.log('-----Informe a operação que deseja realizar-------')
console.log('--[+] soma --------')
console.log('--[-] subtração----')
console.log('--[*] multiplicação')
console.log('--[/] divisão------')
result = prompt('digite o simbolo correspondente: ')
switch (result){
    case '+': 
    result = n1 + n2
    break

    case '-':
        if (n1 >= n2) {
            result = n1 - n2
        } else {
            result = n2 - n1
        }
        break

    case '*':
        result = n1 * n2
        break

    case '/':
        if (n2 == 0) {
            result = 'Não é possível realizar divisão por ZERO'
        } else {
            result = n1 / n2
        }
        break

    default:
        result = 'Não foi identificado a operação. Reveja os valores e digite novamente.'

}

console.log(`Resultado: ${result.toFixed(2)}`)
