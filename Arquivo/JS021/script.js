function verificar(){
    let txtAno = document.getElementById('txtano') 
    let res = document.querySelector('div.res') 

    let stringAno = txtAno.value 
    let ano = Number(stringAno) 

    if (isNaN(ano) || ano <=0) {
        alert('Insira um valor válido!') 
        return
    } if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 === 0) {
        res.innerText = 'É um ano bissexto!'
    } else {
        res.innerText = 'Não é um ano bissexto!'
    }
}