<?php

require_once('App/session.php');
include("App/conexao/connect.php");

$id = $_POST['id'];

$consulta = "SELECT * FROM animais WHERE id=($id)";
$con = $conexao->query($consulta) or die($conexao->error);
verificacao('login.php');
$dados=$con->fetch_array();

echo $id;


?>

