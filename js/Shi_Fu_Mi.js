alert("Salut!! Ca vous dit une petite partie de SHI-FU-MI!??!");
// affiche un message a l'utilisateur //

var userName = prompt("Ok! Pour jouer entrez votre nom: ");

var userChoice = prompt("Alors " + userName + "... pierre, feuille ou ciseaux??");
// l'utilisateur entre des données qui sont stockée dans var userName  puis userChoice //

alert(userChoice + "!! super choix " + userName + "!! Maintenant à l'ordinateur de choisir...");
// affiche les données entrées par l'utilisateur dans le message alert() //

var array = ["pierre","feuille","ciseaux"];
var choice = array[Math.floor(Math.random()*array.length)];
// permet à l'ordinateur de choisir au hasard un élément de array //

alert("L'ordinateur à choisi " + choice);
// message renvoyant le choix de l'ordinateur //

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




