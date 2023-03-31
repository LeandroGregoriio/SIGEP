<?php
require_once('App/session.php');
verificacao('login.php');

include("App/conexao/connect.php");
$id=$_GET['id'];


$nomeAnimal=$_POST['nomeAnimal'];
$seloAnimal=$_POST['seloAnimal'];
$pesoAnimal=$_POST['pesoAnimal'];
$dataNascimento=$_POST['dataNascimento'];
$categoriaAnimal=$_POST ['categoriaAnimal'];
$anotacoes = $_POST['anotacoes'];


$sql="UPDATE animais SET nomeAnimal = ('$nomeAnimal') WHERE id = ($id)";
mysqli_query($conexao, $sql);
$sql="UPDATE animais SET seloAnimal = ('$seloAnimal') WHERE id = ($id)";
mysqli_query($conexao, $sql);
$sql="UPDATE animais SET pesoAnimal = ('$pesoAnimal') WHERE id = ($id)";
mysqli_query($conexao, $sql);
$sql="UPDATE animais SET dataNascimento = ('$dataNascimento') WHERE id = ($id)";
mysqli_query($conexao, $sql);
$sql="UPDATE animais SET categoriaAnimal = ('$categoriaAnimal') WHERE id = ($id)";
mysqli_query($conexao, $sql);
$sql="UPDATE animais SET anotacoes = ('$anotacoes') WHERE id = ($id)";

if(mysqli_query($conexao, $sql)){
    echo "<script>alert('Cadastro alterado com sucesso'); </script>";
    echo "<script> window.location.href='listaanimais.php'</script>";
}

else {
    echo "<script>alert('Houve um erro'); </script>";
    echo mysqli_connect_error($conexao);
}
mysqli_close($conexao);
?>