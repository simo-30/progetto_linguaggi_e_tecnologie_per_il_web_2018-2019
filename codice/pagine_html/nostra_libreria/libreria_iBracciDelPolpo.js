/*
    questa libreria è simmetrica a "libreria_Armando.js"
    implementerà le stesse funzioni, ma ovviamente con le particolarità di questo ristorante
*/

//variabili globali per il mantenimento delle quantità
var ins=0;
var ant=0;
var tonn=0;
var spag=0;
var carb=0;
var ris=0;
var orata=0;
var fil=0;
var spied=0;
var sau=0;
var acqua=0;
var bianco=0;
var rosso=0;
var cola=0;
var fanta=0;

function incrementa_quant(nome) {
    if (nome=="Insalata di mare") {
        ins+=1;
        return ins;
    }
}

function scrivi_su_localStorage(nome, prezzoUn) {
    //questa funzione scrive sul localStorage le varie cose ordinate
    var prodotto={nome_locale: "I bracci del polpo",nome_prodotto: nome, quantita: incrementa_quant(nome), prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+"_"+prezzoUn;
    var valore=JSON.stringify(prodotto);
    localStorage.setItem(chiave, valore);
}

function scrivi_su_localStorage_tavoli(nome, numPersone) {
    var prodotto={nome_locale: "I bracci del polpo", tavolo: nome, numero_persone: numPersone};
    var chiave=nome+"_"+numPersone;
    var valore=JSON.stringify(prodotto);
    localStorage.setItem(chiave, valore);
}

function insalataMare() {
    var o=document.getElementById("butt_insalata");
    if (o!=null) {
        scrivi_su_localStorage("Insalata di mare", 5);
    }
    alert("Hai ordinato un'insalata di mare");
}

function antipasto() {
    var o=document.getElementById("butt_antipasto");
    if (o!=null) {
        scrivi_su_localStorage("Antipasto di mare", 7);
    }
    alert("Hai ordinato un antipasto di mare");
}

function tonnarelli() {
    var o=document.getElementById("butt_tonnarelli");
    if (o!=null) {
        scrivi_su_localStorage("Tonnarelli allo scoglio", 12);
    }
    alert("Hai ordinato un piatto di tonnarelli allo scoglio");
}

function spaghetti() {
    var o=document.getElementById("butt_spaghetti");
    if (o!=null) {
        scrivi_su_localStorage("Spaghetti alle vongole", 11.50);
    }
    alert("Hai ordinato un piatto di spaghetti alle vongole");
}

function carbonara() {
    var o=document.getElementById("butt_carbonara");
    if (o!=null) {
        scrivi_su_localStorage("Carbonara di pesce", 13);
    }
    alert("Hai ordinato un piatto di carbonara di pesce");
}

function risotto() {
    var o=document.getElementById("butt_risotto");
    if (o!=null) {
        scrivi_su_localStorage("Risotto di pesce", 10);
    }
    alert("Hai ordinato un piatto di risotto di pesce");
}

function orata() {
    var o=document.getElementById("butt_orata");
    if (o!=null) {
        scrivi_su_localStorage("Orata alla piastra", 14);
    }
    alert("Hai ordinato un'orata alla piastra");
}

function filetto() {
    var o=document.getElementById("butt_filetto");
    if (o!=null) {
        scrivi_su_localStorage("Filetto di pesce spada", 15);
    }
    alert("Hai ordinato un filetto di pesce spada");
}

function spiedini() {
    var o=document.getElementById("butt_spiedini");
    if (o!=null) {
        scrivi_su_localStorage("Spiedini di pesce", 16);
    }
    alert("Hai ordinato degli spiedini di pesce");
}

function saute() {
    var o=document.getElementById("butt_saute");
    if (o!=null) {
        scrivi_su_localStorage("Sautè di cozze e vongole", 12);
    }
    alert("Hai ordinato un piatto di sautè di cozze e vongole");
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
            scrivi_su_localStorage_tavoli("Tavolo 6", 4);
            alert("Hai prenotato il tavolo 6 da 4 persone");
        }
        if (document.getElementById("tavolo7").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 7", 4);
            alert("Hai prenotato il tavolo 7 da 4 persone");
        }
        if (document.getElementById("tavolo8").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 8", 4);
            alert("Hai prenotato il tavolo 8 da 4 persone");
        }
        if (document.getElementById("tavolo9").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 9", 4);
            alert("Hai prenotato il tavolo 9 da 4 persone");
        }
        if (document.getElementById("tavolo10").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 10", 4);
            alert("Hai prenotato il tavolo 10 da 4 persone");
        }
        if (document.getElementById("tavolo11").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 11", 6);
            alert("Hai prenotato il tavolo 11 da 6 persone");
        }
        if (document.getElementById("tavolo12").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 12", 6);
            alert("Hai prenotato il tavolo 12 da 6 persone");
        }
        if (document.getElementById("tavolo13").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 13", 6);
            alert("Hai prenotato il tavolo 13 da 6 persone");
        }
        if (document.getElementById("tavolo14").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 14", 6);
            alert("Hai prenotato il tavolo 14 da 6 persone");
        }
        if (document.getElementById("tavolo15").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 15", 6);
            alert("Hai prenotato il tavolo 7 da 4 persone");
        }
        if (document.getElementById("tavolo16").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 16", 8);
            alert("Hai prenotato il tavolo 16 da 8 persone");
        }
        if (document.getElementById("tavolo17").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 17", 8);
            alert("Hai prenotato il tavolo 17 da 8 persone");
        }
    }
}