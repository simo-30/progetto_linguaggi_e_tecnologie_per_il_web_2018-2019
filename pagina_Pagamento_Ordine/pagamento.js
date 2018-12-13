/*
    script per controllare la form del pagamento
*/

function checkStringIsEmpty(str) {
    if (str=="") {
        alert("Riempi tutti i campi!");
        return false;
    }
    else {
        return true;
    }
}