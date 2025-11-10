const inputInicial = document.getElementById('inicial')
const inputFinal = document.getElementById('final')
const inputContagem = document.getElementById('contagem')
const res = document.querySelector('article.res')

function contar() {
    // Zera o conteúdo da resposta antes de exibir o novo resultado
    res.innerHTML = ''

    let inicial = Number(inputInicial.value)
    let final = Number(inputFinal.value)
    const contagem = Number(inputContagem.value)

    if (isNaN(inicial) || isNaN(final) || isNaN(contagem)) {
        alert('[ERRO]→Insira valores válidos.')
        return
    }

    if (contagem <= 0) {
        alert('[ERRO]→O valor dos passos deve ser maior que zero.')
        return
    }

    while (inicial <= final) {
        res.innerHTML += `${inicial} > `
        inicial += contagem // É igual a inicial = inicial + passos
    }

    res.innerHTML += 'Acabou!'

}

function limpar() {
    inputInicial.value = ''
    inputFinal.value = ''
    inputContagem.value = ''
    res.innerHTML = ''
    inputInicial.focus()
}