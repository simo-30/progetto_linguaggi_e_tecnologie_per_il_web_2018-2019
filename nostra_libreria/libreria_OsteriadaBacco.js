/*
    questa libreria è simmetrica a "libreria_iBracciDelPolpo.js"
    implementerà le stesse funzioni, ma ovviamente con le particolarità di questo ristorante
*/

//variabili globali per il mantenimento delle quantità
var ama=0;
var carbo=0;
var gri=0;
var cacio=0;
var vacci=0;
var osso=0;
var bacca=0;
var trippa=0;
var acq=0;
var bianco=0;
var rosso=0;
var coca=0;
var fan=0;

function incrementa_quant(nome) {
    if (nome=="Bucatini all'amatriciana") {
        ama+=1;
        return ama;
    }
    if (nome=="Mezzemaniche alla carbonara") {
        carbo+=1;
        return carbo;
    }
    if (nome=="Gricia") {
        gri+=1;
        return gri;
    }
    if (nome=="Cacio e pepe") {
        cacio+=1;
        return cacio;
    }
    if (nome=="Coda alla vaccinara") {
        vacci+=1;
        return vacci;
    }
    if (nome=="Ossobuco") {
        osso+=1;
        return osso;
    }
    if (nome=="Baccalà fritto") {
        bacca+=1;
        return bacca;
    }
    if (nome=="Trippa alla romana") {
        trippa+=1;
        return trippa;
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
    var prodotto={nome_locale: "Osteria da Bacco", nome_prodotto: nome, quantita: incrementa_quant(nome), prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+"_"+prezzoUn;
    var valore=JSON.stringify(prodotto);
    sessionStorage.setItem(chiave, valore);
    alert("Hai ordinato:\n"+nome);
}

function scrivi_su_localStorage_tavoli(nome) {
    var prodotto={nome_locale: "Osteria da Bacco", nome_prodotto: nome, quantita: 1, prezzo_unitario: 0};
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