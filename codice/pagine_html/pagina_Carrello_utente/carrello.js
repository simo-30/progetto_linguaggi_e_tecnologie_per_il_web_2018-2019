/*
    libreria per la gestione del carrello
*/

function myRefresh() {
    var tav=leggi_localStorage_tavoli();
    var pr=leggi_localStorage_tavoli();
    for (var i=0; i<pr.name; i++) {
        var obj=JSON.parse(pr[i]);
        alert(JSON.stringify(obj))
    }
}

function leggi_localStorage_prodotti() {
    var i;
    var prodotti= new [];
    var tavoli= new [];
    for (i=0; i<localStorage.length; i++) {
        var prod=localStorage.getItem(localStorage.key(i));
        if (prod.length==3) {
            //tavoli+=prod;
        }
        else {
            prodotti+=prodotti;
        }
    }
    return prodotti;
}

function leggi_localStorage_tavoli() {
    var i;
    var prodotti= new [];
    var tavoli= new [];
    for (i=0; i<localStorage.length; i++) {
        var prod=localStorage.getItem(localStorage.key(i));
        if (prod.length==3) {
            tavoli+=prod;
        }
        /*
        else {
            prodotti+=prodotti;
        }
        */
    }
    return tavoli;
}