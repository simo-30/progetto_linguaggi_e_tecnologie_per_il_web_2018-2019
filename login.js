/*
    funzioni per il login degli utenti
*/

function identificati() {
    var mail=document.log.inputEmail.value;
    var passw=document.log.inputPassword.value;
    var n, c, user;
    var i;
    var l=localStorage.length;
    for (i=0; i<l; i++) {
        var key=localStorage.key(i);
        var o=JSON.parse(localStorage.getItem(key));
        if (o.email!="" && o.email==mail) {
            if (o.password==passw) {
                n=o.nome;
                c=o.cognome;
                user=o.username;
                alert("Bentornato "+n+" "+c+"\nDetto "+user);
                return true;
            }
            else {
                alert("Hai inserito una password sbagliata!\nRiprova");
                return false;
            }
        }
        else {
           alert("Riempi tutti i campi");
           return false; 
        }
    }
    alert("Non sei ancora registrato, effettua una nuova registrazione!");
    return false;
}