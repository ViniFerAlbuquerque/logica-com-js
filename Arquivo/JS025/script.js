function verificar() {
    let inputSegmento1 = document.getElementById('segmento1') 
    let inputSegmento2 = document.getElementById('segmento2') 
    let inputSegmento3 = document.getElementById('segmento3') 

    let res = document.querySelector('article.res') 

    let StringSegmento1 = inputSegmento1.value 
    let StringSegmento2 = inputSegmento2.value 
    let StringSegmento3 = inputSegmento3.value 

    let segmento1 = Number(StringSegmento1)
    let segmento2 = Number(StringSegmento2) 
    let segmento3 = Number(StringSegmento3) 

    if (isNaN(segmento1) || isNaN(segmento2) || isNaN(segmento3) || segmento1 <=0 || segmento2 <=0 || segmento3 <=0 ) {
        alert("[ERRO] => Insira valores válidos!")
        return 
    } if (segmento1 < segmento2 + segmento3 && segmento2 < segmento1 + segmento3 && segmento3 < segmento1 + segmento2) {
        res.innerText = 'As medidas formam um triângulo.'
    } else {
        res.innerText = 'As medidas não formam um triangulo!'
    }
}