/*
    questa è una nostra libreria JavaScript per la gestione dei vari eventi
    della pagina armando.html
*/

//variabili globali per le quantità dei prodotti
var marg=0;
var mar=0;
var diav=0;
var foc=0;
var prosc=0;
var sals=0;
var a1l=0;
var a05l=0;
var coca=0;
var cocaLattina=0;
var fan=0;
var fanLattina=0;

function incrementa_quant(nome) {
    if (nome=="Margherita") {
        marg+=1;
        return marg;
    }
    if (nome=="Marinara") {
        mar+=1;
        return mar;
    }
    if (nome=="Diavola") {
        diav+=1;
        return diav;
    }
    if (nome=="Focaccia") {
        foc+=1;
        return foc;
    }
    if (nome=="Prosciutto e scamorza") {
        prosc+=1;
        return prosc;
    }
    if (nome=="Salsiccia e funghi") {
        sals+=1;
        return sals;
    }
    if (nome=="Acqua 1l") {
        a1l+=1;
        return a1l;
    }
    if (nome=="Acqua 0,5l") {
        a05l+=1;
        return a05l;
    }
    if (nome=="Coca-cola 0,5l") {
        coca+=1;
        return coca;
    }
    if (nome=="Coca-cola lattina") {
        cocaLattina+=1;
    }
    if (nome=="Fanta 0,5l") {
        fan+=1;
        return fan;
    }
    if (nome=="Fanta lattina") {
        fanLattina+=1;
        return fanLattina;
    }
}

function scrivi_su_localStorage(nome, prezzoUn) {
    //questa funzione scrive sul localStorage le varie cose ordinate
    var prodotto={nome_locale: "Armando", nome_prodotto: nome, quantita: incrementa_quant(nome), prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+"_"+prezzoUn;
    var valore=JSON.stringify(prodotto);
    localStorage.setItem(chiave, valore);
}

function scrivi_su_localStorage_tavoli(nome) {
    var prodotto={nome_locale: "Armando", nome_prodotto: nome, quantita: 1, prezzo_unitario: 0};
    var chiave=nome;
    var valore=JSON.stringify(prodotto);
    localStorage.setItem(chiave, valore);
}

function margherita() {
    var o=document.getElementById("bott_marg");
    if (o!=null) {
        scrivi_su_localStorage("Margherita", 6);
    }
    alert("Hai ordinato una pizza margheirta");
}

function marinara() {
    var o=document.getElementById("bott_mari");
    if (o!=null) {
        scrivi_su_localStorage("Marinara", 5);
    }
    alert("Hai ordinato una pizza marinara");
}

function diavola() {
    var o=document.getElementById("bott_diav");
    if (o!=null) {
        scrivi_su_localStorage("Diavola", 7.50);
    }
    alert("Hai ordinata una pizza diavola");
}

function focaccia() {
    var o=document.getElementById("bott_foc");
    if (o!=null) {
        scrivi_su_localStorage("Focaccia", 3);
    }
    alert("Hai ordinato una focaccia");
}

function prosciuttoScamorza() {
    var o=document.getElementById("bott_prosc");
    if (o!=null) {
        scrivi_su_localStorage("Prosciutto e scamorza", 7);
    }
    alert("Hai ordinato una pizza prosciutto e scamorza");
}

function salsicciaFunghi() {
    var o=document.getElementById("bott_sals");
    if (o!=null) {
        scrivi_su_localStorage("Salsiccia e funghi", 8);
    }
    alert("Hai ordinato una pizza salsiccia e funghi");
}

function acqua1l() {
    var o=document.getElementById("butt_acqua1l");
    if (o!=null) {
        scrivi_su_localStorage("Acqua 1l", 1.50);
    }
    alert("Hai ordinato una bottiglia di acqua da 1 litro");
}

function acqua05l() {
    var o=document.getElementById("butt_acqua05l");
    if (o!=null) {
        scrivi_su_localStorage("Acqua 0,5l", 0.50);
    }
    alert("Hai ordinato una bottiglia di acqua da mezzo litro");
}

function cola() {
    var o=document.getElementById("butt_cola");
    if (o!=null) {
        scrivi_su_localStorage("Coca-cola 0,5l", 3);
    }
    alert("Hai ordinato una bottiglia di coca-cola da mezzo litro");
}

function colaLattina() {
    var o=document.getElementById("butt_colaLattina");
    if (o!=null) {
        scrivi_su_localStorage("Coca-cola lattina", 2);
    }
    alert("Hai ordinato una lattina di coca-cola");
}

function fanta() {
    var o=document.getElementById("butt_fanta");
    if (o!=null) {
        scrivi_su_localStorage("Fanta 0,5l", 2.50);
    }
    alert("Hai ordinato una bottiglia di fanta da mezzo litro");
}

function fantaLattina() {
    var o=document.getElementById("butt_fantaLattina");
    if (o!=null) {
        scrivi_su_localStorage("Fanta lattina", 1.50);
    }
    alert("Hai ordinato una lattina di fanta");
}

function prenotaTavoli() {
    var o=document.getElementById("butt_prenotaTavoli");
    if (o!=null) {
        if (document.getElementById("tavolo1").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 1 da 4 persone");
            alert("Hai prenotato il tavolo 1 da 4 persone");
        }
        if (document.getElementById("tavolo2").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 2 da 4 persone");
            alert("Hai prenotato il tavolo 2 da 4 persone");
        }
        if (document.getElementById("tavolo3").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 3 da 4 persone");
            alert("Hai prenotato il tavolo 3 da 4 persone");
        }
        if (document.getElementById("tavolo4").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 4 da 4 persone");
            alert("Hai prenotato il tavolo 4 da 4 persone");
        }
        if (document.getElementById("tavolo5").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 5 da 4 persone");
            alert("Hai prenotato il tavolo 5 da 4 persone");
        }
        if (document.getElementById("tavolo6").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 6 da 6 persone");
            alert("Hai prenotato il tavolo 6 da 6 persone");
        }
        if (document.getElementById("tavolo7").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 7 da 6 persone");
            alert("Hai prenotato il tavolo 7 da 6 persone");
        }
        if (document.getElementById("tavolo8").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 8 da 6 persone");
            alert("Hai prenotato il tavolo 8 da 6 persone");
        }
    }
}