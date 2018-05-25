<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
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
	// header("index.html");
	?>
</body>
</html>


		