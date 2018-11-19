/*
    questa è una nostra libreria JavaScript per la gestione dei vari eventi
    della pagina armando.html
*/
function scrivi_su_localStorage(nome, quant, prezzoUn) {
    //questa funzione scrive sul localStorage le varie cose ordinate
    var prodotto={nome_prodotto: nome, quantita: quant, prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+quant+"_"+prezzoUn;
    var valore=JSON.stringify(prodotto);
    localStorage.setItem(chiave, valore);
}

function margherita() {
    var o=document.getElementById("bott_marg");
    if (o!=null) {
        scrivi_su_localStorage("Margherita", 1, 6);
    }
    alert("Hai ordinato una pizza margheirta");
}

function marinara() {
    var o=document.getElementById("bott_mari");
    if (o!=null) {
        scrivi_su_localStorage("Marinara", 1, 5);
    }
    alert("Hai ordinato una pizza marinara");
}

function diavola() {
    var o=document.getElementById("bott_diav");
    if (o!=null) {
        scrivi_su_localStorage("Diavola", 1, 7,50);
    }
    alert("Hai ordinata una pizza diavola");
}

function focaccia() {
    var o=document.getElementById("bott_foc");
    if (o!=null) {
        scrivi_su_localStorage("Focaccia", 1, 3);
    }
    alert("Hai ordinato una focaccia");
}

function prosciuttoScamorza() {
    var o=document.getElementById("bott_prosc");
    if (o!=null) {
        scrivi_su_localStorage("Prosciutto e scamorza", 1, 7);
    }
    alert("Hai ordinato una pizza prosciutto e scamorza");
}

function salsicciaFunghi() {
    var o=document.getElementById("bott_sals");
    if (o!=null) {
        scrivi_su_localStorage("Salsiccia e funghi", 1, 8);
    }
    alert("Hai ordinato una pizza salsiccia e funghi");
}