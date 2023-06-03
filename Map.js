
/*
let numeros = [9,-20,8,12,-3,0,7,10,-5,23,-4];

const cubo = valor => (valor * valor * valor); //função para calcular o cubo

console.log();
console.log('Array original: ')
console.log(numeros);

//exibindo o vetor resultante do Map
console.log()
console.log('Cubo dos valores do array original: ')
numerosAoCubo = numeros.map(cubo);
console.log(numerosAoCubo);
*/


/*
let sequencia = [5, 9 , 4, 7, 10, 20, 21];

let div = sequencia.map((sequencia) => {
    let div = [];
    for (let i = 1; i <= sequencia; i++){
        if (sequencia % i === 0){
            div.push(i);
        }
    }
    return div;
});

console.log('Sequencia original:');
console.log(sequencia);
console.log();

console.log('Divisores de cada elemento:');
console.log(div);
*/

//uso de Map em array
//convertendo temperaturas de Farenheit para Celsius
// definindo as faixas de temperaturas Farenheit
let temperaturaInicial = -25
let temperaturaFinal = 25

//função para converter os valores
const converter = temp => (temp * 1.8) + 32

//definindo e preenchendo o array de temperaturas em Farenheit
let temperaturas = [];
for (let temperatura = temperaturaInicial; temperatura <= temperaturaFinal; temperatura++){
    temperaturas.push(temperatura)
}

// calculando a temperatura em Celsius a partir das temperaturas em Farenheit
convertida = temperaturas.map(converter);

//exibindo a tabela de temperaturas
console.log()
console.log('Conversão de temperaturas (Farenheit x Celsius)');
for (indice in temperaturas) {
    console.log(`${parseFloat(temperaturas[indice]).toFixed(1)}ºF => ${parseFloat(convertida[indice]).toFixed(1) }ºC`)
};
