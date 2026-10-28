
// function pour afficher les livres ajouter 
export function afficherLivres(tableauLivres) {
  // On cible "books-list"
  const conteneurLivres = document.getElementById('books-list');

  if (!conteneurLivres) return;

  conteneurLivres.innerHTML = '';

  if (tableauLivres.length === 0) {
    conteneurLivres.innerHTML = `<p class="text-slate-400 italic col-span-full text-center py-4">Aucun livre pour le moment. Ajoute ton premier livre !</p>`;
    return;
  }

  tableauLivres.forEach(livre => {
    const carte = document.createElement('div');
    
    carte.className = "bg-white p-4 border rounded mb-3";

    carte.innerHTML = `
      <h3 class="font-extrabold text-lg text-center">${livre.title}</h3>
      <p><strong>Auteur :</strong> ${livre.auteur}</p>
      <p><strong>Année :</strong> ${livre.annee}</p>
      <p><strong>Genre :</strong> ${livre.genre}</p>
      <p><strong>Statut :</strong> ${livre.statut}</p>
      <p class="my-2">${livre.description}</p>
      <div>
        <button class="bg-gray-200 px-2 py-1 rounded text-sm">Modifier</button>
        <button data-id="${livre.id}" class="supprimer-btn bg-red-200 px-2 py-1 rounded text-sm">Supprimer</button>
      </div>
    `;
    conteneurLivres.appendChild(carte);
  });
}