const tcsoun = document.getElementsByName('csoun');
const tnome = document.querySelector('input#fnome');
const res = document.querySelector('div#res');
const tod = document.querySelector('div#todos');
const pedidos = [];
let total = 0;
let numeroPedido = 1;

function isNomeRepetido(nome) {
  return pedidos.some(pedido => pedido.nome === nome);
}

function toggleBebidaOptions() {
  const semBebidaCheckbox = document.getElementById('semBebida');
  const bebidaInputs = document.querySelectorAll('input[name="bebida"]');

  bebidaInputs.forEach(input => {
    input.disabled = semBebidaCheckbox.checked;
    input.checked = false;
  });
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
  const semBebidaCheckbox = document.getElementById('semBebida');
  const bebidaInputs = document.querySelectorAll('input[name="bebida"]:checked');
  const bebidasSelecionadas = Array.from(bebidaInputs).map(input => input.nextElementSibling.textContent);

  let bebida = 'SEM bebida';
  let valorBebida = 0;

  if (!semBebidaCheckbox.checked && bebidasSelecionadas.length > 0) {
    bebida = bebidasSelecionadas.join(', ');

    bebidaInputs.forEach(input => {
      valorBebida += parseFloat(input.dataset.valor);
    });
  }

  total = tcsoun[0].checked + valorBebida;
  res.style.textAlign = 'center';
  res.innerHTML = `Pedido ${numeroPedido}: ${nome}, ${comida} e ${bebida}. Total: R$${total.toFixed(2)}`;
}

function confirmar() {
  if (total <= 0) {
    alert('Falta VERIFICAR o valor. Não é permitido fazer pedidos com valor R$0,00');
    return;
  }

  const pedido = {
    numero: numeroPedido,
    nome: tnome.value,
    comida: tcsoun[0].checked ? 'COM comida' : 'SEM comida',
    semBebida: document.getElementById('semBebida').checked,
    bebidaInputs: document.querySelectorAll('input[name="bebida"]:checked'),
    total: total.toFixed(2)
  };

  pedidos.push(pedido);

  const tlista = document.querySelector('select#flista');
  const option = document.createElement('option');
  option.text = `Pedido ${pedido.numero}: ${pedido.nome}, ${pedido.comida} e ${pedido.bebida}. Total: R$${pedido.total}`;
  tlista.appendChild(option);

  tnome.value = '';
  tnome.focus();
  total = 0;
  res.innerHTML = 'Total R$ 0.00 (aperte VERIFICAR para atualizar o valor do pedido)';
  tod.innerHTML = '.';
  numeroPedido++;
}

function exibirTodos() {
  tod.innerHTML = 'Relação de todos os pedidos:<br>';
  pedidos.forEach(pedido => {
    tod.innerHTML += `Pedido ${pedido.numero}: ${pedido.nome}, ${pedido.comida} e ${pedido.bebida}. Total: R$${pedido.total}<br>`;
  });
}
