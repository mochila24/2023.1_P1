const prompt = require('prompt-sync')();

var ano;
var mes;
var meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
var nuMes = 0;
var mesNasc = 0
var mesSemEspacos;
var dia = 0


const dataAtual = new Date();
const diaAtual = dataAtual.getDate();
const mesAtual = dataAtual.getMonth();
const anoAtual = dataAtual.getFullYear();
let ultimoDiaMes = 0;

let nome = prompt('Nome: ');

do {
    ano = Number(prompt('ANO de nascimento: '));
    if (isNaN(ano) || ano > anoAtual) {
        console.log('Ano inválido. Por favor digite um ano válido.')
    }
} while(isNaN(ano) || ano > anoAtual);


do {
    mes = prompt('MÊS de nascimento: ');
    mesSemEspacos = mes.trim();

    if (!isNaN(mesSemEspacos)) {
        nuMes = Number(mesSemEspacos);
        if (nuMes < 1 || nuMes > 12) {
            console.log('Mês inválido. Digite um mês válido.')
        } else {
            mesNasc = nuMes - 1;
        }
       
    } else {
        nuMes = mesSemEspacos.substring(0, 3).toUpperCase();
        if (!meses.includes(nuMes)) {
            console.log('Mês inválido. Por favor, digite um mês válido. Tente representar por número.')
        } else {
            mesNasc = meses.indexOf(nuMes);
        }
    }

} while(!isNaN(mesSemEspacos) && (nuMes < 1 || nuMes > 12) || isNaN(mesSemEspacos) && !meses.includes(mesSemEspacos.substring(0, 3).toUpperCase()))


do {
    dia = Number(prompt('DIA de nascimento: '));
    ultimoDiaMes = new Date(anoAtual, mesNasc + 1, 0).getDate();
    if (isNaN(dia) || dia < 1 || dia > ultimoDiaMes) {
        console.log('Dia inválido. Digite um dia válido para o mês informado.')
    }

} while( isNaN(dia) || dia < 1 || dia > ultimoDiaMes);

let idade = anoAtual - ano;
if (mesAtual < mesNasc || (mesAtual == mesNasc && diaAtual < dia)) {
    idade--;
}


console.log(`${nome}, ${ano}, ${nuMes} ${typeof nuMes} mesNasc: ${mesNasc}, ${dia}, ${idade}`)

