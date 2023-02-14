/*
Un peu d'épices…
================
Nous allons faire du "currying", c'est à dire préparer une fonction qui va nous renvoyer une nouvelle fonction préparée.

Objectifs
---------
Changer la couleur du body au clic sur les boutons, le tout avec du currying

- Faire une fonction : applyColor
  - elle prend en paramètre une String représentant une couleur
  - elle retourne une fonction qui modifie le background du body
  - la fonction retournée est un handler à attacher au clic des boutons
  - bonus : on gère une classe selected sur le bouton de la couleur active

Notions
-------
- JS : portée de variable / closure / currying
*/

const whiteButton = document.getElementById("white");
const pinkButton = document.getElementById("pink");

const applyColor = (event) => {
  const btnClicked = event.currentTarget;
  const active = document.querySelector(".selected");
  console.log(btnClicked.id);
  console.log(active);
  if (active !== null) {
    active.classList.remove("selected");
    btnClicked.classList.add("selected");
  } else {
    btnClicked.classList.remove("selected");
    active.classList.add("selected");
  }
  document.body.style.backgroundColor = btnClicked.id;
};
whiteButton.addEventListener("click", applyColor);
pinkButton.addEventListener("click", applyColor);
