 function calcular() {
    let txtNomeAluno = document.getElementById('txtnome')
    let txtNota1 = document.getElementById('txtnota1')
    let txtNota2 = document.getElementById('txtnota2')
    let res = document.getElementById('res')

    let stringNomeAluno = txtNomeAluno.value 

    if (stringNomeAluno.trim() === '') {
        alert('Insira o nome do aluno!')
        return
    }

    let stringNota1 = txtNota1.value 
    let stringNota2 = txtNota2.value 

    let nota1 = Number(stringNota1)
    let nota2 = Number(stringNota2)

    if (isNaN(nota1) || isNaN(nota2)) {
        alert('Insira valores válidos para as notas.')
        return 
    }

    let notaMedia = (nota1 + nota2) / 2
    res.innerText = `O aluno(a) ${stringNomeAluno} teve nota média de : ${notaMedia}
    ` 

    if (notaMedia >= 7) {
        res.innerText += `Aluno(a) APROVADO(A)!`;res.style.color="blue"
    } else {
        res.innerText += `Aluno(a) REPROVADO(A)!`;res.style.color="#550000"
    }
 }