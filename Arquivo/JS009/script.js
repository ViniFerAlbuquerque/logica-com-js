function conversao() {

    // Mesmo que o input seja do tipo number, o que você recebe é uma string. Sempre. Mesmo sendo <input type="number">.
    let dinheiro = document.getElementById('txtdin')

    let res = document.querySelector('div.res')

    if (dinheiro.value == '') {
        alert('Digite um valor!')
    } else {

        // Conversão de valor de STRING para NÚMERO
        let dinheiroValor = parseFloat(dinheiro.value)

        // PEGA O NOME DO INPUT RADIO
        let inputRadio = document.getElementsByName('radin')

        // O "inputRad[0] indica qual é o input selecionado"
        if (inputRadio[0].checked) {
            let valorReais = dinheiroValor * 5.45
            res.innerHTML = `O valor de ${dinheiroValor.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} é igual a ${valorReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        } else {
            var valorDolar = dinheiroValor / 5.45
            res.innerHTML = `O valor de ${dinheiroValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} é igual a ${valorDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
        }
    }
}