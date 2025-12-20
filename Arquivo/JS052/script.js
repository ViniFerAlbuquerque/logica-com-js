const inputIdades = document.getElementById('idade')
const TOTAL_ITENS = 10;

// Atalho: permitir Enter para adicionar
inputIdades.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionarIdades()
    }
})

const btnLimpar = document.querySelector('button.btnLimpar')
const resposta = document.querySelector('div.resposta')

// Array que irá guardar as idades
let listaIdades = []


function adicionarIdades() {
    const idade = Number(inputIdades.value)

    if (isNaN(idade) || idade <= 0) {
        alert('[ERRO!}→Insira uma idade válida.')
        inputIdades.value = ''
        inputIdades.focus()
        return
    }

    if (listaIdades.length >= 10) {
        alert('Você já adicionou 10 idades! Clique em "Analisar"')
       
        inputIdades.value = ''
        return
    }

    // Adiciona cada idade no array
    listaIdades.push(idade)

    // O join(' , ') adiciona uma vírgula entre as idades
    resposta.innerHTML = `<p>Idades adicionadas: ${listaIdades.join(', ')}</p>`

    inputIdades.value = ''
    inputIdades.focus()

}


function analisarIdades() {
    if (listaIdades.length < 10) {
        alert('[ATENÇÂO]→Adicione primeiro as 10 idades!')
        inputIdades.focus()
        return
    }

    let somaIdades = 0
    let maioresDe18 = 0
    let menoresDe5 = 0

    let maiorIdade = listaIdades[0] // Inicializa a variável com o primeiro valor do array.

    for (let contador = 0; contador < listaIdades.length; contador++) {
        somaIdades += listaIdades[contador]

        if (listaIdades[contador] > 18) {
            maioresDe18++ // idade18 = idade18 + 1
        }

        if (listaIdades[contador] < 5) {
            menoresDe5++ // idade5 = idade5 + 1
        }

        // Verifica se a idade atual é maior do que a idade maior anterior
        if (listaIdades[contador] > maiorIdade) {
            maiorIdade = listaIdades[contador]
        }

    }

    const mediaIdades = (somaIdades / listaIdades.length).toFixed(1)

    resposta.innerHTML = `  <p>Média: ${mediaIdades} anos.</p>
                            <p>Mais de 18 anos: ${maioresDe18} pessoas.</p>
                            <p>Menos de 5 anos: ${menoresDe5} pessoas.</p>
                            <p>Maior idade: ${maiorIdade} anos.</p>
    `

    // Mostra o botão "Limpar"
    btnLimpar.style.display = 'inline-block'

}


function limpar() {
    listaIdades.length = 0 // Limpa os números anteriores guardados no array
    inputIdades.value = ''
    resposta.innerHTML = ''
    inputIdades.focus()

    // Esconde o botão "Limpar"
    btnLimpar.style.display = 'none'

}







// // Configurações iniciais 
// const inputIdades = document.getElementById('idade'); 
// const TOTAL_ITENS = 10;

// const progresso = document.getElementById('progresso'); 
// const faltamIdades = document.getElementById('faltamIdades'); 
// const btnLimpar = document.querySelector('button.btnLimpar'); 
// const resposta = document.querySelector('div.resposta'); 
// const btnAdicionar = document.getElementById('btnAdicionar');

// inputIdades.addEventListener('keydown', function (event) { 
//     if (event.key === 'Enter') { 
//         adicionarIdades(); 
//     } 
// });

// let listaIdades = [];

// // Atualiza o progresso na tela: gráfico e texto "faltam" 
//  function atualizarProgresso() { 
//     progresso.value = listaIdades.length; 
//     const faltam = TOTAL_ITENS - listaIdades.length; 
//     faltamIdades.textContent = `Faltam ${faltam} idades`; 
    
//     // Desabilita o input quando concluído 
//     const estaCompleto = faltam <= 0; 
//     inputIdades.disabled = estaCompleto; 
    
//     if (btnAdicionar) btnAdicionar.disabled = estaCompleto; 
//     progresso.setAttribute('aria-valuenow', String(listaIdades.length)); 
// }

// function adicionarIdades() { 
//     const idade = Number(inputIdades.value);

// if (isNaN(idade) || idade <= 0) { 
//     alert('Insira uma idade válida.'); 
//     inputIdades.value = ''; 
//     inputIdades.focus(); 
//     return; 
// }

// if (listaIdades.length >= TOTAL_ITENS) { 
//     alert('Você já adicionou 10 idades! Clique em "Analisar"'); 
//     inputIdades.value = ''; 
//     return; 
// }

// // Adiciona cada idade no array 
// listaIdades.push(idade);

// // Mostra as idades adicionadas 
// resposta.innerHTML = <p>Idades adicionadas: ${listaIdades.join(', ')}</p>;

// inputIdades.value = '';
//  inputIdades.focus();

// // Atualiza o progresso 
// atualizarProgresso(); 
// }

// function analisarIdades() { 
//     if (listaIdades.length < TOTAL_ITENS) { 
//         alert('Adicione primeiro as 10 idades!'); 
//         inputIdades.focus(); 
//         return; 
//     }

// let somaIdades = 0; 
// let maioresDe18 = 0; 
// let menoresDe5 = 0; 
// let maiorIdade = listaIdades[0];

// for (let i = 0; i < listaIdades.length; i++) { const valor = listaIdades[i]; somaIdades += valor;


// if (valor > 18) maioresDe18++;
// if (valor < 5) menoresDe5++;

// if (valor > maiorIdade) maiorIdade = valor;
// }

// const mediaIdades = (somaIdades / listaIdades.length).toFixed(1);

// resposta.innerHTML = `<p>Média: ${mediaIdades} anos.</p> <p>Mais de 18 anos: ${maioresDe18} pessoas.</p> 
// <p>Menos de 5 anos: ${menoresDe5} pessoas.</p> <p>Maior idade: ${maiorIdade} anos.</p>` ;

// // Mostra o botão Limpar se quiser adaptar 
// btnLimpar.style.display = 'inline-block'; 
// }

// function limpar() {
//      // Limpa o array mantendo a referência 
//      listaIdades.length = 0; 
//      inputIdades.value = ''; 
//      resposta.innerHTML = ''; 
//      inputIdades.focus();

// // Atualiza o progresso e reabilita o input
//  atualizarProgresso(); 
//  btnLimpar.style.display = 'none'; 
//  inputIdades.disabled = false; 
// }




