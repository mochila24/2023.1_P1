class Vaga {
    constructor(professor, departamento, matricula, placa, modelo, cor) {
        this.#professor = professor;
        this.#departamento = departamento;
        this.#matricula = matricula;
        this.#placa = placa;
        this.#modelo = modelo;
        this.#cor = cor;
        this.#entrada = 'hora';
        this.#saida = 'hora';
    }

    permanencia () {
        const dataAtual = new Date();
        const entrada = new Date(dataAtual.toDateString() + " " + this.#entrada);
        const saida = new Date(dataAtual.toDateString() + " " + this.#saida);
        const tempoDecorrido = saida.getTime() - entrada.getTime();
        const tempoDecorridoDate = new Date(tempoDecorrido);
        const tempoDecorridoString = tempoDecorridoDate.toISOString().substring(11, 19);
        return tempoDecorridoString
    }

    dadosVeiculo () {
        console.log('Dados do Veículo')
        console.log(`Placa: ${this.#placa}`);
        console.log(`Modelo do veículo: ${this.#modelo}`);
        console.log(`Cor do Veículo: ${this.#cor}`);
    }

    dadosProfessor() {
        console.log('Dados do Professor');
        console.log(`Nome: ${this.#professor}`);
        console.log(`Departamento: ${this.#departamento}`);
        console.log(`Matrícula: ${this.#matricula}`);
    }

    comprovanteEstacionamento () {
        if (this.#entrada === 'hora') {
            console.log("Veículo sem dados de entrada.")
            
        } else if (this.#saida === 'hora') {
            console.log("Veículo ainda estacionado. Não foi registrada a saída.");

        } else {
        console.log("-------- COMPROVANTE DE ESTACIONAMENTO --------");
        console.log(`Professor: ${this.#professor}`);
        console.log(`Departamento: ${this.#departamento}`);
        console.log(`Matrícula: ${this.#matricula}`);
        console.log(`Placa: ${this.#placa}`);
        console.log(`Modelo: ${this.#modelo}`);
        console.log(`Cor: ${this.#cor}`);
        console.log(`Data de entrada: ${this.#entrada}`);
        console.log(`Data de saída: ${this.#saida}`);
        console.log(`Tempo de permanência: ${this.permanencia()}`);
        console.log("-----------------------------------------------");
        }
    }
}

module.exports = Vaga;
