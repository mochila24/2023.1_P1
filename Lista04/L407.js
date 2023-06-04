const prompt = require('prompt-sync')();

function ordemNome(nomeCompleto) {
    separado = nomeCompleto.trim().split(' ');
    if (separado.length === 1) {
        let nomePrimeiro = separado[0].charAt(0).toUpperCase() + separado[0].slice(1).toLowerCase();
        return nomePrimeiro;
    }
    return `${separado[separado.length - 1]}, ${separado[0]}.`;
}

const nome = prompt('Digite o nome completo: ');

console.log(`${ordemNome(nome)}`);