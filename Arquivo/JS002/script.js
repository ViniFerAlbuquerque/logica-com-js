 function Mensagem() {
    let nome = document.getElementById('txtn')
    let resp = document.querySelector('div.res')
    if(nome.value == 0){
        alert ('Digite o seu nome!')
    } else {
        resp.innerHTML = `<p>Olá, ${nome.value}! <br> É uma honra ter você como parte de nossa associação!</p>`
    }
 }