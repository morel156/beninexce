/* Code javascript qui permet de modifier les informations personnelles une fois son profil créer*/
const papa=document.getElementById('name')
const toto= document.getElementById('prenom')
papa.addEventListener('input',()=>{
    localStorage.setItem('feuille',papa.value)
})
toto.addEventListener('input',()=>{
    localStorage.setItem('lait',toto.value)
})
const mailinput=document.getElementById('mail')
const numinput=document.getElementById('tel')
mailinput.addEventListener('input',()=>{
    localStorage.setItem('mail',mailinput.value)
})
numinput.addEventListener('input',()=>{
    localStorage.setItem('numero',numinput.value)
})
const feuill= localStorage.getItem('feuille')
const lai= localStorage.getItem('lait')
const recuperer3= localStorage.getItem('mail')
const recuperer4= localStorage.getItem('numero')


document.addEventListener('DOMContentLoaded',()=>{
    if(feuill){
        papa.value=feuill
    }
    if(lai){
        toto.value=lai
    }
    if(recuperer3){
        mailinput.value=recuperer3
    }
    if(recuperer4){
        numinput.value=recuperer4
    }
   


})
