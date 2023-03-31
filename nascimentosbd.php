<?php
require_once('App/session.php');
verificacao('login.php');

include("App/conexao/connect.php");
$nascimentos=$_POST['nascimentos'];

$sql="UPDATE dados SET nascimentos = ($nascimentos)";

if(mysqli_query($conexao, $sql)){
    echo "<script> window.location.href='./home.php'</script>";
}

else {
echo mysqli_connect_error($conexao);
}
mysqli_close($conexao);
?>