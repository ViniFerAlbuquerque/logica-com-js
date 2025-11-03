function verificar () {
    const inputNota1 = document.getElementById('nota1') 
    const inputNota2 = document.getElementById('nota2') 

    const res = document.querySelector('article.res')

    const stringNota1 = inputNota1.value 
    const stringNota2 = inputNota2.value 

    const nota1 = Number(stringNota1) 
    const nota2 = Number(stringNota2) 

    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota2 < 0) {
        alert('[ERRO!] => Insira uma nota válida!') 
        return 
    } 
    let media = (nota1 + nota2) / 2

    if (media <= 4.9) {
        res.innerText = `Média : ${media.toFixed(2)} => Média até 4.9 : REPROVADO!`
        res.style.color = "red"
    } else if (media >= 5 && media <= 6.9) {
        res.innerText = `Média : ${media.toFixed(2)} => Média entre 5.0 e 6.9 : RECUPERAÇÂO!`
        res.style.color = "yellow"
    } else {
        res.innerText = `Média : ${media.toFixed(2)} => Média 7.0 ou superior : APROVADO!`
        res.style.color = "blue"
    }
}