/*
    script per controllare la form del pagamento
*/

function checkStringIsEmpty(str) {
    if (str=="") {
        alert("Riempi tutti i campi!");
        return true;
    }
    else {
        return false;
    }
}

function checkForm() {
    var nome=document.getElementById("nomeCarta").value;
    if (checkStringIsEmpty(nome)) {
        return false;
    }
    var num=document.getElementById("numeroCarta").value;
    if (checkStringIsEmpty(num)) {
        return false;
    }
    if (isNaN(num)) {
        alert("Inserisci un numero della carta corretto");
        return false;
    }
    var m=document.getElementById("mese").value;
    if (checkStringIsEmpty(m)) {
        return false;
    }
    return true;
}