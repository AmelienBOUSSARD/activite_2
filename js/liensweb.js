/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});
//Bouton d'affichage du formulaire
var affichageFormBouton = document.getElementById("ajoutForm");

//Element Formulaire et ses éléments enfants
var formElt = document.getElementById("ajoutLien");
var ateurElt = formElt.elements.auteur;
var titreElt = formElt.elements.titre;
var urlElt = formElt.elements.url;
var validFormBouton = formElt.elements.bouton;

//Elements du messages de confirmation
var messageAjout = document.getElementById("messageAjout");
var messageTitre = document.getElementById("titre");

// Animations et validation du formulaire
formElt.addEventListener('submit', function(event){

    affichageFormBouton.style.display = "inline-block";
    formElt.style.display = "none";
    event.preventDefault();

    afficheMessage();
    resetChampsForm();
});

//Affichage du formulaire d'ajout
affichageFormBouton.addEventListener('click', function(){
    affichageFormBouton.style.display = "none";
    formElt.style.display = "block";
});

function afficheMessage(){
    messageTitre.textContent = titreElt.value;
    messageAjout.style.display = "block";
    setTimeout(function(){messageAjout.style.display = "none";}, 2000);
}

function resetChampsForm(){
    for (i=0; i<3; i++){
        formElt.elements[i].value = "";
    }
}
