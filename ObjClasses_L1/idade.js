 const prompt = require('prompt-sync')();

 let anoQueNasceu = parseInt(prompt('Informe o ano de nascimento: '))

 class Idade{
    constructor(Nascimento) {
        this._anoAtual = new Date().getFullYear();
        this._anoNascimento = Nascimento;
        this._idade = this._anoAtual - this._anoNascimento;
    }
 
    setAnoAtual(atual) {
        if (atual <= this._anoNascimento){
            console.log('[ERRO] Ano atual está anterior a data de nascimento.')
        } else {
            this._anoAtual = atual
            this._idade = this._anoAtual - this._anoNascimento
        }
        
    }

    setAnoNascimento(nascido) {
        if (nascido > this._anoAtual) {
            console.log('[ERRO] Ano informado é maior do que o registro do ano atual. Infromação não atualizada.')
        } else {
            this._anoNascimento = nascido
            this._idade = this._anoAtual - this._anoNascimento
        }
        
    }

    calcularIdade() {
        return this._idade
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




