<?php

require_once('App/session.php');
include("App/conexao/connect.php");
$consulta = "SELECT * FROM animais";
$con = $conexao->query($consulta) or die($conexao->error);
verificacao('login.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/stylehome.css">
    <link rel="stylesheet" href="css/cadastro.css">
    <link rel="stylesheet" href="css/cadastrados.css">
    <link rel="stylesheet" href="css/listaanimais.css">

    <title>Relatorio</title>
</head>

<body>
    <div class="fundo">

    
        <div class="listaanimais">
        <form action="perfilAnimal.php" method="GET" >
            <table class="tabela" name='animal'>
                <th>Id</th>
                <th>Selo</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Data de Nascimento</th>
                <th class="btnNulo" ><input type="submit" value="Exibir" id='btnExibir' ></th>
                <?php while ($dados=$con->fetch_array()) {?>            
                <tr>
                    <td><?php echo $dados['id'] ?></td>
                    <td><?php echo $dados['seloAnimal'] ?></td>
                    <td><?php echo $dados['nomeAnimal'] ?></td>
                    <td><?php echo $dados['categoriaAnimal'] ?></td>
                    <td><?php echo $dados['dataNascimento'] ?></td>
                    <td> <input id="radio" required type="radio" name='id' value="<?php echo $dados['id'] ?>" ></td>               
                </tr>
                <?php }?> 
                <input hidden type="radio" name='seloAnimal' value="0" checked > <!-- Usado somente para selecionar o id em outro arquivo -->           
            </form>
            </table>
            <div class="btn" >
            
            </div>
            

        </div>
<?php include('menu.php') ?>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
</body>

</html>