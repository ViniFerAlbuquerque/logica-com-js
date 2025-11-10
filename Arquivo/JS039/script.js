const inputNumero = document.getElementById('numero')
const res = document.querySelector('article.res')

function contar() {
    let numero = Number(inputNumero.value)

    if (isNaN(numero) || numero < 3 || numero > 10) {
        alert('[ERRO]→Insira valores válidos!')
        return
    }
    do {
        res.innerHTML += `${numero} ,`
        numero-- // numero = numero -1 
    }
    while (numero >= 3)
    res.innerHTML += `Acabou!`
}
function limpar() {
    inputNumero.value =''
    res.innerHTML ='' 
    inputNumero.focus()
}