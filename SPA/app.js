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
   import { livres, ajouterLivre,supprimerLivre,modifierLivre,trierLivre} from './state.js';
   import { afficherLivres } from './ui.js';

const formulaireLivre = document.getElementById("book-form");
const conteneurLivres = document.getElementById("books-list");
// variable pour voir si on est en train de modifier un livre (contient son id ou null)
let idLivreEnCoursDeModif = null;

// Afficher les livres vides ou existants au démarrage
afficherLivres(livres);

// 1. Gestion de la soumission du formulaire (AJOUTE ou MODIFICATION)
if (formulaireLivre) {
  formulaireLivre.addEventListener('submit', (evenement) => {
    evenement.preventDefault();

    const titre = document.getElementById('title').value;
    const auteur = document.getElementById('auteur').value;
    const annee = document.getElementById('annee').value;
    const genre = document.getElementById('genre').value;
    const statut = document.getElementById('status').value;
    const description = document.getElementById('description').value;

  if (idLivreEnCoursDeModif !== null){
// si on est en mode modification en met a jour le livre existant 
modifierLivre(idLivreEnCoursDeModif,titre,auteur,annee,genre,statut,description);
// on remet le variable a null pour repasseren mode "Ajout"
  idLivreEnCoursDeModif = null;
} else {
  // sinon c un ajout normale 
    ajouterLivre(titre, auteur, annee, genre, statut, description);
    }
    // On met à jour l'affichage et on vide le formulaire
    afficherLivres(livres);
    formulaireLivre.reset();
  });
}

// Gestion de ( la suppresion  + la modification )
if (conteneurLivres){
  conteneurLivres.addEventListener('click',(evenement) => {
   //  1 Cas-Supprimer //
    const buttonSupprimer = evenement.target.closest('.supprimer-btn');
if (buttonSupprimer){
    const idLivre = buttonSupprimer.getAttribute('data-id');
     // on supprime du localestorage
        supprimerLivre(Number(idLivre));
         // et puis on met a jour l affichage du livre 
          afficherLivres(livres);
}
   // 2 Cas-modification //
   const buttonModifier = evenement.target.closest('.modifier-btn');
    if (buttonModifier){
     const idLivre = buttonModifier.getAttribute('data-id');

     // on cherche le livre correspendant dans tableau 
     const livreAModifier = livres.find(l => l.id === Number(idLivre));

     if (livreAModifier){
      // on pre-remplit la formulaire avec les infos du livre 
    document.getElementById('title').value = livreAModifier.title;
    document.getElementById('auteur').value = livreAModifier.auteur;
    document.getElementById('annee').value = livreAModifier.annee;
    document.getElementById('genre').value = livreAModifier.genre;
    document.getElementById('status').value = livreAModifier.statut;
    document.getElementById('description').value = livreAModifier.description;

    // on memorise l'id pour que le submit sache qu'on a modifier 
    idLivreEnCoursDeModif = livreAModifier.id;
     }
    }
   });
   }
  

   const inputRecherche = document.getElementById('search-input');

if (inputRecherche) {
  inputRecherche.addEventListener('input', (evenement) => {
    // 1. Récupérer le texte tapé et le mettre en minuscules pour éviter les soucis de casse
    const termeRecherche = evenement.target.value.toLowerCase().trim();

    // 2. Filtrer le tableau des livres (par titre ou par auteur)
    const livresFiltres = livres.filter(livre => {
      const titreMatch = livre.title.toLowerCase().includes(termeRecherche);
      const auteurMatch = livre.auteur.toLowerCase().includes(termeRecherche);
      
      return titreMatch || auteurMatch; // Garde le livre si l'un des deux correspond
    });

    // 3. Afficher uniquement les livres filtrés à l'écran
    afficherLivres(livresFiltres);
  });
}
const selectTri = document.getElementById('sort-select');

if (selectTri) {
  selectTri.addEventListener('change', (evenement) => {
    trierLivre(evenement.target.value);
    afficherLivres(livres);
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