var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// let i; // inutile ?

let recherche = window.prompt("Quel prénom souhaitez vous chercher ?");
let n1; // n1 = tab[i]; inutile imo

while(tab.indexOf(recherche) == -1){ // Si "recherche" n'est pas trouvé dans tab, alors la condition est vraie
    
    alert("Le prénom " + recherche + " n'est pas dans la liste :(");
    recherche = window.prompt("Quel prénom souhaitez vous chercher ?");
}


for (;tab.indexOf(recherche) > -1;){

    n1 = tab.indexOf(recherche);
    tab.splice(n1,1);  // n1 est l'emplacement recherché, 1 signifie qu'on commence par la case une du tableau
    tab.push(""); // Permet d'ajouter "" à la fin du tableau
}

document.getElementById("recherche").innerHTML = ("Le tableau : " + tab);
console.log(tab);