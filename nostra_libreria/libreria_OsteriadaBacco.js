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

function scrivi_su_localStorage(nome, prezzoUn) {
    //questa funzione scrive sul localStorage le varie cose ordinate
    var prodotto={nome_locale: "Osteria da Bacco",nome_prodotto: nome, quantita: incrementa_quant(nome), prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+"_"+prezzoUn;
    var valore=JSON.stringify(prodotto);
    localStorage.setItem(chiave, valore);
}

function scrivi_su_localStorage_tavoli(nome) {
    var prodotto={nome_locale: "Osteria da Bacco", nome_prodotto: nome, quantita: 1, prezzo_unitario: 0};
    var chiave=nome;
    var valore=JSON.stringify(prodotto);
    localStorage.setItem(chiave, valore);
}


function Bucatiniallamatriciana() {
    var o=document.getElementById("butt_ama");
    if (o!=null) {
        scrivi_su_localStorage("Bucatini all'amatriciana", 11);
    }
    alert("Hai ordinato un piatto di bucatini all'amatriciana");
}

function Mezzemanicheallacarbonara() {
    var o=document.getElementById("butt_carbo");
    if (o!=null) {
        scrivi_su_localStorage("Mezzemaniche alla carbonara", 11);
    }
    alert("Hai ordinato un piatto di mezzemaniche alla carbonara");
}

function Gricia() {
    var o=document.getElementById("butt_gri");
    if (o!=null) {
        scrivi_su_localStorage("Gricia", 12);
    }
    alert("Hai ordinato un piatto di Gricia");
}

function Cacioepepe() {
    var o=document.getElementById("butt_cacio");
    if (o!=null) {
        scrivi_su_localStorage("Cacio e pepe", 11);
    }
    alert("Hai ordinato un piatto di cacio e pepe");
}

function Codaallavaccinara() {
    var o=document.getElementById("butt_vacci");
    if (o!=null) {
        scrivi_su_localStorage("Coda alla vaccinara", 14);
    }
    alert("Hai ordinato un piatto di coda alla vaccinara");
}

function Ossobuco() {
    var o=document.getElementById("butt_osso");
    if (o!=null) {
        scrivi_su_localStorage("Ossobuco", 11.30);
    }
    alert("Hai ordinato un piatto di ossobuco");
}

function Baccalàfritto() {
    var o=document.getElementById("butt_bacca");
    if (o!=null) {
        scrivi_su_localStorage("Bccalà fritto", 10);
    }
    alert("Hai ordinato un piatto di baccalà fritto");
}

function Trippaallaromana() {
    var o=document.getElementById("butt_trippa");
    if (o!=null) {
        scrivi_su_localStorage("Trippa alla romana", 11.50);
    }
    alert("Hai ordinato un piatto di trippa alla romana");
}

function acqua() {
    var o=document.getElementById("butt_acqua");
    if (o!=null) {
        scrivi_su_localStorage("Acqua 1l", 1.5);
    }
    alert("Hai ordinato una bottiglia di acuqa da un litro");
}

function vino_bianco() {
    var o=document.getElementById("butt_vino_bianco");
    if (o!=null) {
        scrivi_su_localStorage("Vino bianco 0,75l", 3);
    }
    alert("Hai ordinato una bottiglia di vino bianco della casa da 0,75l");
}

function vino_rosso() {
    var o=document.getElementById("butt_vino_rosso");
    if (o!=null) {
        scrivi_su_localStorage("Vino rosso 0,75l", 3);
    }
    alert("Hai ordinato una bottiglia di vino rosso della casa da 0,75l");
}

function cola() {
    var o=document.getElementById("butt_cola");
    if (o!=null) {
        scrivi_su_localStorage("Coca-cola 0,5l", 2);
    }
    alert("Hai ordinato una bottiglia di coca-cola da mezzo litro");
}

function fanta() {
    var o=document.getElementById("butt_fanta");
    if (o!=null) {
        scrivi_su_localStorage("Fanta 0,5l", 2);
    }
    alert("Hai ordinato una bottiglia di fanta da mezzo litro");
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