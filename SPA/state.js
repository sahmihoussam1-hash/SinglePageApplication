
import { chargerLivres, sauvegarderLivres } from './storage.js';
//  en cherche directement ce qui est stocker en localstorage
export let livres = chargerLivres();
// fonction ajouter un livre complet
export function ajouterLivre(title,auteur,annee, genre, status, description) {
   const Id = livres.length ? Math.max(...livres.map(l => l.id)) + 1 : 1;

   const nvLivre = {
    id:Id,
    title: title,
    auteur: auteur,
    annee: annee,
    genre: genre,
    statut: status,
    description: description
  };

  livres.push(nvLivre);

  sauvegarderLivres(livres);
}
// function pour la supprime des livres 
export function supprimerLivre(Id){
  const index = livres.findIndex(livre => livre.id === Id);
  if (index !== -1){
    livres.splice(index,1)
    sauvegarderLivres(livres);
 }
}