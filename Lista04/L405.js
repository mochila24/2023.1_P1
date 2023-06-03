const prompt = require('prompt-sync')();

function mes () {
    let dataAtual = new Date();
    let mesAtual = dataAtual.getMonth();

    let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return meses[mesAtual];
}


let ok;

do {
    ok = prompt('Digite "S" para saber em que mês estamos: ').trim().charAt(0).toLowerCase();
} while(ok !== 's');

let resultado = mes();

console.log(`Estamos no mês de ${resultado}.`);
