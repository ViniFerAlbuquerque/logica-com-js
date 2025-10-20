    function calculo() {
        let txtDias = document.getElementById('txtdias')
        let dias = Number(txtDias.value)
        let res = document.querySelector('div#res')

        if(txtDias.value == '') {
            alert('Digite os dias corretamente!')
        } else if(dias <=0) {
            alert('Salário inexistente!')
        } else {
            salario = dias * (8 * 25)
            res.innerText = `O funcionário irá receber neste mês ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
            
        }
    } 
     
    function limpar() {
        let txtDias = document.getElementById('txtdias')
        let res = document.querySelector('div#res')
        txtDias.value = ''
        res.innerText = ''
        txtDias.focus()
    }