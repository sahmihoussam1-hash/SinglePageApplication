// import { livres } from "./state";

// function pour afficher les livres ajouter 
export function afficherLivres(tableauLivres) {
  // On cible bien "books-list" comme dans ton HTML
  const conteneurLivres = document.getElementById('books-list');

  if (!conteneurLivres) return;

  conteneurLivres.innerHTML = '';

  if (tableauLivres.length === 0) {
    conteneurLivres.innerHTML = `<p class="text-slate-400 italic col-span-full text-center py-4">Aucun livre pour le moment. Ajoute ton premier livre !</p>`;
    return;
  }

  tableauLivres.forEach(livre => {
    const carte = document.createElement('div');
    carte.className = "bg-white p-4 rounded-lg shadow border border-slate-200 flex flex-col justify-between";

    carte.innerHTML = `
      <div>
        <div class="flex justify-between items-start">
          <h3 class="text-lg font-bold text-slate-900">${livre.title}</h3>
          <span class="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-full font-medium">${livre.genre}</span>
        </div>
        <p class="text-sm my-2 text-slate-600">
          Par <span class="font-medium text-slate-800">${livre.auteur}</span> (${livre.annee})
        </p>
        <p class="text-sm my-3 text-slate-500">${livre.description}</p>
      </div>
      <div class="flex justify-between items-center pt-3 border-t border-slate-100 text-xs">
        <span class="italic text-slate-500">Statut : ${livre.statut}</span>
        <div class="flex gap-2">
          <button class="bg-slate-200 hover:bg-slate-300 text-slate-700 p-2 rounded transition">Modifier</button>
          <button data-id="${livre.id}" class="supprimer-btn bg-rose-100 hover:bg-rose-200 text-rose-700 p-2 rounded transition">Supprimer</button>
        </div>
      </div>
    `;
    conteneurLivres.appendChild(carte);
  });
}