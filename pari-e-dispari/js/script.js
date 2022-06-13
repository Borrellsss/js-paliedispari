// L’utente sceglie pari o dispari e
// inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per
// il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri
// è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// *FUNCTION*
// creo la funzione "evenOrOdd" che determina se la somma di
// due numeri (uno fornitomi dall'utente e uno
// generato randomicamente per il computer)
// è pari o dispari e ritorno "result" che avrà
// salvato al suo interno il risultato desiderato.
function evenOrOdd (num1, num2) {

    let result;

    let sum = num1 + num2;

    if (sum % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }

    return result;
}

let userEvenOrOdd;

// controllo che l'input ricevuto dall'utente rispetti
// determinate condizioni. se l'utente non iserisce "pari"
// o "dispari" richiederò all'utente di scegliere o uno o l'altro.
do {
    userEvenOrOdd = prompt("scegli pari o dispari").toLowerCase();
} 
while ( !( userEvenOrOdd === "pari" || userEvenOrOdd === "dispari") );

let userNumber;

// controllo che l'input ricevuto dall'utente rispetti
// determinate condizioni. se l'utente inserisce un numero minore di 1
// o maggiore di 5 chiderò di nuovo di sceglerne uno compreso tra questi due.
do {
    userNumber = parseInt(prompt("dammi un numero da 1 a 5"));
} 
while ( userNumber < 1 || userNumber > 5 );

const randomComputerNumber = Math.floor(Math.random() * 5) + 1;

const gameResult = evenOrOdd(userNumber, randomComputerNumber);

// se il risultato della funzione corrisponde a "userEvenOrOdd"
// l'utente avrà vinto la partita se non corrisponde avrà perso.
// stampo il risultato in pagina con un alert.
if (gameResult === userEvenOrOdd) {
    alert("hai vinto!");
} else {
    alert("hai perso...");
}