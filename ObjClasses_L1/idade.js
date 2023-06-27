const prompt = require('prompt-sync')();

class Idade {
  #anoAtual;
  #anoNascimento;
  #idade;

  constructor(nascimento) {
    this.#anoAtual = new Date().getFullYear();
    this.#anoNascimento = nascimento;
    this.#idade = this.#anoAtual - this.#anoNascimento;
  }

  setAnoAtual(atual) {
    if (atual <= this.#anoNascimento) {
      console.log('[ERRO] Ano atual está anterior à data de nascimento.');
    } else {
      this.#anoAtual = atual;
      this.#idade = this.#anoAtual - this.#anoNascimento;
    }
  }

  setAnoNascimento(nascido) {
    if (nascido > this.#anoAtual) {
      console.log('[ERRO] Ano informado é maior do que o registro do ano atual. Informação não atualizada.');
    } else {
      this.#anoNascimento = nascido;
      this.#idade = this.#anoAtual - this.#anoNascimento;
    }
  }

  calcularIdade() {
    return this.#idade;
  }
}

const anoQueNasceu = parseInt(prompt('Informe o ano de nascimento: '));
const idade = new Idade(anoQueNasceu);
console.log(idade.calcularIdade());


class IdadeSemParametro extends Idade {
    constructor() {
        super();
    }

}

const pessoa = new Idade(anoQueNasceu);
console.log(pessoa.calcularIdade());
console.log();
pessoa.setAnoAtual(2050);
console.log(pessoa.calcularIdade());
console.log();
pessoa.setAnoNascimento(2000);
console.log(pessoa.calcularIdade());
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
console.log()
console.log('Testando idade sem parametro')
let alguem = new IdadeSemParametro();
console.log(typeof alguem);
alguem.setAnoNascimento(2020);
console.log(alguem.calcularIdade());
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
console.log()
ninguem = new Idade();
console.log(typeof ninguem);
