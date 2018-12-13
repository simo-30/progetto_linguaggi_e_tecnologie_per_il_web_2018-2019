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
    if (isNaN(m)) {
        alert("Inserisci un numero per il mese di scadenza");
        return false;
    }
    if (m<1 || m>12) {
        alert("Il mese di scadenza deve essere compreso tra 1 e 12 inclusi");
        return false;
    }
    var a=document.getElementById("anno").value;
    if (checkStringIsEmpty(a)) {
        return false;
    }
    if (isNaN(a)) {
        alert("L'anno di scadenza deve essere un numero");
        return false;
    }
    if (a<2019 || a>2099) {
        alert("L'anno di scadenza deve essere un numero maggiore di 2018 e minore di 2099");
        return false;
    }
    var c=document.getElementById("cvv").value;
    if (checkStringIsEmpty(c)) {
        return false;
    }
    if (isNaN(c)) {
        alert("Il CVV deve essere un numero");
        return false;
    }
    if (c<100 || c>999) {
        alert("Il CVV deve essere un numero di 3 cifre");
        return false;
    }
    return true;
}