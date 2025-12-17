const resposta = document.querySelector('div.resposta')



// document.getElementById('button').onclick = sortear()

function sortear() {
    alert("Função")



    let contador = 0

    let exibicao = []

    let maior5 = 0
    let divisivel3 = 0

    while (contador < 20) {
        let numeros = Math.floor(Math.random() * 11)
        exibicao.push(numeros)
        if (numeros > 5) {
            maior5++
        } else if (numeros % 3 == 0 && numeros != 0) {
            divisivel3++
        }
        contador++
    }
    // const resposta = document.querySelector('div.resposta')

    resposta.innerHTML = <p>`Números sorteados: ${exibicao.join(' , ')}`</p>

    resposta.innerHTML += `<p>Maiores que 5: ${maior5} números
                            Divisível por 3: ${divisivel3} números</p>`
}

