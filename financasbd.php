<?php
require_once('App/session.php');
verificacao('login.php');

include("App/conexao/connect.php");

$debito=$_POST['debito'];
$credito=$_POST['credito'];



$sql="UPDATE dados SET debito = ($debito)";

mysqli_query($conexao, $sql);

$sql="UPDATE dados SET credito = ($credito)";

mysqli_query($conexao, $sql);


$receitas =  "SELECT * FROM dados";
$con = $conexao->query($receitas) or die($conexao->error);
$dados = $con->fetch_array();

mysqli_query($conexao, $sql);


$receitasAtt=((-$debito+$credito)+$dados['receitas']);

$sql = "UPDATE dados SET receitas=($receitasAtt)";

if(mysqli_query($conexao, $sql)){
    echo "<script> window.location.href='./home.php'</script>";
}

else {
echo mysqli_connect_error($conexao);
}
mysqli_close($conexao);

?>