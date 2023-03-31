<?php

	$localhost="localhost";
	$usuario="root";
	$senha="";
	$bd="sigep";

	$conexao=mysqli_connect($localhost, $usuario, $senha, $bd);
	if(!$conexao){
		die("Houve um erro: ".mysqli_connect_error());
	}

?>
