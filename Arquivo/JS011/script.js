function calculo() {
    let txtA = document.getElementById('txta')
    let txtB = document.getElementById('txtb')
    let txtC = document.getElementById('txtc')

    let A = Number(txtA.value)
    let B = Number(txtB.value)
    let C = Number(txtC.value)

    let res = document.querySelector('div.res')

    if (txtA.value == '' || txtB.value == '' || txtC.value == '') {
        alert('Insira os valores abaixo para calcular!')
    } else {
        let delta = (B ** 2) - (4 * A * C)
        res.innerText = `O valor de Delta é igual a ${delta}`
    }
}