/*
    questa è una nostra libreria JavaScript per la gestione dei vari eventi
    della paginaHamburgeria.html
*/

//variabili globali per le quantità dei prodotti
var poll=0;
var angu=0;
var scott=0;
var casa=0;
var tart=0;
var sals=0;
var a1l=0;
var a05l=0;
var coca=0;
var cocaLattina=0;
var fan=0;
var fanLattina=0;

function incrementa_quant(nome) {
    if (nome=="Hamburger di pollo") {
        poll+=1;
        return poll;
    }
    if (nome=="Hamburger balck angus") {
        angu+=1;
        return angu;
    }
    if (nome=="Hamburger di scottona") {
        scott+=1;
        return scott;
    }
    if (nome=="Hamburger della casa") {
        casa+=1;
        return casa;
    }
    if (nome=="Tartare al naturale di manzo") {
        tart+=1;
        return tart;
    }
    if (nome=="Salsiccia e crauti") {
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
    var prodotto={nome_locale: "Hamburgeria", nome_prodotto: nome, quantita: incrementa_quant(nome), prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+"_"+prezzoUn;
    var valore=JSON.stringify(prodotto);
    localStorage.setItem(chiave, valore);
}

function scrivi_su_localStorage_tavoli(nome) {
    var prodotto={nome_locale: "Hamburgeria", nome_prodotto: nome, quantita: 1, prezzo_unitario: 0};
    var chiave=nome;
    var valore=JSON.stringify(prodotto);
    localStorage.setItem(chiave, valore);
}

function Hamburgerpollo() {
    var o=document.getElementById("bott_pol");
    if (o!=null) {
        scrivi_su_localStorage("Hamburger di pollo", 5.50);
    }
    alert("Hai ordinato un Hamburger di pollo");
}

function Hamburgerangus() {
    var o=document.getElementById("bott_ang");
    if (o!=null) {
        scrivi_su_localStorage("Hamburger angus", 13.50);
    }
    alert("Hai ordinato un Hamburger black angus");
}

function Hamburgerscottona() {
    var o=document.getElementById("bott_scot/");
    if (o!=null) {
        scrivi_su_localStorage("Hamburger di scottona", 12);
    }
    alert("Hai ordinata un Hamburger di scottona");
}

function Hamburgercasa() {
    var o=document.getElementById("bott_casa");
    if (o!=null) {
        scrivi_su_localStorage("Hamburger della casa", 17);
    }
    alert("Hai ordinato un Hamburger della casa");
}

function Tartarealnaturaledimanzo() {
    var o=document.getElementById("bott_tart");
    if (o!=null) {
        scrivi_su_localStorage("Tartare al naturale di manzo", 8.50);
    }
    alert("Hai ordinato una Tartare al naturale di manzo");
}

function Salsicciaecrauti() {
    var o=document.getElementById("bott_sals");
    if (o!=null) {
        scrivi_su_localStorage("Salsiccia e crauti", 6.50);
    }
    alert("Hai ordinato una pizza salsiccia e crauti");
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