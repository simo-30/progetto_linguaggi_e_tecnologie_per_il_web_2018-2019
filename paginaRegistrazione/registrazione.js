/*
    libreria per la gestione di ogni nuova registrazione
*/

function controllaSeGiaPresente(e) {
    var i;
    var l=localStorage.length;
    for (i=0; i<l; i++) {
        var o=JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (o.email!=null && o.email==e) {
            return true;
        }
    }
    return false;
}

function registra() {
    var n, c, e, p, u;
    e=document.reg.inputEmail.value;
    if (controllaSeGiaPresente(e)) {
        alert("Sei già registrato, accedi con le tue credenziali");
        return false;
    }
    n=document.reg.inputName.value;
    c=document.reg.inputCognome.value;
    p=document.reg.inputPassword.value;
    u=document.reg.inputUsername.value;
    var ut={nome: n, cognome: c, email: e, password: p, username: u};
    var valore=JSON.stringify(ut);
    var chiave="Utente_"+e;
    localStorage.setItem(chiave, valore);
    alert("Ti sei registrato con successo\nAccedi con le credenziali appena inserite");
    return true;
}