class Aluno {
    #matricula;
    #nome;
    #curso;
    #ano;
    #pai;
    #mae;
    #bolsista;
    #rg;
    #cpf;
    #telefone1;
    #telefone2;
    #email;
    #endereco;
    #bairro;
    #cidade;

    static numeroMatricula = 1000;

    constructor () {
        this.#matricula = '';
        this.#nome = 'nome';
        this.#curso = 'curso';
        this.#ano = 1900;
        this.#pai = 'nome';
        this.#mae = 'nome';
        this.#bolsista = false;
        this.#rg = 'identidade';
        this.#cpf = 'numCPF';
        this.#telefone1 = 'contato 01';
        this.#telefone2 = 'contato 02';
        this.#email = 'e-mail';
        this.#endereco = 'endereço';
        this.#bairro = 'bairro';
        this.#cidade = 'cidade';

    }
    matricular (nome, curso, ano, pai, mae, bolsista, rg, cpf, telefone1, telefone2, email, endereco, bairro, cidade) { 

        function numMatricula () {
            const matricula = Aluno.numeroMatricula.toString();
            Aluno.numeroMatricula++;
            return matricula;
        }

        if (nome && curso && ano && pai && mae && typeof bolsista === 'boolean' && rg && cpf && telefone1 && telefone2 && email &&endereco && bairro && cidade) {
            this.#matricula = numMatricula();
            this.#nome = nome;
            this.#curso = curso;
            this.#ano = ano;
            this.#pai = pai;
            this.#mae = mae;
            this.#bolsista = bolsista;
            this.#rg = rg;
            this.#cpf = cpf;
            this.#telefone1 = telefone1;
            this.#telefone2 = telefone2;
            this.#email = email;
            this.#endereco = endereco;
            this.#bairro = bairro;
            this.#cidade = cidade;
            return true
        } else { 
            return false 
        }
    }

    buscarMatricula (nome) {
        if (nome === this.#nome) {
            return `matrícula: ${this.#matricula}`
        } else {
            return 'nome do estudante não encontrado.'
        }
    }

    comprovanteMatricula(matricula) {
        if (matricula === this.#matricula) {
            console.log();
            console.log('-----COMPROVANTE DE MATRÍCULA-----');
            console.log(`nome do Estudante: ${this.#nome}`);
            console.log(`curso: ${this.#curso}`);
            console.log(`nº Matrícula: ${this.#matricula}/ ano: ${this.#ano}`);
            console.log('-------------------------------------------------------------------------');
            console.log();
        } else {
            console.log('=======================================================');
            console.log('Não foi encontrado o número de matrícula.');
            console.log('=======================================================');
        }
    }
}

module.exports = Aluno;