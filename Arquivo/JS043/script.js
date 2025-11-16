const inputFinal = document.getElementById('final')
const inputInicial = document.getElementById('inicial') 
const resposta = document.querySelector('div.resposta')

function contar () {
    resposta.innerHTML = '' 
    let numeroFinal = Number(inputFinal.value) 
    let numeroInicial = Number(inputInicial.value) 

    if (isNaN(numeroFinal) || isNaN(numeroInicial) || numeroFinal > 30 || numeroInicial <= 0) {
        alert('[ERRO!]→Insira um número válido!') 
        return 
    }
    while (numeroFinal >= numeroInicial) {
        if(numeroFinal % 4 == 0) {
            resposta.innerText += ` [${numeroFinal}] > ` 
            numeroFinal -- // numeroFinal = numeroFinal - 1
            resposta.style.color = 'green'
        } else {
            resposta.innerText += ` ${numeroFinal} > `
            numeroFinal--
        }

    }
            resposta.innerText += `Acabou!`
}
function limpar() {
    inputFinal.value = ''
    inputInicial.value = ''
    resposta.innerText = ''
    inputFinal.focus()
}