const prompt = require('prompt-sync')();

// Função para calcular a média final de um aluno
function calcularMediaFinal(aluno) {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  return media.toFixed(1); // Arredonda a média para uma casa decimal
}

// Array para armazenar os alunos
let alunos = [];

// Solicitar a quantidade de alunos
const quantidadeAlunos = Number(prompt('Digite a quantidade de alunos: '));

// Solicitar os dados de cada aluno
for (let i = 1; i <= quantidadeAlunos; i++) {
  console.log(`Aluno ${i}:`);
  let nome = prompt('Digite o nome do aluno: ');
  let disciplina = prompt('Digite a disciplina: ');
  let nota1 = Number(prompt('Digite a nota 1: '));
  let nota2 = Number(prompt('Digite a nota 2: '));

  // Adicionar o aluno ao array de alunos
  alunos.push({ nome, disciplina, nota1, nota2 });
}

// Calcular a média final de cada aluno e definir a situação parcial
alunos.forEach(aluno => {
  aluno.mediaFinal = calcularMediaFinal(aluno);
  aluno.situacaoParcial = aluno.mediaFinal >= 6.0 ? 'Aprovado' : 'Em prova final';
});

// Filtrar os alunos aprovados e em prova final
const aprovados = alunos.filter(aluno => aluno.situacaoParcial === 'Aprovado');
const emProvaFinal = alunos.filter(aluno => aluno.situacaoParcial === 'Em prova final');

// Calcular a média geral da turma
const mediaGeral = alunos.reduce((total, aluno) => total + aluno.mediaFinal, 0) / alunos.length;

// Exibir os resultados
console.log('Alunos:');
console.log(alunos);
console.log('Aprovados:');
console.log(aprovados);
console.log('Em prova final:');
console.log(emProvaFinal);
console.log('Média Geral da Turma:', mediaGeral.toFixed(1));
