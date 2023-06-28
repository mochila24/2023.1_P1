const tcsoun = document.getElementsByName('csoun');
const tnome = document.querySelector('input#fnome');
const res = document.querySelector('div#res');
const tod = document.querySelector('div#todos');
const pedidos = [];
let numeroPedido = 1;

function isNomeRepetido(nome) {
  return pedidos.some(pedido => pedido.nome === nome);
}

function verificar() {
  if (tnome.value.trim() === '') {
    window.alert('Erro! Campo NOME está incompleto!');
    tnome.focus();
    return;
  }

  let nome = tnome.value.trim();

  if (isNomeRepetido(nome)) {
    const resposta = window.confirm('Nome repetido. Deseja alterar o nome?');
    if (resposta) {
      let suffix = 1;
      while (isNomeRepetido(nome + suffix)) {
        suffix++;
      }
      nome = nome + suffix;
    } else {
      tnome.focus();
      return;
    }
  }

  const comida = tcsoun[0].checked ? 'COM comida' : 'SEM comida';

  let bebidasSelecionadas = [];
  let valorBebidas = 0;

  const tbebida = document.getElementsByName('bebida');

  // Verifica quais bebidas foram selecionadas e acumula os valores
  for (let i = 0; i < tbebida.length; i++) {
    if (tbebida[i].checked) {
      bebidasSelecionadas.push(tbebida[i].id);
      if (tbebida[i].id === 'agua') {
        valorBebidas += 2.0;
      } else if (tbebida[i].id === 'cocacola') {
        valorBebidas += 5.0;
      } else if (tbebida[i].id === 'suco') {
        valorBebidas += 3.5;
      }
    }
  }

  const total = valorBebidas + (tcsoun[0].checked ? 1.0 : 0.0);
  res.style.textAlign = 'center';
  res.innerHTML = `Pedido #${numeroPedido}: ${nome}: ${comida} e ${bebidasSelecionadas.join(', ')}. Total: R$${total.toFixed(2)}`;
}

function confirmar() {
  if (res.innerHTML === '') {
    alert('Falta VERIFICAR o valor. Não é permitido fazer pedidos com valor R$0,00');
    return;
  }

  const pedido = {
    numero: numeroPedido,
    nome: tnome.value,
    comida: tcsoun[0].checked ? 'COM comida' : 'SEM comida',
    bebidas: [],
    total: 0
  };

  const tbebida = document.getElementsByName('bebida');

  // Adiciona as bebidas selecionadas ao pedido
  for (let i = 0; i < tbebida.length; i++) {
    if (tbebida[i].checked) {
      pedido.bebidas.push(tbebida[i].id);
    }
  }

  let valorBebidas = 0;

  // Calcula o valor total das bebidas selecionadas
  for (const bebida of pedido.bebidas) {
    if (bebida === 'agua') {
      valorBebidas += 2.0;
    } else if (bebida === 'cocacola') {
      valorBebidas += 5.0;
    } else if (bebida === 'suco') {
      valorBebidas += 3.5;
    }
  }

  pedido.total = valorBebidas + (tcsoun[0].checked ? 1.0 : 0.0);

  pedidos.push(pedido);

  const tlista = document.querySelector('select#flista');
  const option = document.createElement('option');
  option.text = `Pedido #${pedido.numero}: ${pedido.nome}: ${pedido.comida} e ${pedido.bebidas.join(', ')}. Total: R$${pedido.total.toFixed(2)}`;
  tlista.appendChild(option);

  tnome.value = '';
  tnome.focus();
  res.innerHTML = 'Total R$ 0.00 (aperte VERIFICAR para atualizar o valor do pedido)';
  numeroPedido++;
}

function exibirTodos() {
  tod.innerHTML = 'Relação de todos os pedidos:<br>';
  pedidos.forEach(pedido => {
    tod.innerHTML += `Pedido #${pedido.numero}: ${pedido.nome}: ${pedido.comida} e ${pedido.bebidas.join(', ')}. Total: R$${pedido.total.toFixed(2)}<br>`;
  });
}
