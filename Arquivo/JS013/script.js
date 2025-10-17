function calcular(){
    let txtsalario = document.getElementById('txtsal')
    salario = Number(txtsalario.value)
    let res = document.querySelector('div.res')
    
    if (txtsalario.value == '' || txtsalario.value <= 0) {
        alert('Por favor, inserir o salário primeiro!')
    } else {
        let novoSalario = salario + (salario * 0.15)
        res.innerText = `O salário com o acréscimo de 15% será de ${novoSalario.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`
    }
}