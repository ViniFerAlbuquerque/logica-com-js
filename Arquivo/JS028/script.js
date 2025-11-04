    function analisar() {
        
        const largura = Number(document.getElementById('larguraTerreno').value) 
        const comprimento = Number(document.getElementById('comprimentoTerreno').value)
        const res = document.querySelector('article.res') 

        if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
            alert('[ERRO!] => Insira dados válidos!') 
            return 
        }
        const area = largura * comprimento 
        let classificacao = '' 
        if (area < 100) {
            classificacao = 'Terreno Popular!'
            res.style.color="red"
        } else if (area < 500) {
            classificacao = 'Terreno Master!'
            res.style.color="yellow"
        } else {
            classificacao = 'Terreno VIP!'
            res.style.color="blue"
        }
        res.innerText = `Área : ${area.toFixed(2)}m² | ${classificacao}`

    }