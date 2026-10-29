// create livre
// let formTitle = document.getElementById("book-form");
// let titre = document.getElementById("title");
// let auteur = document.getElementById("author");
// let annee = document.getElementById("year");
// let genre = document.getElementById("genre");
// let statut = document.getElementById("status");
// let description = document.getElementById("description");
// let submit = document.getElementById("submit-btn");

// console.log(formTitle, titre,auteur,annee,genre,description,submit,statut);
// create livre
// save localStorage
// clear inputs 
// read 
// delete 
// update 
// search
// clean data
   import { livres, ajouterLivre,supprimerLivre } from './state.js';
   import { afficherLivres } from './ui.js';

const formulaireLivre = document.getElementById("book-form");
// on va recuperer la liste html qui contiennent les livres 
const conteneurLivres = document.getElementById("books-list");

// Afficher les livres vides ou existants au démarrage
afficherLivres(livres);
// gestion de l'ajoute d'un livre suivant notre formulaire 
if (formulaireLivre) {
  formulaireLivre.addEventListener('submit', (evenement) => {
    evenement.preventDefault();

    const titre = document.getElementById('title').value;
    const auteur = document.getElementById('auteur').value;
    const annee = document.getElementById('annee').value;
    const genre = document.getElementById('genre').value;
    const statut = document.getElementById('status').value;
    const description = document.getElementById('description').value;

    // 1. On ajoute le livre dans le state
    ajouterLivre(titre, auteur, annee, genre, statut, description);

    // 2. On met tout de suite à jour l'affichage sur l'écran !
    afficherLivres(livres);

    // 3. On réinitialise le formulaire
    formulaireLivre.reset();
  });
}
// Gestion de la suppresion d un livre 
if (conteneurLivres){
  conteneurLivres.addEventListener('click',(evenement) => {
    // si l element cliquer possede la classe (supp-btn)
    if (evenement.target.classList.contains('supprimer-btn')){
      // on recupere l'id stocker dans l'attribut data-id du button 
      const idLivre = evenement.target.getAttribute('data-id');
        // on supprime du localestorage
        supprimerLivre(Number(idLivre));
        // et puis on met a jour l affichage du livre 
        afficherLivres(livres);
      }
    });
}
























































































// On teste l'ajout d'un faux livre pour voir si la machine marche
// ajouterLivre(
//   "Le Petit Prince", 
//   "Antoine de Saint-Exupéry", 
//   1943, 
//   "Roman", 
//   "read", 
//   "Un magnifique conte philosophique."
// );

// // On affiche le contenu du tableau dans la console
// console.log("Mes livres actuels :", livres);