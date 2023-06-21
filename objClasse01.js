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

  
/*

usado para usar apenas dois digitos para indicar o ano


  class Idade {
    constructor(anoNascimento) {
      this._anoNascimento = anoNascimento;
      this._anoAtual = new Date().getFullYear();
      this._idade = this._anoAtual - this._anoNascimento;
    }
  
    setAnoAtual(ano) {
      if (ano >= 0 && ano <= 99) {
        const anoAtualCompleto = new Date().getFullYear();
        const seculoAtual = Math.floor(anoAtualCompleto / 100) * 100; // Obtém o século atual
        this._anoAtual = seculoAtual + ano;
        this._idade = this._anoAtual - this._anoNascimento;
      } else {
        console.log("Ano inválido!");
      }
    }
  
    setAnoNascimento(ano) {
      if (ano >= 0 && ano <= 99) {
        const anoAtualCompleto = new Date().getFullYear();
        const seculoAtual = Math.floor(anoAtualCompleto / 100) * 100; // Obtém o século atual
        const seculoAnterior = seculoAtual - 100; // Obtém o século anterior
        const seculo = (anoAtualCompleto - ano >= 0) ? seculoAtual : seculoAnterior; // Determina o século com base no ano atual
        this._anoNascimento = seculo + ano;
        this._idade = this._anoAtual - this._anoNascimento;
      } else {
        console.log("Ano inválido!");
      }
    }
  
    calcularIdade() {
      return this._idade;
    }
  }
  
*/

