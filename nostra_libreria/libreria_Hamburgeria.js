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
var piatto=0;

var opz=["Hamburger", "Patatine", "Uovo", "Pancetta", "Insalata", "Pomodoro", "Formaggio"];
var listIngr="";

function incrementa_quant(nome) {
    if (nome=="Hamburger di pollo") {
        poll+=1;
        return poll;
    }
    if (nome=="Hamburger black angus") {
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
    if (nome=="Il tuo hamburger") {
        piatto+=1;
        return piatto;
    }
}

function scrivi_su_localStorage(nome, prezzoUn) { //in realtà sarebbe sessionStorage, ma non mi va di riscrivere il codice :)
    //questa funzione scrive sul localStorage le varie cose ordinate
    var prodotto={nome_locale: "Hamburgeria", nome_prodotto: nome, quantita: incrementa_quant(nome), prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+"_"+prezzoUn;
    var valore=JSON.stringify(prodotto);
    sessionStorage.setItem(chiave, valore);
    alert("Hai ordinato:\n"+nome);
}

function scrivi_su_localStorage_tavoli(nome) {
    var prodotto={nome_locale: "Hamburgeria", nome_prodotto: nome, quantita: 1, prezzo_unitario: 0};
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

function ilTuoPiatto(piatto, prezzo) {
    var puls="";
    puls+='<li class="list-group-item"><h4>Crea '+piatto+' '+prezzo+'€</h4><button type="button" class="btn btn-outline-primary" onclick="return opzPiatto();">Crea</button></li>';
    document.getElementById("tuoPiatto").innerHTML=puls;
    return true;
}

function opzPiatto() {
    var i, l=opz.length;
    var tab="";
    var larg=100/l;
    tab+="<li class='list-group-item'>";
    tab+="<h4>Questi sono gli ingredienti che puoi aggiungere al tuo hamburger</h4><small class='form-text text-muted'>Le immagini sono puramente illustrative</small>";
    for (i=0; i<l; i++) {
        tab+='<button type="button" class="btn btn-outline-success" onclick="return addIngr(\''+opz[i]+'\');">'+opz[i]+'</button>';
    }
    tab+="<br>";
    tab+="<img src='parte_superiore.png' height='70px'>";
    tab+="<div id='panino'></div>";
    tab+="<img src='parte_inferiore.png' height='70px'><br><br>";
    tab+="<h5>Il tuo hamburger è composto da:</h5>";
    tab+="<div id=\"mioHamburger\"></div>";
    tab+="<br>";
    tab+='<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage(\'Il tuo hamburger\', 12);">Ordina</button></li>';
    document.getElementById("tuoPiatto").innerHTML=tab;
    return true;
}

function addIngr(cibo) {
    var lista=document.getElementById("mioHamburger");
    if (listIngr!="") {
        listIngr+=", ";
    }
    listIngr+=cibo;
    lista.innerHTML=listIngr;
    var bk=document.createElement("br");
    var ingrImg=document.getElementById("panino");
    var obj=document.createElement("img");
    obj.setAttribute("src", cibo+".png");
    obj.setAttribute("height", "100px");
    ingrImg.appendChild(obj);
    ingrImg.appendChild(bk);
    return true;
}