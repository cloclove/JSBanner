
//On selectionne et stocke la div modal container caché et s'affichera au scroll
const modal = document.querySelector('.modal-container');
console.log(modal);

const promo = document.querySelector('.modal-details');
console.log(promo);

// On selectionne le boutton qui va afficher le code
const btn = document.querySelector('.btn-success');
console.log(btn);

//On selectionne le code caché
const code = document.querySelector('.code');
console.log(code);

// On selectionne l'icone qui fermera la page modal container
const icone = document.querySelector('.fa-times');
console.log(icone);

window.addEventListener('scroll', displayModal)

function displayModal(){
    console.log('défilement detecté');
    let hauteur = document.documentElement.scrollTop;
    console.log(hauteur, 'nombre de pixel depuis le haut de la page');

    if (820<hauteur){
        console.log('Affiche modal');
        modal.style.display = "flex";
        promo.style.animation = "mynewmove 2s ";
        modal.style.animation = "name-of-animation 2s ";
    }
};
btn.addEventListener ('click',function(){
    console.log('bouton cliqué');
    // Je rends visible le code
    code.style.display = "block";
    btn.style.display = "none";
});
 icone.addEventListener('click',function(){
    console.log('icone cliquée');
    modal.style.display = "none";
    
 });