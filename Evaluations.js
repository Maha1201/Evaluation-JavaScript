document.getElementById("button1").addEventListener("click", () => {

// Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux

let age = window.prompt("Entrez l'age, 100+ pour arrêter");
let jeunes = 0;
let moyens = 0;
let vieux = 0;

while(age < 100){

    if(age < 20){
        jeunes++;
    }
    else{
        if((20 <= age) && (age <= 40)){ //  20 < age < 40 ne marche pas avec le navigateur ?
            moyens++;
        }
        else{
            if(40 < age){
                vieux++;
            }
        }
    }

    console.log(jeunes);
    console.log(moyens);
    console.log(vieux);

    age = window.prompt("Entrez l'age, 100+ pour arrêter");
}

document.getElementById("text1").innerHTML = ("Jeunes : " + jeunes + "<br> <br>Moyens : " + moyens + "<br> <br>Vieux : " + (vieux+1));
    
});


document.getElementById("button2").addEventListener("click", () => {

    // Exercice deux

    var x = window.prompt("Entrez un chiffre");
    let resultat = 0;

    console.log(x);

    function TableMultiplication(x){

        let i;
        for(i=1 ; i <=10 ; i++){

            resultat = parseInt(i) * parseInt(x);
            document.getElementById("text2").innerHTML += ("<br>" + i + " x " + x + " = " + resultat); // Ne marche pas avec cet appel
            // texte = window.document.write(i + " x " + x + " = " + resultat + "<br><br>");

            console.log(i);
            console.log(x);
            console.log(resultat);
            console.log(i + " x " + x + " = " + resultat);
        }
    }

    TableMultiplication(x);
});

document.getElementById("button3").addEventListener("click", () => {

    // Exercice trois

    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

    let recherche = window.prompt("Quel prénom souhaitez vous chercher ?");
    let n1;

    while(tab.indexOf(recherche) == -1){ // Si "recherche" n'est pas trouvé dans tab, alors la condition est vraie
        
        alert("Le prénom " + recherche + " n'est pas dans la liste :(");
        recherche = window.prompt("Quel prénom souhaitez vous chercher ?");
    }


    for (;tab.indexOf(recherche) > -1;){

        n1 = tab.indexOf(recherche);
        tab.splice(n1,1);  // n1 est l'emplacement recherché, 1 signifie qu'on commence par la case une du tableau
        tab.push(""); // Permet d'ajouter "" à la fin du tableau
    }

    document.getElementById("text3").innerHTML = ("Le tableau : " + tab);
    console.log(tab);
});

document.getElementById("button4").addEventListener("click", () => {

    // Exercice quatre
    
    let PU = window.prompt("Saisir le prix à l'unité");
    let QTECOM = window.prompt("Saisir la quantité commandée");
    let PAP = 0;
    let TOT = PU * QTECOM;
    let REM = 0;
    let PORT;
    
    console.log("Le total vaut : " + TOT);
    
    
    if(TOT >= 100 && TOT <= 200){
        REM = (5 / 100) * TOT; // 5% de TOT
        console.log("Remise de : " + REM);
        PAP = TOT - REM;
    }
    else if(TOT > 200){
        REM = (10 / 100) * TOT;
        console.log("Remise de :" + REM);
        PAP = TOT - REM;
    }
    else{
        PAP = TOT;
    }
    
    console.log("Prix à payer avant frais de port : " + PAP);
    
    if(PAP > 500){
        PAP = PAP + 0;
    }
    else{
        PORT = (2 / 100) * PAP; // Calculer 2% du prix à payer, les frais de port doivent dépasser 6€ sinon on facture 6€
        if(PORT < 6){
            PORT = 6;
        }
        PAP = PAP + PORT;
    }
    
    PAP = Math.round(PAP * 100) / 100; // Arrondi au centième près
    
    document.getElementById("text4").innerHTML = ("Le prix à payer pour votre commande s'élève à : " + PAP + "€.");

});