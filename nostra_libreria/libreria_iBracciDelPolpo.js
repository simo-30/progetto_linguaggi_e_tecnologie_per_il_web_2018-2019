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
var or=0;
var fil=0;
var spied=0;
var sau=0;
var acq=0;
var bianco=0;
var rosso=0;
var coca=0;
var fan=0;

function incrementa_quant(nome) {
    if (nome=="Insalata di mare") {
        ins+=1;
        return ins;
    }
    if (nome=="Antipasto di mare") {
        ant+=1;
        return ant;
    }
    if (nome=="Tonnarelli allo scoglio") {
        tonn+=1;
        return tonn;
    }
    if (nome=="Spaghetti alle vongole") {
        spag+=1;
        return spag;
    }
    if (nome=="Carbonara di pesce") {
        carb+=1;
        return carb;
    }
    if (nome=="Risotto di pesce") {
        ris+=1;
        return ris;
    }
    if (nome=="Orata alla piastra") {
        or+=1;
        return or;
    }
    if (nome=="Filetto di pesce spada") {
        fil+=1;
        return fil;
    }
    if (nome=="Spiedini di pesce") {
        spied+=1;
        return spied;
    }
    if (nome=="Sautè di cozze e vongole") {
        sau+=1;
        return sau;
    }
    if (nome=="Acqua 1l") {
        acq+=1;
        return acq;
    }
    if (nome=="Vino bianco 0,75l") {
        bianco+=1;
        return bianco;
    }
    if (nome=="Vino rosso 0,75l") {
        rosso+=1;
        return rosso;
    }
    if (nome=="Coca-cola 0,5l") {
        coca+=1;
        return coca;
    }
    if (nome=="Fanta 0,5l") {
        fan+=1;
        return fan;
    }
}

function scrivi_su_localStorage(nome, prezzoUn) { //in realtà sarebbe sessionStorage, ma non mi va di riscrivere il codice :)
    //questa funzione scrive sul localStorage le varie cose ordinate
    var prodotto={nome_locale: "I bracci del polpo", nome_prodotto: nome, quantita: incrementa_quant(nome), prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+"_"+prezzoUn;
    var valore=JSON.stringify(prodotto);
    sessionStorage.setItem(chiave, valore);
    alert("Hai ordinato:\n"+nome);
}

function scrivi_su_localStorage_tavoli(nome) {
    var prodotto={nome_locale: "I bracci del polpo", nome_prodotto: nome, quantita: 1, prezzo_unitario: 0};
    var chiave=nome;
    var valore=JSON.stringify(prodotto);
    sessionStorage.setItem(chiave, valore);
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
            scrivi_su_localStorage_tavoli("Tavolo 6 da 4 persone");
            alert("Hai prenotato il tavolo 6 da 4 persone");
        }
        if (document.getElementById("tavolo7").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 7 da 4 persone");
            alert("Hai prenotato il tavolo 7 da 4 persone");
        }
        if (document.getElementById("tavolo8").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 8 da 4 persone");
            alert("Hai prenotato il tavolo 8 da 4 persone");
        }
        if (document.getElementById("tavolo9").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 9 da 4 persone");
            alert("Hai prenotato il tavolo 9 da 4 persone");
        }
        if (document.getElementById("tavolo10").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 10 da 4 persone");
            alert("Hai prenotato il tavolo 10 da 4 persone");
        }
        if (document.getElementById("tavolo11").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 11 da 6 persone");
            alert("Hai prenotato il tavolo 11 da 6 persone");
        }
        if (document.getElementById("tavolo12").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 12 da 6 persone");
            alert("Hai prenotato il tavolo 12 da 6 persone");
        }
        if (document.getElementById("tavolo13").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 13 da 6 persone");
            alert("Hai prenotato il tavolo 13 da 6 persone");
        }
        if (document.getElementById("tavolo14").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 14 da 6 persone");
            alert("Hai prenotato il tavolo 14 da 6 persone");
        }
        if (document.getElementById("tavolo15").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 15 da 6 persone");
            alert("Hai prenotato il tavolo 15 da 6 persone");
        }
        if (document.getElementById("tavolo16").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 16 da 8 persone");
            alert("Hai prenotato il tavolo 16 da 8 persone");
        }
        if (document.getElementById("tavolo17").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 17 da 8 persone");
            alert("Hai prenotato il tavolo 17 da 8 persone");
        }
    }
}