const numerosAdicionados = []
const inputNumeros = document.getElementById('numeros')
const btnLimpar = document.querySelector('button.btnLimpar')
inputNumeros.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarNumeros()
    }
})
const resposta = document.querySelector('div.resposta')
function adicionarNumeros() {
    const valor = Number(inputNumeros.value)

    if (isNaN(valor) || inputNumeros.value === '') {
        alert('[ERRO!]→Insira números válidos!')
        inputNumeros.focus() 
        return 
    }
    if (numerosAdicionados.length >= 6) {
        alert('[ATENÇÂO!]→Já foram adicionados os 6 números!') 
        return 
    }
    numerosAdicionados.push(valor)
    resposta.innerHTML = `<p>Números adicionados: ${numerosAdicionados.join(' , ')}</p>`
    inputNumeros.value = ''
    inputNumeros.focus()
}

function analisarNumeros() {
    if (numerosAdicionados.length < 6) {
        alert ('[ERRO!]→Adicione primeiro os 6 números.')
        return 
    }

    let numerosPares = 0 
    let numerosImpares = 0 

    for (let contador = 0; contador < numerosAdicionados.length; contador++) {
        if (numerosAdicionados[contador] %2 === 0 ) {
            numerosPares++ //numerosPares = numerosPares + 1
        } else {
            numerosImpares++
        }
    }

    resposta.innerHTML = `<p>Quantidade de números: ${numerosPares} par/pares | ${numerosImpares} ímpar/ímpares!</p>`
    btnLimpar.computedStyleMap.display = 'inline-block'

    btnLimpar.style.display = 'inline-block'

}
function limpar() {
    btnLimpar.style.display = 'none'

    numerosAdicionados.length = 0

    resposta.innerHTML = ''
    inputNumeros.value = '' 
    inputNumeros.focus()
}