function Adicionar() {
    let nomef = document.getElementById('txtnomef')
    let salf = document.getElementById('txtsalf')
    let res = document.querySelector('div.res')

    // let salform = salf.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    if(nomef.value == 0 || salf.value == 0) {
        alert ('Insira as informações solicitadas:')
    } else (res.innerHTML=`<p>O(A) funcionário(a) ${nomef.value} teve um salário de ${salf.value} em Novembro!</p>`)
}