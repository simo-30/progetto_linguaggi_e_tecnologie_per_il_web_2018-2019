/*
    funzioni per il login degli utenti
*/

function identificati() {
    var mail=document.getElementById("inputEmail").value;
    if (mail=="") {
        alert("Inserisci un'email!");
        return false;
    }
    var passw=document.getElementById("inputPassword").value;
    if (passw=="") {
        alert("Inserisci una password!");
        return false;
    }
    var n, c, user, e, p;
    var i;
    var l=localStorage.length;
    for (i=0; i<l; i++) {
        var key=localStorage.key(i);
        var o=JSON.parse(localStorage.getItem(key));
        e=o.email;
        if (e==mail) {
            p=o.password;
            if (p==passw) {
                n=o.nome;
                c=o.cognome;
                user=o.username;
                var mess="Bentornato "+n+" "+c+"\nDetto anche: "+user;
                alert(mess);
                return true;
            }
            else {
                alert("Hai inserito una password errata");
                return false;
            }
        }
    }
    alert("Non sei ancora registrato, effettua una nuova registrazione!");
    return false;
}
