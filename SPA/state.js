//  liste de livres (commence vide)
export let livres = [];

// fonction simple pour ajouter un livre complet
export function ajouterLivre(title,auteur,annee, genre, status, description) {
  const nvLivre = {
    id: livres.length ? Math.max(...livres.map(l => l.id)) + 1 : 1,
    title: title,
    auteur: auteur,
    annee: annee,
    genre: genre,
    statut: status,
    description: description
  };

  livres.push(nvLivre);
}
