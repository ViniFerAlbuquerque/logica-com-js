const inputFinal = document.getElementById('final') 
const inputInicial = document.getElementById('inicial') 
const inputPassos = document.getElementById('passos') 
const res = document.querySelector('div.res') 

function contar() {
    // Isso evita que novas contagens sejam concatenadas com o resultado anterior 
    res.innerHTML = '' 
    
    let final = Number(inputFinal.value) 
    let inicial = Number(inputInicial.value) 
    let passos = Number(inputPassos.value) 

    if (isNaN(inicial) || isNaN(final)|| isNaN (passos) || inicial < 0 || final > 100 ) {
        alert('[ERRO!]→Insira números válidos!')
        return
    }

    if (passos <=0 ) {
        alert('[ERRO!]→Insira um número maior que zero no campo "Passos!')
        return 
    }
    while (final >= inicial) {
        res.innerHTML += `${final} > ` 
        final -= passos //final = final - passos
    }
    res.innerHTML += `Acabou!`
}
function limpar() {
    inputFinal.value = ''
    inputInicial.value = ''
    inputPassos.value = ''
    resp.innerHTML = ''
    inputFinal.focus() 
}