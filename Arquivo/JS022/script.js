function verificar() {
    let txtAno = document.getElementById('txtano')
    let res = document.querySelector('div.res')

    let stringAnoNascimento = txtAno.value 
    let anoNascimento = Number(stringAnoNascimento) 

    if (isNaN(anoNascimento) || anoNascimento <=0) {
        alert('[ERRO] Insira um valor válido!')
        return
    }
    let anoAtual = new Date().getFullYear()
    let idade = anoAtual - anoNascimento

    if (idade < 18) {
        let idadeMenor18 = 18 - idade 
        res.innerText = `Idade : ${idade} anos 
         Falta ${idadeMenor18} ano(s) para o alistamento.` 
    } else if (idade > 18) {
        let idadeMaior18 = idade - 18 
        res.innerText = `Idade : ${idade} ano(s) 
         Já se passou ${idadeMaior18} ano(s) do alistamento.`
    } else {
        res.innerText = `Idade : ${idade} anos 
         Idade de seleção para o serviço militar obrigatório!`
    }
}