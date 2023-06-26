class Efetuar {
    constructor (op = '+', v1 = 1, v2 = 1) {
        this._valor1 = Number(v1);
        this._valor2 = Number(v2);
        this._operacao = op;
        this._resultado = this.efetuar();
    }

    calcular (op = this._operacao, v1 = this._valor1, v2 = this._valor2) {
        this.setOperacao(op);
        this.setValor1(v1);
        this.setValor2(v2);
        console.log(`valor 1: ${this.getValor1()}`);
        console.log(`operador: ${this.getOperacao()}`);
        console.log(`valor 2: ${this.getValor2()}`);
        //this.efetuar();
        console.log(`resultado: ${this.efetuar()}`)
    }

    setValor1 (v1) {
        this._valor1 = Number(v1);
        this._resultado = this.efetuar();
    }
    getValor1() {
        return this._valor1;
    }

    setValor2 (v2) {
        this._valor2 = Number(v2);
        this._resultado = this.efetuar();
    }

    getValor2() {
        return this._valor2;
    }

    setOperacao(op) {
        this._operacao = op;
        this._resultado = this.efetuar();
    }

    getOperacao() {
        return this._operacao;
    }

    efetuar() {
        if (this._operacao === '+') {
            this._resultado = this._valor1 + this._valor2;
        }else if (this._operacao === '-') {
            this._resultado = this._valor1 - this._valor2;
        } else if (this._operacao === '*') {
            this._resultado = this._valor1 * this._valor2;
        } else if (this._operacao === '/') {
            if (this._valor2 === 0) {
                this._resultado = `ERRO [divisor não pode ser valor ZERO]`;
            } else {
                this._resultado = this._valor1 / this._valor2;
            }
        }
        return this._resultado
    }

    somar(v1, v2) {
        this.setOperacao('+');
        this.setValor1(v1);
        this.setValor2(v2);
        return this.efetuar();
    }

    subtrair (v1, v2) {
        this.setOperacao('-');
        this.setValor1(v1);
        this.setValor2(v2);
        return this.efetuar();
    }

    multiplicar (v1, v2) {
        this.setOperacao('*');
        this.setValor1(v1);
        this.setValor2(v2);
        return this.efetuar();
    }

    dividir (v1, v2) {
        this.setOperacao('/');
        this.setValor1(v1);
        this.setValor2(v2);
        return this.efetuar();
    }

}
module.exports = Efetuar;




