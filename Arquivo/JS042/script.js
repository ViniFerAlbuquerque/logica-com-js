const inputNumero = document.getElementById('numero') 
const resposta = document.querySelector('div.resposta') 

function contar() {
    resposta.innerHTML = '' 
    let numeroEscolhido = Number(inputNumero.value) 

    if(isNaN(numeroEscolhido) || numeroEscolhido <=0 ) {
        alert('[ERRO!]→Insira um número maior que zero!') 
        return 
    }

    let numeroInicial = 1
    
    do {
        resposta.innerHTML += `${numeroInicial} >`
        numeroInicial ++
    } while (numeroInicial <= numeroEscolhido) 
        resposta.innerHTML += `Acabou!`
} 

function limpar () {
    inputNumero.value = ''
    resposta.innerHTML = '' 
    inputNumero.focus()
}