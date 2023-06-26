class Conta {
    constructor () {
        this._numero = 0;
        this._banco = 'banco';
        this._agencia = 0;
        this._cliente = 'nome'
        this._saldo = Number(0);
    }

    setSaldo (quantia) {
        this._saldo += Number(quantia);
    }

    getSaldo () {
        let saldo = this._saldo
        return saldo
    }

    deposito (quantia) {
        if (this.getSaldo() === null) {
            console.log('Conta encerrada. Não é possível movimentar essa conta.')
        } else {
            this.setSaldo(quantia);
            console.log(`Deposito registrado com sucesso. Saldo atual R$ ${this.getSaldo().toFixed(2)}`);
        }
    }

    saque (quantia) {
        if (quantia <= this.getSaldo()){
            this.setSaldo(quantia * -1);
            console.log(`Saque realizado com sucesso. Saldo atual R$ ${this.getSaldo().toFixed(2)}`);
        } else {
            console.log(`Saldo insuficiente. Saldo atual R$ ${this.getSaldo().toFixed(2)}`);
        }
        
    }

    encerrarConta () {
        if (this._saldo === 0) {
            this._numero = null;
            this._banco = null;
            this._agencia = null;
            this._cliente = null;
            this._saldo = null;
            console.log('Conta encerrada com sucesso.')
        } else {
            console.log('Não é possível encerrar a conta. O saldo deve ser igual a zero.');
        }
    }

    Conta (num, ban, age, cliente, saldo) {
        this._numero = num;
        this._banco = ban;
        this._agencia = age;
        this._cliente = cliente;
        this._saldo = Number(saldo);
    }
}

module.exports = Conta;
