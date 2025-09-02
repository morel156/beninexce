/* Code javascript qui permet de sécuriser la page de connexion après la création du compte , qui peut refuser tes identifiants si tu n'as jamais créer de comptes*/
const feuill= localStorage.getItem('feuille')
const lemot2= localStorage.getItem('motdepasse')
console.log(feuill)
console.log(lemot2)
document.getElementById('start').addEventListener('submit',(e)=>{
    const from= e.currentTarget
    const data= new FormData(from)
    let la= data.get('nome')
    console.log(la)
    if( la == feuill ){
        
    }else{
        e.preventDefault()
        const newpa= document.createElement('p')
        newpa.textContent='votre nom est incorrecte, vueillez saisir un nom de compte'
        document.getElementById('para').append(newpa)
    }
    let le= data.get('passewd')
    console.log(le)
    if( le == lemot2){
        
    }else{
        e.preventDefault()
        const newpa2= document.createElement('p')
        newpa2.textContent='votre mot de passe est incorrecte'
        document.getElementById('para2').append(newpa2)
    }
})

