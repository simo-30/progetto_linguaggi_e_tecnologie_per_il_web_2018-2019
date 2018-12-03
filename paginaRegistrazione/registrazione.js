/*
    libreria per la gestione di ogni nuova registrazione
*/
var num_utente=0;

function scriviSuLocalStorage(obj) {
    var chiave=num_utente;
    localStorage.setItem(chiave, num_utente);
    num_utente+=1;
    return true;
}