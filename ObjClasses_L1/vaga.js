class Vaga {
    #professor;
    #departamento;
    #matricula;
    #placa;
    #modelo;
    #cor;
    #entrada;
    #saida;
    constructor(professor, departamento, matricula, placa, modelo, cor, horaEntrada) {
        this.#professor = professor;
        this.#departamento = departamento;
        this.#matricula = matricula;
        this.#placa = placa;
        this.#modelo = modelo;
        this.#cor = cor;
        this.#entrada = horaEntrada;
        this.#saida = 'hora';
    }

    permanencia () {
        const saida = new Date();
        this.#saida = saida;
        const entrada = new Date(saida.toDateString() + " " + this.#entrada);
        const tempoDecorrido = saida.getTime() - entrada.getTime();
        const tempoDecorridoDate = new Date(tempoDecorrido);
        const tempoDecorridoString = tempoDecorridoDate.toISOString().substring(11, 19);
        return `Tempo de permanência: ${tempoDecorridoString}`;
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
        if (this.#entrada === undefined) {
            console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            console.log("Veículo sem dados de entrada.");
            console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
            
        } else if (this.#saida === 'hora') {
            console.log();
            console.log("Veículo ainda estacionado. Não foi registrada a saída.");
            console.log();
            console.log("-------- COMPROVANTE DE ESTACIONAMENTO --------");
            console.log(`Professor: ${this.#professor}`);
            console.log(`Departamento: ${this.#departamento}`);
            console.log(`Matrícula: ${this.#matricula}`);
            console.log(`Placa: ${this.#placa}`);
            console.log(`Modelo: ${this.#modelo}`);
            console.log(`Cor: ${this.#cor}`);
            console.log(`Data de entrada: ${this.#entrada}`);
            console.log('-------------------------------------------------');
            console.log();

        } else {
            console.log();
            console.log("-------- COMPROVANTE DE ESTACIONAMENTO --------");
            console.log(`Professor: ${this.#professor}`);
            console.log(`Departamento: ${this.#departamento}`);
            console.log(`Matrícula: ${this.#matricula}`);
            console.log(`Placa: ${this.#placa}`);
            console.log(`Modelo: ${this.#modelo}`);
            console.log(`Cor: ${this.#cor}`);
            console.log(`Data de entrada: ${this.#entrada}`);
            console.log(`Data de saída: ${this.#saida}`);
            console.log(this.permanencia());
            console.log("-----------------------------------------------");
            console.log();
        }
    }
}

module.exports = Vaga;
