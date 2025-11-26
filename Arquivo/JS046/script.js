const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const inputPassos = document.getElementById('passos')
const resposta = document.querySelector('div.resposta')

function calcular() {
    resposta.innerHTML = ''
    let inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)
    const passos = Number(inputPassos.value)

    if (isNaN(inicio) || isNaN(fim) || isNaN(passos) || passos <= 0) {
        alert ('[ERRO!]→Insira valores válidos!')
    }
    let soma = 0
    let exibicao = ''
     
    while (inicio <= fim) {
        soma += inicio
        //"+" por "inicio + passos" por ser menor ou igual ao "fim"
        exibicao += inicio

        if (inicio + passos <= fim) {

            exibicao += ` + `
            // exibicao =  resposta.innerHTML += `${inicio} + `
        }
        inicio += passos 
    }
    resposta.innerHTML += `<p>${exibicao} = ${soma}</p>`
}
function limpar() {
    inputInicio.value = ''
    inputFim.value = ''
    inputPassos.value = ''
    resposta.innerHTML = ''
    inputInicio.focus()
}