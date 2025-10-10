function resultado() {
    let num = document.getElementById('txtnum')
    let res = document.getElementById('res')

    let ant = Number(num.value)-1
    let suc = Number(num.value)+1

    if(num.value == '') {
        alert ('Insira um valor : ')
    } else {
        res.innerText = `Antecessor : ${ant} | Sucessor : ${suc}`
    }
}