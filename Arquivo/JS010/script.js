function calcular() {
    let largura = document.getElementById('txtlargura')
    let larguraNumerica = Number(largura.value)
    let altura = document.getElementById('txtaltura')
    let alturaNumerica = Number(altura.value)
    let res = document.querySelector('div.res')

    if (largura.value == '' || largura.value == 0 || altura.value == '' || altura.value == 0) {
        alert('As medidas devem ser inseridas ou não terão valor válido!')
    } else {
        let area = alturaNumerica * larguraNumerica
        let tinta = area / 2

        res.innerText = `Área total da parede : ${area} m²`
        res.innerText = `Tinta necessária: ${tinta.toFixed(2)} litros.`
    }

}