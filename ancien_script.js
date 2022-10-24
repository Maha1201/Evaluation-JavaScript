
// ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$ regex mail askip
// https://regexr.com/3e48o

function tention(){

    const formulaire = document.getElementById("formulaire"); // prends constament l'id du formulaire 

    document.getElementById("envoyer").addEventListener("submit", () => { // submit ou click ????? renvoi pas la mm chose

        let nom = document.getElementById("nom").value;
        let prenom = document.getElementById("prenom").value;
        let date = document.getElementById("date").value;
        let cp = new RegExp("^[0-9]{5}$");
        let codePostal = cp.test(document.getElementById("codepostal").value);
        let email = document.getElementById("email").value;
        let valeur = sujet.selectedIndex;
        let commentaire = document.getElementById("commentaire").value;

        if(nom == ""){
            alert("Entrez votre nom !");
            formulaire.addEventListener("submit", (event) => { // Empêche le formulaire de s'envoyer
                event.preventDefault();
            });
            // document.getElementById("nom").textContent = ("Entrez un nom"); // Affiche r
            return false;
        }

        if(prenom == ""){
            alert("Entrez votre prénom !");
            formulaire.addEventListener("submit", (event) => { // Empêche le formulaire de s'envoyer
                event.preventDefault();
            });
            return false;
        }

        if((document.getElementById("feminin").checked != 1) && (document.getElementById("masculin").checked != 1)){ // Vérifie si "feminin" ou "masculin" est coché

            alert("Quel est votre sexe ?");
            formulaire.addEventListener("submit", (event) => { // Empêche le formulaire de s'envoyer
                event.preventDefault();
            });
            return false;
        }
    
        if(date == ""){
            alert("Entrez votre date de naissance.");
            formulaire.addEventListener("submit", (event) => { // Empêche le formulaire de s'envoyer
                event.preventDefault();
            });
            return false;
        }
        
        if(codePostal != true){
            alert("Entrez un code postal valide (5 chiffres)");
            formulaire.addEventListener("submit", (event) => { // Empêche le formulaire de s'envoyer
                event.preventDefault();
            });
            return false;
        }
    
        if(email != "@"){
            alert("Entrez un E-mail valide");
            formulaire.addEventListener("submit", (event) => { // Empêche le formulaire de s'envoyer
                event.preventDefault();
            });
            return false;
        }

        if(valeur == 0){
            alert("Selectionnez un sujet");
            formulaire.addEventListener("submit", (event) => { // Empêche le formulaire de s'envoyer
                event.preventDefault();
            });
            return false;
        }
        
        if(commentaire == ""){
            alert("Ecrivez votre commentaire");
            formulaire.addEventListener("submit", (event) => { // Empêche le formulaire de s'envoyer
                event.preventDefault();
            });
            return false;
        }

        if(document.getElementById("accepter").checked != 1){
            alert("Veuillez accepter le traitement informatique du formulaire !");
            formulaire.addEventListener("submit", (event) => { // Empêche le formulaire de s'envoyer
                event.preventDefault();
            });
            return false;
        }       
    });
}


tention();
