const prompt = require('prompt-sync')();
let valorCred = 0;
let saldoMedio = 0;

saldoMedio = Number(prompt('Informe o saldo médio do último ano: ').replace(',', '.'));

if (saldoMedio <= 200) {
    valorCred = 'R$ 0,00. Não foi liberado nenhum crédito.'
} else if (saldoMedio > 200 && saldoMedio <= 400) {
    valorCred = saldoMedio * 0.20;
} else if (saldoMedio > 400 && saldoMedio <= 600) {
    valorCred = saldoMedio * 0.3;
} else {
    valorCred = saldoMedio * 0.4;
}

const saldoFormatado = saldoMedio.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(`O cliente possui saldo médio do último ano de ${saldoFormatado}.`);

const credFormatado = valorCred.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });
console.log(`O valor de crédito liberado foi de ${credFormatado}.`);
