function somar() {
    let n1 = document.getElementById('txtn1')
    let n2 = document.getElementById('txtn2')
    let media = (Number(n1.value) + Number(n2.value))/2
    let res = document.querySelector('div.res')

    if(n1.value == 0 || n2.value == 0) {
    alert('Insira as notas: ')
} else { 
    res.innerHTML = `<p>A média entre ${n1.value} e ${n2.value} é igual a ${media.toFixed(1)}</p>`}
}