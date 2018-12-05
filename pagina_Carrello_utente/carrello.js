/*
    libreria per la gestione del carrello
*/

function stampaTabellaDaStorage() {
    var l=sessionStorage.length;
    var tot=0;
    var tab=new String('<table id="cart" class="table table-hover table-condensed"><thead><tr><th style="width:50%">Prodotto</th><th style="width:10%">Prezzo</th><th style="width:8%">Quantità</th><th style="width:22%" class="text-center">Totale</th><th style="width:10%"></th></tr></thead>');
    tab+="<tbody>";
    var i;
    for (i=0; i<l; i++) {
        var p=JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        if (p.nome_locale!=null) {
            tab+='<tr><td data-th="Product">';
            tab+='<div class="row"><div class="col-sm-10"><h4 class="nomargin">'+p.nome_prodotto+'</h4><small>'+p.nome_locale+'</div></div></td>';
            tab+='<td data-th="Price">'+p.prezzo_unitario+' €</td>';
            tab+='<td data-th="Quantity">'+p.quantita+'</td>';
            tab+='<td data-th="Subtotal" class="text-center">'+p.prezzo_unitario*p.quantita+' €</td>';
            /*tab+='<td><button type="button" class="btn btn-danger">Cancella</button></td>';*/
            tab+='</tr>';
            tot+=p.prezzo_unitario*p.quantita;
        }
    }
    tab+='<tfoot><tr class="visible-xs"><td class="text-center"><strong>Totale '+tot+' €</strong></td></tr>';
    tab+='<tr><td><a href="../pagina_Scelta_Ristoranti/lista_Ristoranti.html" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continua ad ordinare</a></td>';
    tab+='<td><a href="../pagina_Pagamento_Ordine/pagamento.html" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>';
    tab+='<td><button class="btn btn-danger" onclick="return cancellaCarrello();">Svuota carrello</button></td></tr>';
    tab+="</tbody></table>";
    document.getElementById("tabella").innerHTML=tab;
    return true;
}

function cancellaTuttoLocalStorage() {
    localStorage.clear();
    location.reload();
    return true;
}

function cancellaCarrello() {
    sessionStorage.clear();
    location.reload();
    return true;
}