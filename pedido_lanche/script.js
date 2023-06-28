var tcsoun = document.getElementsByName('csoun')
var tbsoun = document.getElementsByName('bsoun')
var tnome = window.document.querySelector('input#fnome')
var res = window.document.querySelector('div#res')
var tod = document.querySelector('div#todos')
var nomes = []
var pedidos = []
var tbebidas = 0.00
var tcomidas = 0.00
var total = 0.00
var comida = ''
var bebida = ''

function isNome(n1,l1) {
    if (l1.indexOf(n1) != -1 ) {
        return true
    } else {
        return false
    }
}

function verificar() {
    
    if (tnome.value.length == 0) {
        window.alert('Erro! Campo NOME está incompleto!')
        tnome.focus()
    } else if (isNome(tnome.value, nomes)) {
        alert('Nome repetido. Altere o campo Nome.')
        tnome.focus()

    } else {
        
        if (tcsoun[0].checked) {
            comida = 'COM comida'
            tcomidas = 1.00   
        } else if (tcsoun[1].checked) {
            comida = 'SEM comida'
            tcomidas = 0
        }
        if (tbsoun[0].checked) { 
            bebida = 'COM bebida'
            tbebidas = 1.00   
        } else if (tbsoun[1].checked) {
            bebida = 'SEM bebida'
            tbebidas = 0
        }
        total = tbebidas + tcomidas
        res.style.textAlign = 'center'
        res.innerHTML = `Pedido de ${tnome.value}: ${comida} e ${bebida}.R$${total.toFixed(2)}`
    }
}

function confirmar() {
    if (total <= 0){
        alert('Falta VERIFICAR o valor. Não permitido pedidos com valor R$0,00')
    } else {
    res.innerHTML = 'Total R$ 0.00 (aperter VERIFICAR para atualizar o valor do pedido)'
    var tlista = document.querySelector('select#flista')
    var item = document.createElement('option')
    item.text = `Pedido de ${tnome.value}: ${comida} e ${bebida}. R$${total.toFixed(2)}`
    tlista.appendChild(item)
    pedidos.push(`Pedido de ${tnome.value}: ${comida} e ${bebida}. R$${total.toFixed(2)}`)
    nomes.push(tnome.value)
    tnome.value = ''
    tnome.focus()
    total = 0
    tod.innerHTML = ''
}
}

function todos(){
    tod.innerHTML += `Relação de todos os pedidos:<br>`
    for(let pos in pedidos) {
        tod.innerHTML += `${pedidos[pos]}<br>`
    }

}

