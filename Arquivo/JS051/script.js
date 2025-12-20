const inputPreco = document.getElementById('preco');
const divResposta = document.querySelector('.resposta');
const TOTAL_ITENS = 8;
let precos = [];

function formatar(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function atualizarResumo() {
  if (precos.length === 0) {
    divResposta.innerHTML = '<p>Nenhum preço informado ainda.</p>';
    return;
  }
  const linhas = precos.map((p, i) => `Produto ${i + 1}: ${formatar(p)}`);
  divResposta.innerHTML = `<p>Itens inseridos: ${precos.length}/${TOTAL_ITENS}</p><p>${linhas.join('<br>')}</p>`;
}

function adicionarProduto() {
  const valor = parseFloat(inputPreco.value);
  if (isNaN(valor)) {
    alert('[ERRO]→Informe um preço válido!');
    return;
  }
  if (precos.length >= TOTAL_ITENS) {
    alert('[ATENÇÂO]→Já foram inseridos 8 preços!');
    return;
  }
  precos.push(valor);
  inputPreco.value = '';
  inputPreco.focus();
  atualizarResumo();
  if (precos.length === TOTAL_ITENS) {
    inputPreco.disabled = true;
  }
}

function analisarPrecos() {
  if (precos.length < TOTAL_ITENS) {
    alert(`[OBSERVE!]→Informe ${TOTAL_ITENS - precos.length} preço(s) a mais para analisar.`);
    return;
  }
  const min = Math.min(...precos);
  const max = Math.max(...precos);
  const idxMin = precos.indexOf(min);
  const idxMax = precos.indexOf(max);

  divResposta.innerHTML += `
    <p>Menor preço: ${formatar(min)} (produto ${idxMin + 1})</p>
    <p>Maior preço: ${formatar(max)} (produto ${idxMax + 1})</p>
  `;
}

function limpar() {
  precos = [];
  inputPreco.value = '';
  inputPreco.disabled = false;
  inputPreco.focus();
  divResposta.innerHTML = '';
}




// const MAX_ITENS = 8
// const itens = []

// const inputNome = document.getElementById('nome');
// const inputPreco = document.getElementById('preco');
// const btnAdicionar = document.getElementById('btnAdicionar');
// const lista = document.getElementById('lista');
// const labelRestante = document.getElementById('restante');
// const divResposta = document.getElementById('resposta');

// function atualizaUI() {
//     const faltam = Math.max(0, MAX_ITENS - itens.length);
//     labelRestante.textContent = `Faltam ${faltam} ${faltam === 1 ? 'produto' : 'produtos'}` //para completar 8 preços; 
//     const disable = itens.length >= MAX_ITENS;
//     btnAdicionar.disabled = disable;
//     inputNome.disabled = disable;
//     inputPreco.disabled = disable;
// }

// function adicionarProduto() {
//     const nome = inputNome.value.trim(); 
//     const preco = parseFloat(inputPreco.value);
// }
// if (!nome) {
//     alert('Informe o nome do produto.');
//     return;
// } if (Number.isNaN(preco) || preco < 0) {
//     alert('Informe um preço válido.');
//     return;
// }

// itens.push({ nome, preco });
// const li = document.createElement('li');
// li.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
// lista.appendChild(li);

// inputNome.value = '';
// inputPreco.value = '';

// atualizaUI(); // Opcional: persistir no localStorage // localStorage.setItem('itens8', JSON.stringify(itens)); }

// function analisarPrecos() {
//     if (itens.length === 0) {
//         divResposta.textContent = 'Nenhum item informado.';
//         return;
//     }
//     // Calcula max/min entre os itens inseridos 
//     let max = itens[0].preco;
//     let min = itens[0].preco;
//     itens.forEach(it => {
//         if (it.preco > max) max = it.preco;
//         if (it.preco < min) min = it.preco;
//     });
//     divResposta.textContent = `Preço máximo: R$ ${ max.toFixed(2) } | Preço mínimo: R$ ${ min.toFixed(2) }`;
// }

// function limpar() {
//     itens.length = 0; 
//     while (lista.firstChild) lista.removeChild(lista.firstChild); 
//     inputNome.value = ''; 
//     inputPreco.value = ''; 
//     divResposta.textContent = ''; 
//     atualizaUI(); 
//     // localStorage.removeItem('itens8'); }
// }
//  //Carregar estado inicial (opcional) 
//  window.addEventListener('load', () => { 
//  const salvo = localStorage.getItem('itens8'); 
//  if (salvo) { 
//  try { 
//  const arr = JSON.parse(salvo); 
//  arr.forEach(i => { 
//  itens.push(i); // const li = document.createElement('li'); 
//  li.textContent = `${i.nome} - R$ ${Number(i.preco).toFixed(2)}`; 
//  lista.appendChild(li); 
//  }); // atualizaUI(); 
//  } catch (e) {} 
//  } 
//  });

// document.addEventListener('DOMContentLoaded', atualizaUI);