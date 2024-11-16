/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/

function changeCouleur(event) {
    document.body.style.backgroundColor = event.currentTarget.value;
}

const inputRadioElements = document.querySelectorAll('input[type=radio]');

for (const inputRadioElement of inputRadioElements) {
    if (inputRadioElement.checked) {
        document.body.style.backgroundColor = inputRadioElement.value;
    }
}

document.getElementById('rouge').addEventListener('change',changeCouleur);
document.getElementById('vert').addEventListener('change',changeCouleur);
document.getElementById('bleu').addEventListener('change',changeCouleur);
document.getElementById('jaune').addEventListener('change',changeCouleur);
