function calcular(){
    let txtValor = document.getElementById('txtvalor')
    let valor = Number(txtValor.value)
    let res = document.querySelector('div.res')

    if (txtValor.value == '' || txtValor.value <=0) {
        alert ('Insira o valor primeiro!')
    } else {
        let promocao = valor - (valor * 0.05)
        res.innerText = `O valor da sua compra com 5% de desconto será de ${promocao.toLocaleString('pt-BR', {style : 'currency', currency : 'BRL'} )}`
    }
}