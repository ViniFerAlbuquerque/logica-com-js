function resultado() {
    let num = document.getElementById('txtn')
    let res = document.querySelector('div.res')

    let dobro = num.value * 2
    let terca = num.value / 3

    if (num.value == ' ') {
        alert ('Mas que barbaridade insira o número')
    } else{
        res.outerHTML = `Dobro : ${dobro.toFixed(2)} | Terça parte : ${terca.toFixed(2)}`
        // res.innerHTML = `<p>Dobro : ${dobro} | Terça parte : ${terca}</p>`
    }
}