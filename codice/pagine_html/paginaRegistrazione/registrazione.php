<!--
    pagina in php per la registrazione di nuovi utenti
-->

<html>
    <head></head>
    <body class="text-center">

        <?php

            $dbconn = pg_connect("host=localhost port=3000 dbname=utente user=postgres password=simone") or die("Non è stato possibile connettersi al databse" . pg_last_error);
            if(!(isset($_POST['registrationButton']))){
                header("Location: ../index.html");
            }
            else {
                $email = $_POST['email'];
                $q1="select * from utente where email= $1";
                $result=pg_query_params($dbconn, $q1, array($email));
                if($line=pg_fetch_array($result,null,PGSQL_ASSOC)){
                    //header("Location: alreadyRegistered.html");
                    echo "<h1>Sei già registrato</h1>
                    <a href=../paginaLogin/login.html> Clicca qui per il login 
                    </a>";
                }
                else {
                    
                }
            }
        ?>
    </body>
</html>