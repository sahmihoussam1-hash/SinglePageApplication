// fct pour recuperer les livres stocker.On va chercher dans la "boîte" du navigateur l'élément qui porte l'étiquette "mesLivres".
export function chargerLivres(){
    const donnes = localStorage.getItem("mesLivres");
// si oui on a trouver des donnes on doit les transformer en un tableau 
if (donnes !== null){
    return JSON.parse(donnes);
}
// si non (on a rien trouver en retourve un tableau vide)
else {
    return [];
}
}
// on doit ecrire une fct mtn pour sauvegarder le tableau de livres 
export function sauvegarderLivres(tableauLivres){
    // mtn on est besoin de transformer ce tableau en string pour le stocker au navigateur 
    const texteDonnes = JSON.stringify(tableauLivres);
    //et finalement en l enregistre sous localstorage sous le cle "mes livres"
    localStorage.setItem("mesLivres",texteDonnes);
}
