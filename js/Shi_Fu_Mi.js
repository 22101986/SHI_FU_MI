alert("Salut!! Ca vous dit une petite partie de SHI-FU-MI!??!");

var userName = prompt("Ok! Pour jouer entrez votre nom: ");

var userChoice = prompt("Alors " + userName + "... pierre, feuille ou ciseaux??");

alert(userChoice + "!! super choix " + userName + "!! Maintenant à l'ordinateur de choisir...");

var array = ["pierre","feuille","ciseaux"];

var choice = array[Math.floor(Math.random()*array.length)];

alert("L'ordinateur à choisi " + choice);

function result(userChoice, choice) {
    if(choice === "pierre" && userChoice === "ciseaux"){
        alert("Domage vous avez perdu...");
    };
    if(choice === "pierre" && userChoice === "feuille"){
        alert("Bravo, vous avez gagané!!!");
    };
    if(choice === "pierre" && userChoice === "pierre"){
        alert("Match nul!!!");
    };
    if(choice === "feuille" && userChoice === "pierre"){
        alert("Domage vous avez perdu...");
    };
    if(choice === "feuille" && userChoice === "ciseaux"){
        alert("Bravo, vous avez gagané!!!");
    };
    if(choice === "feuille" && userChoice === "feuille"){
        alert("Match nul!!!");
    };
    if(choice === "ciseaux" && userChoice === "feuille"){
        alert("Domage vous avez perdu...");
    };
    if(choice === "ciseaux" && userChoice === "pierre"){
        alert("Bravo, vous avez gagané!!!");
    };
    if(choice === "ciseaux" && userChoice === "ciseaux"){
        alert("Match nul!!!");
    };
};

result(userChoice, choice);

alert("Partie terminée merci de votre participation " + userName + "!");
alert("POUR REJOUER RAFRAîCHIR LA PAGE... ;)")




