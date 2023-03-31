<?php 
include("App/conexao/connect.php");
require_once('App/session.php');
verificacao('login.php'); 

$selo=$_POST['selo'];

$consulta = "SELECT * FROM animais WHERE seloAnimal=('$selo')";
$con = $conexao->query($consulta) or die($conexao->error);

$dados=$con->fetch_array();

echo $dados['nome'];


?>