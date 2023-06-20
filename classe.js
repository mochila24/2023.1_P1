class Animal {
    constructor (nome) {
        this.nome = nome
    }
    falar() {
        console.log(this.nome + 'emite um barulho.');
    }
}

class Cachorro extends Animal {
    falar() {
        console.log(this.nome + ' latidos.');
    }
}

let cachorro = new Cachorro ('Mat');
cachorro.falar();

console.log('-------------------------------------------------------------')
console.log()

class Gato {
    constructor (nome) {
        this.nome = nome;
    }
    falar() {
        console.log(this.nome + ' faça barulho.');
    }
}

class Leao extends Gato {
    falar() {
        super.falar();
        console.log(this.nome + ' roars.');
    }
}

let leao = new Leao ('Fuzzy');
leao.falar();
