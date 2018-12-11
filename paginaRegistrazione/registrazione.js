/*
    libreria per la gestione di ogni nuova registrazione
*/

function controllaSeGiaPresente(e) {
    var i;
    var l=localStorage.length;
    for (i=0; i<l; i++) {
        var o=JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (o.email!=null && o.email==e) {
            alert("Sei già registrato, accedi con le tue credenziali");
            return true;
        }
    }
    return false;
}

function registra() {
    var n, c, e, p, u;
    e=document.getElementById("inputEmail").value;
    if (e=="") {
        alert("Inserisci un'email!");
        return false;
    }
    if (controllaSeGiaPresente(e)) {
        return true;
    }
    n=document.getElementById("inputName").value;
    c=document.getElementById("inputCognome").value;
    p=document.getElementById("inputPassword").value;
    u=document.getElementById("inputUsername").value;
    if (n=="" || c=="" || p=="" || u=="") {
        alert("Riempi tutti i campi!!");
        return false;
    }
    var ut={nome: n, cognome: c, email: e, password: p, username: u};
    var valore=JSON.stringify(ut);
    var chiave="Utente_"+e;
    localStorage.setItem(chiave, valore);
    alert("Ti sei registrato con successo\nAccedi con le credenziali appena inserite");
    return true;
}
