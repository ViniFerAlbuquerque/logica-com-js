function conversao() {
    var dis = document.getElementById('txtdis')
    var res = document.querySelector('div.res')
    var km = (dis.value / 1000).toFixed(3)
    var hm = (dis.value / 100).toFixed(2)
    var dam = (dis.value / 10).toFixed(2)
    var dm = (dis.value * 10).toFixed(2)
    var cm = (dis.value * 100).toFixed(2)
    var mm = (dis.value * 1000).toFixed(2)

    if (dis.value == '') {
        alert('Insira uma distância!')
    } else {
        res.innerText = `A distância de ${dis.value} metros corresponde a:
        ${km} km
        ${hm} Hm
       ${dam} Dam
        ${dm} Dm
        ${cm} Cm
        ${mm} Mm `
    }
}