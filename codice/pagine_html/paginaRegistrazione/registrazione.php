<!--
    pagina in php per la registrazione di nuovi utenti
-->

<html>
    <head></head>
    <body class="text-center">

        <?php

            $dbconn = pg_connect("host=localhost port=3000 dbname=utente user=postgres password=simone") or die("Non è stato possibile connettersi al databse" . pg_last_error);
            if(!(isset($_POST['registrationButton']))){
                header("Location: registrazione.html");
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
                    $nome=$_POST['nome'];
                    $cognome=$_POST['cognome'];
                    $username=$_POST['username'];
                    $password=md5($_POST['passw']);
                    $q2="insert into utente values ($1,$2,$3,$4,$5)";
                    $data=pg_query_params($dbconn,$q2,array($nome,$cognome,$email,$username,$password));
                    if($data){
                        //header("Location: registrationCompleted.html");
                        echo "<h1> Registration is completed. Start using the website <br/></h1>";
                        echo "<a href=../Welcome.php?name=$nome> Premi qui
                        </a>
                        per inziare ad utilizzare il sito web";
                    }
                }
            }
        ?>
    </body>
</html>