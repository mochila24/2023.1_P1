const Efetuar = require('./efetuar');

class Ferramentas extends Efetuar {

    constructor() {
        super();
    }
    static quadrado (valor) {
        /*this.valor1 = valor;
        return this.valor1 * this.valor1;
        */
       return valor * valor
    }
    static cubo (valor) {
        return valor * valor * valor
    }
    static portencia (base, expoente) {
        this.valor1 = base;
        this.valor2 = expoente;
        let resultado = Math.pow(this.valor1, this.valor2);
        return resultado;

        //return base ** expoente
    }
    static fatorial (valor) {
        let fat = 1
        for (let i = valor; i > 0; i--) {
            fat *= i
        }
        return fat
    }
    static par (valor) {
        if (valor % 2 === 0) {
            return true
        } else {
            return false
        }
    }
    static primo (valor) {
        if (valor < 2) {
            return false
        } else {
            for (let i = 2 ; i < valor ; i++) {
                if (valor % i === 0) {
                    return false
                }
            }
        }
        return true
    }

    static maior (lista) {
       let maiorValor = Math.max(...lista);
       return maiorValor
    }

    static menor (lista) {
        let menorValor = Math.min(...lista) 
        return menorValor
    }
}

let resultadoqqr = new Efetuar('*', 10 , 4);
console.log(resultadoqqr._resultado);
console.log(resultadoqqr.calcular('/', 90, 3));
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
console.log(resultadoqqr._resultado);
console.log('""""""""""""""""""""""""""""""""""""""""""""""""""""""""""')
console.log('valor 2 = 10 digitado');
resultadoqqr.setValor2(10);
console.log(resultadoqqr._resultado);
console.log()
console.log('Metodo calcular sem valor adicionado: ')
console.log(resultadoqqr.calcular());
console.log('------------------------')
console.log(`30 + 6 = ${resultadoqqr.somar(30, 6)}`);
console.log()
console.log(`subtraindo 100 - 6 = ${resultadoqqr.subtrair(100,6)}`)
console.log()
console.log(`multiplicação: 5 x 10: ${resultadoqqr.multiplicar(5,10)}`);
console.log()
console.log(` 500 / 25: ${resultadoqqr.dividir(500,25)}`);
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
console.log();
console.log('Testando os módulos de ferramentas deste aquivo: ')
console.log();
console.log(Ferramentas.quadrado(4));
console.log(`o cubo de 3 é ${Ferramentas.cubo(3)}`);
console.log(`8 elevado a 2 é ${Ferramentas.portencia(8, 2)}`);
console.log(`fatorial de 5 é ${Ferramentas.fatorial(5)}`);
console.log(`o número 256 é par? ${Ferramentas.par(256)}`);
console.log(`547 é par? ${Ferramentas.par(547)}`);
console.log(`101 é primo? ${Ferramentas.primo(101)}`);
console.log(`o número 3 é primo? ${Ferramentas.primo(3)}`);
console.log(`o número 105 é primo? ${Ferramentas.primo(105)}`);
console.log(`o número 2 é primo? ${Ferramentas.primo(2)}`);
console.log(`e o numeral 1 é primo? ${Ferramentas.primo(1)}`);
sequencia = [-50, 1, 24, 12, 5, 20, 18]
console.log(`o maior número da lista é ${Ferramentas.maior(sequencia)}`);
console.log(`e o menor número é ${Ferramentas.menor(sequencia)}`);