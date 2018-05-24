<?php
$name = $_POST['firstName'];
$last_name = $_POST['lastName'];
$email = $_POST['email'];
$message = $_POST['message'];

$naam = "$name $last_name";

$inhoud = 
"$message
\n
\n
$name $last_name \n
$email";

mail("brysbaertmaarten@hotmail.com","$naam heeft u gecontacteerd",$inhoud);
header("index.html");
?>


		