var prenom = prompt("Entrez votre prénom :");
alert("Bonjour, " + prenom);
alert("OK, " + prenom + " On va jouer à un petit jeu");

var nb = Number(prompt("Donne moi un nombre entre 1 et 9:"));
if (nb = 1,3,5,7,9) {
    console.log(nb + " est négatif ou nul");
    alert("dommage ;)")
}
else {
    console.log(nb + " est positif !");
    alert("avec le nombre " + nb + ", tu iras trés loin ! Fonce et n'arrète jamais un instant d'y croire !!");
}

var x = Number(prompt("Entrez une valeur :"));
var but = x * 3 - 1;
but += 5;
console.log(but);