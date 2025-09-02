/*  Code javascript qui permet de gerer la page d'accuiel après la connexion sur le site en intégrant votre nom et information personnelle fourni lors de l'inscription*/
const recuperer= document.getElementById('papa')
document.addEventListener('DOMContentLoaded',()=>{
    const feuill= localStorage.getItem('feuille')
    const lai= localStorage.getItem('lait')
    const newp= document.createElement('p')
    newp.innerHTML= 'Bonjour,soyez le bienvenue cher (Mr/Mme)'
    newp.style.margin='0px'
    document.getElementById('papa').append(newp,feuill," ",lai)
})
const recuperer2= document.getElementById('papo')
document.addEventListener('DOMContentLoaded',()=>{
    const feuill= localStorage.getItem('feuille')
    const lai= localStorage.getItem('lait')
    document.getElementById('papo').append(feuill," ",lai)
})


