
prompt = require("prompt-sync")()
let candidatos = ['Nulo','Branco']
let votos_Absolutos = []
let votos_porcento = []
let candidato
let cadastro = 0
let fulano = 0
let beltrano = 0
let sicrano = 0
let nulo = 0
let branco = 0
let invalido = 0
let voto = 0
let contador = 0
let qtde_candidato = 0
let cont = 0
qtde_candidato = prompt('Quantos candidatos deseja cadastar? ')
for (var i=0; i<qtde_candidato; i++) {
    cont++
    candidato = prompt("Qual o nome do "+cont+"º candidato?")
    candidatos.push(candidato)
}
for (var i=0; i<candidatos.length; i++) {
    console.log(candidatos[i])
}
while (voto != 'a') {
    contador += 1
    console.log()
    console.log('Sistema de Votação')
    console.log()
    console.log('Digite o número refetente a sua opção de voto')
    for (var i=0; i<candidatos.length; i++) {
        console.log('['+i+']'+candidatos[i])
    }
    console.log('[ a ] encerrar votação')
    voto = prompt("Digite seu voto: ")
    switch (voto) {
        case '1':
            fulano ++
            break
        case '2':
            beltrano ++
            break
        case '3':
            sicrano ++
            break
        case '4':
            nulo ++
            break
        case '0':
            branco ++
            break
        case 'a':
            contador --
            break
        default:
            contador --
            invalido ++
            break
    }
}
console.log('Quantidade de votos')
console.log('Fulano: ',fulano,' (',fulano/contador*100,'%)')
console.log('Beltrano: ',beltrano,' (',beltrano/contador*100,'%)')
console.log('Sicrano: ',sicrano,' (',sicrano/contador*100,'%)')
console.log('em Branco: ',branco,' (',branco/contador*100,'%)')
console.log('Nulo: ',nulo,' (',nulo/contador*100,'%)')
console.log('Inválido: ',invalido,' (',invalido/contador*100,'%)')
console.log('Total de votos registrados: ', contador)
