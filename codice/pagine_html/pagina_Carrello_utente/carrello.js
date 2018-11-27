/*
    libreria per la gestione del carrello
*/

function stampaStorageSemplice(){
    var l=localStorage.length;
    var carr=new String("<h3>Questo è il carrello</h3>");
    var i;
    for (i=0; i<l; i++) {
        carr+=JSON.stringify(localStorage.getItem(localStorage.key(i)))+"<br>";
    }
    document.getElementById("vistaStorage").innerHTML=carr;
    return true;
}

function stampaTabellaDaStorage() {
    var l=localStorage.length;
    var tab=new String('<table id="cart" class="table table-hover table-condensed"><thead><tr><th style="width:50%">Prodotto</th><th style="width:10%">Prezzo</th><th style="width:8%">Quantità</th><th style="width:22%" class="text-center">Totale</th><th style="width:10%"></th></tr></thead>');
    tab+="<tbody>";
    var i;
    for (i=0; i<l; i++) {
        var p=JSON.parse(localStorage.getItem(localStorage.key(i)));
        var nome="";
        var pr=0;
        var q=0;
        tab+='<tr><td data-th="Product">';
            nome=new String(p.nome_prodotto);
            pr=p.prezzo_unitario;
            q=p.quantita;
            tab+='<div class="row"><div class="col-sm-10"><h4 class="nomargin">'+nome+'</h4></div></div></td>';
            tab+='<td data-th="Price">'+pr+'</td>';
            tab+='<td data-th="Quantity">'+q+'</td>';
            tab+='<td data-th="Subtotal" class="text-center">'+pr*q+'</td>';
        
        tab+='</tr>';
    }
    tab+="</tbody></table>";
    document.getElementById("tabella").innerHTML=tab;
    return true;
}