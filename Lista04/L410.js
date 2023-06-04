lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
lista2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
lista3 = ['a', 10, 'b', 8, 'c', 6, 'd', 4, 'e', 2];

function inverso (list){

    for (let pos in list) {
        let elemento = list.pop();
        list.splice(pos, 0, elemento);
    }
    return list
}


console.log('-----------------------------------------------')
console.log(lista3);
console.log();
inverso(lista3);
console.log(lista3);

/*
ou pode usar o método reverse().
*/
console.log('-------------------------------------------------------------')
console.log()

function inverterArray(array) {
    return array.reverse();
}
  
let meuArray = [1, 2, 3, 4, 5];
console.log(meuArray);

let arrayInvertido = inverterArray(meuArray);

console.log();
console.log('Array invertido: ');
console.log(arrayInvertido); 