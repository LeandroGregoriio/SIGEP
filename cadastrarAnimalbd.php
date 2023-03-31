<?php
require_once('App/session.php');
verificacao('login.php');

include("App/conexao/connect.php");
$nomeAnimal=$_POST['nomeAnimal'];
$dataEntrada=$_POST['dataEntrada'];
$seloAnimal=$_POST['seloAnimal'];
$pesoAnimal=$_POST['pesoAnimal'];
$dataNascimento=$_POST['dataNascimento'];
$categoriaAnimal=$_POST ['categoriaAnimal'];
$fotoAnimal=$_FILES['fotoAnimal'];


$sql="INSERT INTO animais(nomeAnimal, dataEntrada, seloAnimal, pesoAnimal, dataNascimento, categoriaAnimal, fotoAnimal) VALUES ('$nomeAnimal', '$dataEntrada', '$seloAnimal','$pesoAnimal','$dataNascimento','$categoriaAnimal','$fotoAnimal')";

if(mysqli_query($conexao, $sql)){
    echo "<script>alert('Animal cadastrado com sucesso'); </script>";
    echo "<script> window.location.href='home.php'</script>";
}

else {
echo mysqli_connect_error($conexao);
}
mysqli_close($conexao);
?>