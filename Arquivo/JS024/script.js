function calcular() {

    let inputDistancia = document.getElementById('inputdistancia')
    let res = document.querySelector('div.res')

    let StringDistancia = inputDistancia.value 
    let distancia = Number(StringDistancia)

    if (isNaN(distancia) || distancia <=0 || distancia === '') {
        alert('[ERRO] => Insira valores válidos!')
        return
    } if (distancia <= 200) {
        let precoAte200km = distancia * 0.50 

        res.innerText = `O preço a ser pago para percorrer ${distancia} km é ${precoAte200km.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    } else {
        let precoMaiskm = distancia * 0.45 
         
        res.innerText = `O preço a ser pago para percorrer ${distancia} km é ${precoMaiskm.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    }
}