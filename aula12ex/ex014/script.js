function carregar () {
let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
MessageChannel.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora <18) {
    img.src = 'foto-manha.jpg'
    document.body.style.background = '#517ea5'
}else if (hora >= 12 && hora <= 18) {
    img.src = 'foto-tarde.jpg'
    document.body.style.background = '#fcaf57'
}else {
    img.src = 'foto-noite.jpg'
    document.body.style.background = '#2a3c52'
}
}