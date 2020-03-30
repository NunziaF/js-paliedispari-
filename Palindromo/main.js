// Chiedo a utente di inserire come input una parola
// Verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;

// chiediamo all'utente di inserire una parola

var parolaUtente = prompt("Inserisci una parola");

var msg;

//creo una funzione per l'inversione di una parola

function reverseString(parola) {
  return parola.split("").reverse().join("");
}

// verifico se la parola inserita dall'utente è palindroma

if (parolaUtente === reverseString (parolaUtente)) {
  msg = parolaUtente + " è una parola palindroma";
} else {
  msg = parolaUtente + " non è una parola palindroma";
}

// Stampo il risultato in pagina

document.getElementById("palindroma").innerHTML = msg;
