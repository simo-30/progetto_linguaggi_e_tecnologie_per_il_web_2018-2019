/*
    funzioni per il login degli utenti
*/

function identificati() {
    var mail=document.log.inputEmail.value;
    var passw=document.log.inputPassword.value;
    var n, c, user, e;
    var i;
    var l=localStorage.length;
    for (i=0; i<l; i++) {
        var key=localStorage.key(i);
        var o=JSON.parse(localStorage.getItem(key));
        
    }
    alert("Non sei ancora registrato, effettua una nuova registrazione!");
    return false;
}
