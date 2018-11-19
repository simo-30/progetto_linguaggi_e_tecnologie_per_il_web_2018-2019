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

function scrivi_su_localStorage_tavoli(nome, numPersone) {
    var prodotto={tavolo: nome, numero_persone: numPersone};
    var chiave=nome+"_"+numPersone;
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
        scrivi_su_localStorage("Diavola", 1, 7.50);
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

function acqua1l() {
    var o=document.getElementById("butt_acqua1l");
    if (o!=null) {
        scrivi_su_localStorage("Acqua 1l", 1, 1.50);
    }
    alert("Hai ordinato una bottiglia di acqua da 1 litro");
}

function acqua05l() {
    var o=document.getElementById("butt_acqua05l");
    if (o!=null) {
        scrivi_su_localStorage("Acqua 0,5l", 1, 0.50);
    }
    alert("Hai ordinato una bottiglia di acqua da mezzo litro");
}

function cola() {
    var o=document.getElementById("butt_cola");
    if (o!=null) {
        scrivi_su_localStorage("Coca-cola 0,5l", 1, 3);
    }
    alert("Hai ordinato una bottiglia di coca-cola da mezzo litro");
}

function colaLattina() {
    var o=document.getElementById("butt_colaLattina");
    if (o!=null) {
        scrivi_su_localStorage("Coca-cola lattina", 1, 2);
    }
    alert("Hai ordinato una lattina di coca-cola");
}

function fanta() {
    var o=document.getElementById("butt_fanta");
    if (o!=null) {
        scrivi_su_localStorage("Fanta 0,5l", 1, 2.50);
    }
    alert("Hai ordinato una bottiglia di fanta da mezzo litro");
}

function fantaLattina() {
    var o=document.getElementById("butt_fantaLattina");
    if (o!=null) {
        scrivi_su_localStorage("Fanta lattina", 1, 1.50);
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