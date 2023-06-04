const prompt = require('prompt-sync')();

let cidade = prompt('Digite o nome da cidade: ');

function dataLocal (municipio) {
    let dataAtual = new Date();
    let diaAtual = dataAtual.getDate();
    let diaSemana = dataAtual.getDay();
    let mesAtual = dataAtual.getMonth();
    let anoAtual = dataAtual.getFullYear();


    let semana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    let mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return `${municipio}, ${semana[diaSemana]}, ${diaAtual} de ${mes[mesAtual]} de ${anoAtual}`


}

console.log(dataLocal(cidade));