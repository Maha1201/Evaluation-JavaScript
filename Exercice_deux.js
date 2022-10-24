var x = window.prompt("Entrez un chiffre");
let resultat = 0;

console.log(x);

function TableMultiplication(x){

    let i;
    for(i=1 ; i <=10 ; i++){

        resultat = parseInt(i) * parseInt(x);
        // document.getElementById("produit").innerHTML = i + " x " + x + " = " + resultat; Ne marche pas avec cet appel
        window.document.write(i + " x " + x + " = " + resultat + "<br><br>");

        console.log(i);
        console.log(x);
        console.log(resultat);
        console.log(i + " x " + x + " = " + resultat);
    }
}

TableMultiplication(x);