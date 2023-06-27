/*
const horaEntrada = '10:05:00';
const horaSaida = '11:06:00';



const datAtual = new Date();
const entrada = new Date(datAtual.toDateString() + " " + horaEntrada);
const saida = new Date(datAtual.toDateString() + " " + horaSaida); 



const tempoDecorrido = saida.getTime() - entrada.getTime();

console.log();
console.log(`mostrando: ${tempoDecorrido}`);
//console.log(`mostrando saída: ${saída}`);
console.log();
console.log('************************************************************************');
console.log();

const tempoDecorridoDate = new Date(tempoDecorrido);
const tempoDecorridoString = tempoDecorridoDate.toLocaleTimeString();

console.log(`tempo decorrido: ${tempoDecorridoString}`);
*/

/*
const horaEntrada = '10:05:00';
const horaSaida = '11:06:00';

const datAtual = new Date();
const entrada = new Date(datAtual.toDateString() + " " + horaEntrada);
const saida = new Date(datAtual.toDateString() + " " + horaSaida);

const tempoDecorrido = saida.getTime() - entrada.getTime();

const tempoDecorridoDate = new Date(tempoDecorrido);
const tempoDecorridoString = tempoDecorridoDate.toISOString().substring(11, 19);

console.log(`Tempo decorrido: ${tempoDecorridoString}`);

*/

const Vaga = require('./ObjClasses_L1/vaga.js');

const vaga1 = new Vaga('joão', 'ADS', '12345', 'ABC123', 'ModeloA', 'Azul', '12:05');
vaga1.comprovanteEstacionamento();
console.log();
console.log(vaga1.permanencia());
vaga1.comprovanteEstacionamento();
vaga1.dadosVeiculo();
console.log();
vaga1.dadosProfessor();
console.log('-----testando sem hora para entrada')
const vaga2 = new Vaga ('Elzio', 'Quimica', '20202005', 'ABC-0102', 'Corsa', 'Prata');
console.log('Pedindo comprovante de EStacionamento----------------')
vaga2.comprovanteEstacionamento();


