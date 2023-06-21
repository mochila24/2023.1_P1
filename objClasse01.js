const prompt = require('prompt-sync')();


class Idade {
    constructor(anoNascimento) {
      this._anoNascimento = anoNascimento;
      this._anoAtual = new Date().getFullYear();
      this._idade = this._anoAtual - this._anoNascimento;
    }
  
    setAnoAtual(ano) {
      this._anoAtual = ano;
      this._idade = this._anoAtual - this._anoNascimento;
    }
  
    setAnoNascimento(ano) {
      this._anoNascimento = ano;
      this._idade = this._anoAtual - this._anoNascimento;
    }
  
    calcularIdade() {
      return this._idade;
    }
  }
  
