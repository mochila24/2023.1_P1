const Aluno = require('./aluno.js');


const aluno = new Aluno();
const foiMatriculado = aluno.matricular(
  'João',
  'Ciência da Computação',
  2023,
  'Pai do João',
  'Mãe do João',
  true,
  '12345678',
  '12345678901',
  '123456789',
  '987654321',
  'joao@example.com',
  'Rua Principal',
  'Centro',
  'Cidade A'
);

if (foiMatriculado) {
  console.log('Matrícula realizada com sucesso!');
} else {
  console.log('Preencha todos os campos corretamente.');
}

console.log(aluno.buscarMatricula('João'));
console.log(aluno.comprovanteMatricula('1000'));
console.log(aluno.comprovanteMatricula('1001'));

