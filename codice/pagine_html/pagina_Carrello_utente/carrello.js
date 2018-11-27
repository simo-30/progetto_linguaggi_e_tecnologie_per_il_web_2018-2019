/*
    libreria per la gestione del carrello
*/

function stampaStorageSemplice(){
    var l=localStorage.length;
    var carr=new String("<h3>Questo è il carrello</h3>");
    var i;
    for (i=0; i<l; i++) {
        carr+=JSON.stringify(localStorage.getItem(localStorage.key(i)))+"<br>";
    }
    document.getElementById("vistaStorage").innerHTML=carr;
    return true;
}