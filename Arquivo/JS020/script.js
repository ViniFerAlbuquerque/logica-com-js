function verificar(){
    let txtNumero = document.getElementById('txtnumero') 
    let res = document.querySelector('div.res') 

    let stringNumero = txtNumero.value 
    let numero = Number(stringNumero) 

    if ( numero == ''){
        alert('Insira um número válido.')
        return
    }
    let numeroVerificado = numero % 2

    if (numeroVerificado == 0) {
        res.innerText = `Número par.`
    } else {
        res.innerText = `Número ímpar`
    }
}