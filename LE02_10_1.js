const prompt = require('prompt-sync')();

let primeiraLetra;
let peso;
let sexo;
let idade;
let altura;
let quantidadePacientes = 0;
let pacienteHomem = 0;
let idadeHomem = 0
let mediaIdadeHomem = 0;
let quantidadeMulheres = 0;
let velho = 0;
let nvelho;
let baixa = 3;
let nbaixa;

console.log('Digite os dados do paciente. Para encerrar digite "Fim" no nome.')

while(true){
    let nome = prompt('Nome do paciente: ').trim();
    let qdeNome = nome.split(' ')
    primeiraLetra = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()

    if (nome.toLowerCase().substring(0, 3) === 'fim'){
        break
    } else if (qdeNome.length > 1){
        primeiraFrase = qdeNome.map(cadaNome => cadaNome.charAt(0).toUpperCase() + cadaNome.slice(1).toLowerCase());
        primeiraLetra = primeiraFrase.join(' ');
    }

    do {
        sexo = prompt('Gênero [M - macho] ou [F - fêmea]: ').trim().toLowerCase().charAt(0);
    } while ( sexo != 'm' && sexo != 'f')

    
    peso = Number(prompt('Peso (em kg): ').trim().replace(',', '.')).toFixed(2);

    do {
        idade = Number(prompt('Idade: '));
    } while (idade > 100 || idade < 0)

    do {
    altura = Number(prompt('Altura (em metros): ').replace(',', '.'))
    } while ( altura > 2.5)

    quantidadePacientes++

    if (sexo === 'm') {
        pacienteHomem++
        idadeHomem += idade
    } else if ( (altura >= 1.6 && altura <= 1.7) && (peso > 70)){
        quantidadeMulheres++
    }

    mediaIdadeHomem = idadeHomem / pacienteHomem

    if (idade > velho){
        velho = idade
        nvelho = primeiraLetra
    }

    if (sexo === 'f' && altura < baixa){
         baixa = altura
         nbaixa = primeiraLetra
    }

}
console.clear();
console.log()
console.log('---------------------------------------------------------------------------------')
console.log()
console.log(`qde de Paciente: ${quantidadePacientes}`);
console.log(`média idade homens: ${mediaIdadeHomem}`);
console.log(`melheres entre 1,60 e 1,70m acima de 70kg: ${quantidadeMulheres}`);
console.log(`+velho: ${nvelho} idade: ${velho}`);
console.log(`mulher baixa: ${nbaixa} altura: ${baixa}`);

