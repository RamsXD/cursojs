function verificar() {
    let p1 = prompt ('Qual era o preço anterior do produto?')   
    if (p1.trim() > 0 && !isNaN(p1)) {
        let p2 = prompt('Qual é o preço atual do produto?')
        if (p2.trim() > 0 && !isNaN(p2)) {                
        let bc = (p2 > p1)? 'mais caro' : 'mais barato' 
        let cs = (p2 > p1)? 'subiu' : 'caiu'
        let dif = Math.abs(p2 - p1)
        let varia = Math.abs((p2 - p1) / p1) * 100
        let varia2 = (p2 > p1)? 'baixo' : 'cima'
            maior.innerHTML = (`Analisando os valores informados`)
            menor.innerHTML = (`O produto custava R$ ${p1},00 e agora custa R$ ${p2},00. <br>
            Hoje o produto está ${bc}. <br>
            O preço ${cs} ${dif},00 em relação ao preço anterior. <br>
            Uma variação de ${varia}% pra ${varia2}.`)                   
                        
        }
    } else {
        alert('Por favor, insira preços válidos.')
    }
}