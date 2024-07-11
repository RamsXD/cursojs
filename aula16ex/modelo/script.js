let num = document.getElementById('numero')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []


function adicionar() {
    let numero = Number(num.value)
    if (numero < 1 || numero > 100 || valores.includes(numero)) {
        alert('Valor inválido ou já adicionado na lista')
    } else {
        valores.push(numero)
        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        lista.appendChild(item)
        
    }
}
function finalizar() {
    let numcad = (valores.length)
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    
    
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
        
        if (valores[i] > maior) {
            maior = valores[i]
        }
        
        if (valores[i] < menor) {
            menor = valores[i]
        }
        
    } 
    
    let media = soma / numcad
    
        

    


    res.innerHTML = `Ao todo, temos ${numcad} números cadastrados.`
    res.innerHTML += `<br>O maior valor informado foi ${maior}.`
    res.innerHTML += `<br>O menor valor informado foi ${menor}`
    res.innerHTML += `<br>Somando todos os valores, temos ${soma}.`
    res.innerHTML += `<br>A média dos valores digitados é ${media}`
}