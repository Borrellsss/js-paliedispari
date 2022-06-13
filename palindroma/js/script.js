// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se
// la parola inserita è palindroma

// *FUNCTION*
// creo la funzione "checkPalindromeWord" per controllare
// che la parola inserita dall'utente sia palindroma o meno.
function checkPalindromeWord (word) {

    // dichiaro la variabile "result" che di default avrà valore "false".
    let result = false;

    // dichiaro la variabile "reversedWord" che di default avrà valore "".
    let reversedWord = "";

    // inizializzo un ciclo "for" per scorrere la parola inserita dall'utente
    // al contrario e la salvo nella variabile "reversedWord" sopra dichiarata.
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    // se la parola inserita dall'utente è uguale a "reversedWord"
    // allora "result" diventerà "true".
    if (word === reversedWord) {
        result = true;
    }

    // ritorno il valore di "result".
    return result;
}

// salvo la parola fornita dall'utente in una variabile "userWord".
const userWord = prompt("Scrivi un nome").toLowerCase();

// controllo che "userWord" sia palindroma tramite la funzione "checkPalindromeWord".
let palindromeResult = checkPalindromeWord(userWord);

// se è palindroma allora l'output sarà "il nome inserito è palindromo",
// se non lo è allora sarà "il nome inserito non è palindromo".
if (palindromeResult) {
    alert("il nome inserito è palindromo");
} else {
    alert("il nome inserito non è palindromo");
}