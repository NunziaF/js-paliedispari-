// L'utente sceglie pari o dispari e un numero da 1 a 5
// Generiamo un numero random (da 1 a 5) per il computer
// Sommiamo i due numeri e dichiariamo chi ha vinto

// chiediamo all'utente di scegliere tra pari e dispari

var sceltaUtente = prompt("Benvenuto nel gioco del pari o dispari! Per iniziare a giocare, scegli 'pari' o 'dispari' e sfida il computer");

document.getElementById("scelta").innerHTML = "la tua scelta è " + sceltaUtente;

// genero due numeri random da 1 a 5

function getRandomNumber(min, max){
  var totale = Math.floor(Math.random() * (max - min + 1) + min);
  return totale;
}

var numRandom1 = getRandomNumber(1, 5); //numero utente
var numRandom2 = getRandomNumber(1, 5); //numero computer

document.getElementById("primo_num").innerHTML = "Il tuo numero è " + numRandom1;
document.getElementById("secondo_num").innerHTML = "Il numero del computer è " + numRandom2;

// faccio somma dei 2 numeri

var somma = numRandom1 + numRandom2;

document.getElementById("somma").innerHTML = "La somma dei due numeri è " + somma;

var msg, risultato;

//Verifico se la somma dei due numeri è pari o dispari

if (somma % 2 === 0) {
  risultato = "pari";
} else {
  risultato = "dispari";
}

// Sulla base del risultato della somma verifico se l'user ha vinto

if (risultato === sceltaUtente) {
  msg = "hai vinto";
} else if (risultato !== sceltaUtente){
  msg = "non hai vinto";
}

//Restituisco l'output del vincitore

document.getElementById("Vincitore").innerHTML = "Quindi " + msg;
