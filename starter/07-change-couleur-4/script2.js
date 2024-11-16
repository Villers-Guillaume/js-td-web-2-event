/*
EXERCICE 6 : Change couleur (4) - v2
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 2 : une seule fonction qui utilise e.target pour s'adapter au  bouton sur lequel on clique
AJOUT : Quand on clique sur le bouton, la couleur de fond de la page change de manière aléatoire
*/
document.getElementById(id.currentTarget).addEventListener('change',(event)=>{
    document.body.style.backgroundColor = event.currentTarget.value;
})

document.getElementById('boutonCouleur').addEventListener('click', ()=>{

})