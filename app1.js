/*Code javascript qui permet de gérer le formulaire de d'inscription, le stockage en localStorage de quelque informations qui participent au dynamisme de la page
ici j'ai utilisé des fonctions nactives et cotés navigateur de javascript pour atteindre mon objectif*/
document.getElementById('pipo').addEventListener('submit',(e)=>{
    const form = e.currentTarget
    const data= new FormData(form)
    const nom = data.get('nome')
    if (nom.length > 34){
        e.preventDefault()
        const p1= document.createElement('p')
        p1.innerHTML="Votre nom est trop long"
        document.getElementById('1').append(p1)
    }
    const prenom = data.get('firstname')
    if (prenom.length > 34){
        e.preventDefault()
        const p2= document.createElement('p')
        p2.innerHTML="Votre prenom est trop long"
        document.getElementById('2').append(p2)
    }
    const numero = data.get('celphone')
    if (numero.length == 14){
        
    }else{
        e.preventDefault()
        const p3= document.createElement('p')
        p3.innerHTML="Votre numero  ne doit pas depasser 14 ni au dessous "
        document.getElementById('3').append(p3)
    }
    const boite = data.get('Email')
    const table= Array.from(boite)
    if (table.includes('@','.') ){
        
    }else{
        e.preventDefault()
        const p4= document.createElement('p')
        p4.innerHTML="Votre mail doit contenir les caractères '@' et '.' "
        document.getElementById('4').append(p4)
    }
    const motdepassee= data.get('passewd')
    if (motdepassee.length > 8){
        e.preventDefault()
        const p5= document.createElement('p')
        p5.innerHTML="Votre mot de passe ne doit pas depassé 8 caractères "
        document.getElementById('5').append(p5)
    }
    const motdepassee2= data.get('passewdp')
    if (motdepassee2==motdepassee){
        
    }else{
        e.preventDefault()
        const p6= document.createElement('p')
        p6.innerHTML="Erreur, ce que vous avez entrez n'est pas conforme à ca qui à été saisi en haut "
        document.getElementById('6').append(p6)
    }
    const checkboss=document.getElementById('check')
    if(checkboss.checked){

    }else{
        e.preventDefault()
        const p7= document.createElement('p')
        p7.innerHTML="Vous devez acceptez les conditions d'utilisations "
        document.getElementById('7').append(p7)
    }
    

})


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
const phto= document.getElementById('phi')
const lemot= document.getElementById('mt')
lemot.addEventListener('input',()=>{
    localStorage.setItem('motdepasse',lemot.value)
})
const lemot2= localStorage.getItem('motdepasse')

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
    if(lemot2){
        lemot.value=lemot2
    }
    

})

