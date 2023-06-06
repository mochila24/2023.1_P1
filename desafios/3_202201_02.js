const prompt = require('prompt-sync')();

function calcularMediaFinal(aluno) {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  return media;
}

let alunos = [];

const quantidadeAlunos = Number(prompt('Digite a quantidade de alunos: '));

for (let i = 1; i <= quantidadeAlunos; i++) {
  console.log(`Aluno ${i}:`);
  let nome = prompt('Digite o nome do aluno: ');
  let disciplina = prompt('Digite a disciplina: ');
  let nota1 = Number(prompt('Digite a nota 1: '));
  let nota2 = Number(prompt('Digite a nota 2: '));

  alunos.push({ nome, disciplina, nota1, nota2 });
}

// Calcular a média final de cada aluno e definir a situação parcial
// forEach é usada para percorrer os elementos de um array e executar uma determinada função em cada elemento.
// Ela pode ser usada para executar alguma lógica ou realizar alguma operação em cada elemento, como modificar o elemento, realizar cálculos, exibir informações, etc.
// O método forEach não retorna um novo array, ele apenas itera sobre os elementos existentes no array original.
alunos.forEach(aluno => {
  aluno.mediaFinal = calcularMediaFinal(aluno);
  aluno.situacaoParcial = aluno.mediaFinal >= 6.0 ? 'Aprovado' : 'Em prova final';
});

const aprovados = alunos.filter(aluno => aluno.situacaoParcial === 'Aprovado');
const emProvaFinal = alunos.filter(aluno => aluno.situacaoParcial === 'Em prova final');

const somaMedias = alunos.reduce((total, aluno) => total + aluno.mediaFinal, 0);
const mediaGeral = somaMedias / alunos.length;

console.log('Alunos:');
console.log(alunos);
console.log('Aprovados:');
console.log(aprovados);
console.log('Em prova final:');
console.log(emProvaFinal);
console.log('Média Geral da Turma:', mediaGeral.toFixed(1));
