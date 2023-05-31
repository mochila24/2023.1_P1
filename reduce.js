// notas da turma

const notasTurma = [6.5,8.6,3.4,8.4,2.9,6.5,3.8,7.9,10.0,5.0,6.4,2.0,0.0,9.6,10.0,6.0,8.4,3.5,1.0,4.5];
const quantidadeNotas = notasTurma.length
let mediaTurma = 0.0;

// função de redução
const totalPontos = (soma, notaAtual) => soma += notaAtual

pontuacaoTotal = notasTurma.reduce(totalPontos)

console.log(`Pontuação total da turma: ${Number(pontuacaoTotal).toFixed(1)}`);
mediaTurma = (pontuacaoTotal / quantidadeNotas);
console.log(`Média da turma: ${mediaTurma.toFixed(1)}`);
