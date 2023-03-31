<?php
require_once('App/session.php');
verificacao('login.php');

include("App/conexao/connect.php");
$id=$_GET['id'];



$sql="DELETE FROM animais WHERE id = ($id)";

if(mysqli_query($conexao, $sql)){
    echo "<script>alert(Cadastro alterado com sucesso'); </script>";
    echo "<script> window.location.href='listaanimais.php'</script>";
}

else {
echo mysqli_connect_error($conexao);
}
mysqli_close($conexao);
?>