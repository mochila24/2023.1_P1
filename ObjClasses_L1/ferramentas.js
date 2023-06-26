class Ferramentas {

    constructor() {
      
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

//numero = new Ferramentas();



