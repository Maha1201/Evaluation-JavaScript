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

document.getElementById("commande").innerHTML = ("Le prix à payer pour votre commande s'élève à : " + PAP + "€.");