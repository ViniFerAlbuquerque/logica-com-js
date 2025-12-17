// 

function sortear() { 
    const numeros = []
    for (let i = 0; i < 20; i++) {
        const n = Math.floor(Math.random() * 11)
        numeros.push(n)
        
        const alvo = document.getElementById('resposta') || document.querySelector('.resposta')
        if (alvo) { alvo.textContent = numeros.join(', ')}
     }
 }