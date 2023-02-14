/*

For Hitch
=========

Utilisons le tableau de chaînes de caractères `items` pour présenter chaque entrée dans le DOM.

Objectifs
---------
- Construire une liste HTML (avec des <li>)
- Ajouter la liste dans le ul#result déjà présent dans le HTML

Notions
-------
- DOM : document.getElementById / document.createElement / appendChild
- Array : forEach

*/
console.log('init: exo1');

// DOM  on vient récuperer le ul pour insérer les li que nous venons de créer
const ulElement = document.getElementById("result");
const items = ["Sunglasses", "Suit", "Business card", "Jet ski"];
// on boucle sur items pour pouvoir inserer nos strings dans le li puis insérer les li dans le Ul
items.forEach((item) => {
  const liElement = document.createElement("li");
  liElement.append(item);
  ulElement.append(liElement);
});


