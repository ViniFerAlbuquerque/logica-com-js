const inputNumero = document.getElementById('numero')
const res = document.querySelector('article.res')

function contar() {
    let numero = Number(inputNumero.value) 

    if (isNaN(numero) || numero < 6 || numero > 11) {
        alert('[ERRO]→Insira valores válidos!') 
        return
    }
    while (numero <= 11) {
        res.innerText += `${numero} ,`
        numero++
    }
    res.innerText += `Fim da contagem!`
}
function limpar() {
    inputNumero.value = ''
    res.innerText = ''
    inputNumero.focus()
}