<?php
require_once('App/session.php');
//verificacao('login.php');

include("App/conexao/connect.php");
$nome=$_POST['nome'];
$usuario=$_POST['usuario'];
$senha=$_POST['senha'];

$sql="INSERT INTO usuarios(nome, usuario, senha) VALUES ('$nome', '$usuario', '$senha')";

if(mysqli_query($conexao, $sql)){
    echo "<script>alert('Usuario cadastrado com sucesso'); </script>";
    echo "<script> window.location.href='./login.php'</script>";
}

else {
echo mysqli_connect_error($conexao);
}
mysqli_close($conexao);
?>