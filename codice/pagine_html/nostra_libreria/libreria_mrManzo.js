/*
    questa è una nostra libreria JavaScript per la gestione dei vari eventi
    della pagina MrManzo.html
*/

//variabili globali per le quantità dei prodotti
var tagl=0;
var fiore=0;
var grigl=0;
var BBQ=0;
var tart=0;
var sals=0;

function incrementa_quant(nome) {
    if (nome=="Tagliata di manzo") {
        marg+=1;
        return marg;
    }
    if (nome=="Bistecca fiorentina") {
        mar+=1;
        return mar;
    }
    if (nome=="Grigliata mista di carne") {
        diav+=1;
        return diav;
    }
    if (nome=="BBQ Ribs") {
        foc+=1;
        return foc;
    }
    if (nome=="Tartare naturale di manzo") {
        prosc+=1;
        return prosc;
    }
    if (nome=="Salsiccia e crauti") {
        sals+=1;
        return sals;
    }
}

function scrivi_su_localStorage(nome, prezzoUn) {
    //questa funzione scrive sul localStorage le varie cose ordinate
    var prodotto={nome_locale: "Mr Manzo", nome_prodotto: nome, quantita: incrementa_quant(nome), prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+"_"+prezzoUn;
    var valore=JSON.stringify(prodotto);
    localStorage.setItem(chiave, valore);
}

function scrivi_su_localStorage_tavoli(nome, numPersone) {
    var prodotto={nome_locale: "Mr Manzo", tavolo: nome, numero_persone: numPersone};
    var chiave=nome+"_"+numPersone;
    var valore=JSON.stringify(prodotto);
    localStorage.setItem(chiave, valore);
}

function Tagliatadimanzo() {
    var o=document.getElementById("bott_tagl");
    if (o!=null) {
        scrivi_su_localStorage("Tagliata di manzo", 10,50);
    }
    alert("Hai ordinato una Tagliata di manzo");
}

function Bisteccafiorentina() {
    var o=document.getElementById("bott_fiore");
    if (o!=null) {
        scrivi_su_localStorage("Marinara", 20);
    }
    alert("Hai ordinato una Bistecca fiorentina");
}

function Grigliatamistadicarne() {
    var o=document.getElementById("bott_grgl");
    if (o!=null) {
        scrivi_su_localStorage("Diavola", 12);
    }
    alert("Hai ordinata una Grigliata mista di carne");
}

function BBQRibs() {
    var o=document.getElementById("bott_BBQ");
    if (o!=null) {
        scrivi_su_localStorage("Focaccia", 13);
    }
    alert("Hai ordinato una BBQ Ribs");
}

function Tartarealnaturaledimanzo() {
    var o=document.getElementById("bott_tart");
    if (o!=null) {
        scrivi_su_localStorage("Prosciutto e scamorza", 8,50);
    }
    alert("Hai ordinato una Tartare al naturale di manzo");
}

function Salsicciaecrauti() {
    var o=document.getElementById("bott_sals");
    if (o!=null) {
        scrivi_su_localStorage("Salsiccia e funghi", 6,50);
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
            scrivi_su_localStorage_tavoli("Tavolo 1", 4);
            alert("Hai prenotato il tavolo 1 da 4 persone");
        }
        if (document.getElementById("tavolo2").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 2", 4);
            alert("Hai prenotato il tavolo 2 da 4 persone");
        }
        if (document.getElementById("tavolo3").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 3", 4);
            alert("Hai prenotato il tavolo 3 da 4 persone");
        }
        if (document.getElementById("tavolo4").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 4", 4);
            alert("Hai prenotato il tavolo 4 da 4 persone");
        }
        if (document.getElementById("tavolo5").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 5", 4);
            alert("Hai prenotato il tavolo 5 da 4 persone");
        }
        if (document.getElementById("tavolo6").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 6", 6);
            alert("Hai prenotato il tavolo 6 da 6 persone");
        }
        if (document.getElementById("tavolo7").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 7", 6);
            alert("Hai prenotato il tavolo 7 da 6 persone");
        }
        if (document.getElementById("tavolo8").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 8", 6);
            alert("Hai prenotato il tavolo 8 da 6 persone");
        }
    }
}