
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

document.getElementById("ages").innerHTML = ("Jeunes : " + jeunes + "<br> <br>Moyens : " + moyens + "<br> <br>Vieux : " + (vieux+1));