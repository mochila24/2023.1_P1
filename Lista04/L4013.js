const prompt = require('prompt-sync')();

let valor = Number(prompt('Bote um valor aí: '));

function verificarSinal (numero) {
    if (numero > 0) {
        return 1
    } else if ( numero === 0) {
        return 0
    } else { 
        return -1
    }
}

console.log(verificarSinal(valor));