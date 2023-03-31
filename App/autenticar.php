<?php
session_start();
require_once("conexao/connect.php");
include("conexao/connect.php");

if(isset($_POST['usuario']) || isset($_POST['senha'])){

$usuario = ($_POST['usuario']);
$senha = ($_POST['senha']);

	$usuario = $conexao->real_escape_string(($_POST['usuario']));
	$senha = $conexao->real_escape_string(($_POST['senha']));

	$sql_code = "SELECT * FROM usuarios WHERE usuario='$usuario' AND senha='$senha'";
	$sql_query = $conexao->query($sql_code) or die ("Falha na execução" .$conexao->error);

	$quantidade = $sql_query->num_rows;

	if($quantidade==1){
		$usuario = $sql_query->fetch_assoc();
		
		if (!isset($_SESSION)){
			session_start();
		}

		$_SESSION['idUser']=$usuario['idUser'];
		$_SESSION['nome']=$usuario['nome'];

		header('Location: ../home.php');
	}
	else {
		echo "Falha ao logar! Email ou senha incorretos";
	}
}
?>
