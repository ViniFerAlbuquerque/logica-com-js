function verificar() {
    let inputAno = document.getElementById('txtidade')
    let res = document.querySelector('div.res')
    let stringAno = inputAno.value

    if (stringAno.trim() === '' ) {
        alert('[ERRO] Por favor, digite o ano de nascimento!')
        retrn 
    }
    let anoNascimento = Number(stringAno)

    if (anoNascimento <= 0) {
        alert('[ERRO] Por favor, digite um ano de nascimento válido!')
        return
    }
    //New Date() pega a hora e data do dispositivo do usuário
    //getFullYear() retorna apenas o ano.
    let anoAtual = new Date().getFullYear()
    let calculoIdade = anoAtual - anoNascimento
    
    if (calculoIdade >= 18 && calculoIdade < 70) {
        res.innerText = `Sua idade é ${calculoIdade} anos.
        O voto é obrigatório.`
    } else if (calculoIdade >= 16 || calculoIdade > 70) {
        res.innerText = `Sua idade é ${calculoIdade} anos.
        Você tem idade para votar, mas o voto não é obrigatório.`
    } else {
        res.innerText = `Sua idade é ${calculoIdade} anos.
        Seu voto não é obrigatório!`
    }
}
