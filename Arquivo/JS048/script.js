const numeros = []
const inputNumero = document.getElementById('numero')
inputNumero.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarNumero()
    }
} )

const resposta = document.querySelector('div.resposta')

function adicionarNumero () {
    const valor = Number(inputNumero.value)

    if (isNaN(valor)) {
    alert('[Erro!]→Digite um número válido!')
    return 
} 

if (numeros.length >= 7) {
    alert('Você já adicionou 7 números.')
    return 
}

numeros.push(valor)

inputNumero.value = ''
inputNumero.focus()

resposta.innerHTML = `<p>Números adicionados: ${numeros.join(' , ')} </p>`

}

function somarNumeros() {
    if (numeros.length < 7) {
        alert('[ERRO!]→Adicione 7 números antes de somar.') 
    }
    let soma = 0 

    for (let cadaNumero of numeros) {
        soma += cadaNumero 
    }
    resposta.innerHTML = ` <p>Soma total: ${soma}</p> `
    numeros.length = 0
    
}



