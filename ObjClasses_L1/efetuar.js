class Efetuar {
    #valor1;
    #valor2;
    #operacao;
    #resultado;
  
    constructor(op = '+', v1 = 1, v2 = 1) {
      this.#valor1 = Number(v1);
      this.#valor2 = Number(v2);
      this.#operacao = op;
      this.#resultado = this.#efetuar();
    }
  
    #setValor1(v1) {
      this.#valor1 = Number(v1);
      this.#resultado = this.#efetuar();
    }
  
    getValor1() {
      return this.#valor1;
    }
  
    #setValor2(v2) {
      this.#valor2 = Number(v2);
      this.#resultado = this.#efetuar();
    }
  
    getValor2() {
      return this.#valor2;
    }
  
    #setOperacao(op) {
      this.#operacao = op;
      this.#resultado = this.#efetuar();
    }
  
    getOperacao() {
      return this.#operacao;
    }
  
    #efetuar() {
      if (this.#operacao === '+') {
        this.#resultado = this.#valor1 + this.#valor2;
      } else if (this.#operacao === '-') {
        this.#resultado = this.#valor1 - this.#valor2;
      } else if (this.#operacao === '*') {
        this.#resultado = this.#valor1 * this.#valor2;
      } else if (this.#operacao === '/') {
        if (this.#valor2 === 0) {
          this.#resultado = `ERRO [divisor não pode ser valor ZERO]`;
        } else {
          this.#resultado = this.#valor1 / this.#valor2;
        }
      }
      return this.#resultado;
    }
  
    somar(v1, v2) {
      this.#setOperacao('+');
      this.#setValor1(v1);
      this.#setValor2(v2);
      return this.#efetuar();
    }
  
    subtrair(v1, v2) {
      this.#setOperacao('-');
      this.#setValor1(v1);
      this.#setValor2(v2);
      return this.#efetuar();
    }
  
    multiplicar(v1, v2) {
      this.#setOperacao('*');
      this.#setValor1(v1);
      this.#setValor2(v2);
      return this.#efetuar();
    }
  
    dividir(v1, v2) {
      this.#setOperacao('/');
      this.#setValor1(v1);
      this.#setValor2(v2);
      return this.#efetuar();
    }
  }
  
  module.exports = Efetuar;
  
