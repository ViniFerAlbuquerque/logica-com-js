function calculo() {
    let txtCigarros = document.getElementById('txtcigarros')
    let txtAnos = document.getElementById('txtanos')
    let res = document.querySelector('div.res')

    let cigarrosString = txtCigarros.value
    let anosString = txtAnos.value

    //Verificação antes de converter
    if (cigarrosString === "" || anosString === "") {
        alert('Primeiro insira os dados!')
        return
    }

    let cigarros = Number(cigarrosString)
    let anosFumados = Number(anosString)

    if (cigarros <= 0 || anosFumados <= 0) {
        alert('Insira valores maior que zero!')
    }
    let diasFumando = anosFumados * 365

    let minutosPerdidosPorDia = cigarros * 10

    let minutosTotaisPerdidos = minutosPerdidosPorDia * diasFumando

    let diasDeVidaPerdidos = minutosTotaisPerdidos / 1440 // 1 dia = 1440 minutos

    res.innerHTML = `<p>Você perdeu aproximadamente ${diasDeVidaPerdidos.toFixed(2)} dias de vida ao fumar por ${anosFumados} anos.</p>`
    
}

 function limpar() {
        let txtCigarros = document.getElementById('txtcigarros')
        let txtAnos = document.getElementById('txtanos')
        let res = document.querySelector('div.res')

        txtCigarros.value = ''
        txtAnos.value = ''
        res.innerText = ''
        
        txtDias.focus()
    }

