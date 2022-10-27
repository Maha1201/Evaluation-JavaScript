var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

let recherche = window.prompt("Quel prénom souhaitez vous chercher ?");
let n1;

let recherche2 = recherche.charAt(0).toUpperCase() + recherche.slice(1).toLowerCase(); // Change la première lettre en majuscule et le reste en minuscule
console.log(recherche2);

while(tab.indexOf(recherche2) == -1){ // Si "recherche" n'est pas trouvé dans tab, alors la condition est vraie
    
    alert("Le prénom " + recherche2 + " n'est pas dans la liste :(");
    recherche = window.prompt("Quel prénom souhaitez vous chercher ?");
    recherche2 = recherche.charAt(0).toUpperCase() + recherche.slice(1).toLowerCase();
    console.log(recherche2);
}


for (;tab.indexOf(recherche2) > -1;){

    n1 = tab.indexOf(recherche2);
    tab.splice(n1,1);  // n1 est l'emplacement recherché, 1 signifie qu'on commence par la case une du tableau
    tab.push(""); // Permet d'ajouter "" à la fin du tableau
}

document.getElementById("recherche").innerHTML = ("Le tableau : " + tab);
console.log(tab);