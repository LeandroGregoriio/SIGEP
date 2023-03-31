<?php

require_once('App/session.php');
include("App/conexao/connect.php");
$consulta = "SELECT * FROM dados";
$con = $conexao->query($consulta) or die($conexao->error);
verificacao('login.php');
$dados=$con->fetch_array();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/nascimentos.css">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/stylehome.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Nascimentos</title>
</head>
<body>
<div class="fundo">
<?php include("menu.php") ?>
    <form action="nascimentosbd.php" method="POST">
    <div class="nascimentos" >
        <h2>Inserir nascimentos</h2>

        <input hidden type="radio" name='id' value="<?php echo $dados['nascimentos']?>" checked > <!-- Usado somente para selecionar o id em outro arquivo -->
        
        <div class="entradas">

            <div class="quantidade" >
            <label for="quantidade" >Nascimentos</label>
            <input type="number" name="nascimentos" placeholder="Digite a quantidade">
            
            </div>
            <input id="btn-atualizar" type="submit" value="Atualizar" >
        </div>
        </form>
        <div>

        </div>
</body>


</html>