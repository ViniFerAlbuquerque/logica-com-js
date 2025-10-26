function verificar(){
    let inputVelocidade = document.getElementById('txtvel')
    let res = document.querySelector('div.res')

    let velString = inputVelocidade.value 

if(velString.trim() === '' ) {
    alert('Insira a velocidade!')
    return
}
let velocidade = Number(velString)
if(velocidade <=0){
    alert('Insira um valor maior que zero!')
    return
}

if(velocidade > 80){
    let valorMulta = (velocidade - 80) * 5
    res.innerText = `Você foi multado por ultrapassar o limite de 80km/h 
    O valor da sua multa é : ${valorMulta.toLocaleString('pt-br', {style:'currency', currency : 'BRL'})}`
} else {
    res. innerText = `Velocidade dentro do limite permitido!`
}
}