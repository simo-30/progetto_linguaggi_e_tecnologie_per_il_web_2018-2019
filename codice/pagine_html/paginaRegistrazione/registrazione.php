<!--
    pagina in php per la registrazione di nuovi utenti
-->

<?php

$dbconn = pg_connect("host=localhost port=3000 dbname=utente user=postgres password=simone") or die("Non è stato possibile connettersi al databse" . pg_last_error)


?>