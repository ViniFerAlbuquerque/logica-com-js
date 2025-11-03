function comparar() {
    const inputValor1 = document.getElementById('valor1') 
    const inputValor2 = document.getElementById('valor2') 

    const res = document.querySelector('article.res')

    const stringValor1 = inputValor1.value 
    const stringValor2 = inputValor2.value 

    const valor1 = Number(stringValor1) 
    const valor2 = Number(stringValor2) 

    if (isNaN(valor1) || isNaN(valor2) || valor1 <= 0 || valor2 <= 0) {
        alert('[ERRO] => Insira valores válidos!')
        return
    } 
    if (valor1 > valor2) {
        res.innerText = 'O primeiro valor é o maior!'
    } else if (valor2 > valor1) {
        res.innerText = 'O segundo valor é o maior!'
    } else {
        res.innerText = 'Não existe maior, os dois são iguais!'
    }
}