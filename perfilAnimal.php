<?php

require_once('App/session.php');
include("App/conexao/connect.php");


$id = $_GET['id'];


$consulta = "SELECT * FROM animais WHERE id=($id)";




//$consulta = "SELECT * FROM animais WHERE id=($id)";
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
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/cadastrados.css">

    <title>Cadastro</title>
</head>

<body>
    <div class="fundo">
<form action="alterardadosanimal.php" method="GET">
        <div class="cadastrado">
            
            <?php //echo $dados['fotoAnimal'] ?>


            <table class="tabela">
                <th>Selo</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Data de Nascimento</th>
                <th>Peso(Kg)</th>

                <tr>
                    <td><?php echo $dados['seloAnimal'] ?></td>
                    <td><?php echo $dados['nomeAnimal'] ?></td>
                    <td><?php echo $dados['categoriaAnimal'] ?></td>
                    <td><?php echo $dados['dataNascimento'] ?></td>
                    <td><?php echo $dados['pesoAnimal'] ?></td>
                </tr>
    <input hidden type="radio" name='id' value="<?php echo $dados['id']?>" checked > <!-- Usado somente para selecionar o id em outro arquivo -->
            </table>
            <div class="anotacao">
                <label for="anotacao">Anotações</label>
                <textarea name="anotacoes" id="" cols="30" rows="10"><?php echo $dados['anotacoes']?></textarea>
            </div>
            <div class="btnCadastrados">
                <input type="submit" value='Alterar' id="btnAlterar">
                </form>
                <form action="excluiranimal.php" method="GET" >
                <input hidden
                 type="radio" name='id' value="<?php echo $dados['id']?>" checked > <!-- Usado somente para selecionar o id em outro arquivo -->
                <button id="btnExcluir">Excluir</button>
                </form>
    
            </div>

        </div>
        
        <?php include("menu.php") ?>

        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        
    </div>
</body>

</html>