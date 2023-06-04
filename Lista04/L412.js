function mediaValore(...valores) {
    let soma = 0;
    for (let valor of valores) {
        soma += valor;
    }
    let media = soma / valores.length;
    return media
}

console.log(mediaValore(1, 2, 3, 4, 5));