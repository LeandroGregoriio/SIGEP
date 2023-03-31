<?php

require_once('App/session.php');
include("App/conexao/connect.php");
$id=$_GET['id'];
$consulta = "SELECT * FROM animais WHERE id=($id)";
$con = $conexao->query($consulta) or die($conexao->error);
verificacao('login.php');
if($id=null){
    header('home.php');
}
$dados=$con->fetch_array();
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

    <title>Cadastro</title>
</head>

<body>
    <div class="fundo">
<form action="alterardadosanimalbd.php" method="GET" >
        <div class="cadastrado">
            <?php //echo $dados['fotoAnimal'] ?>

            <style>
                .novosdados {
                    padding: 5px;
                    text-decoration: none;
                    border-radius: 5px;
                    border: solid rgb(190, 190, 190) 1px;
                    width: 100%;
                    color: rgb(138, 138, 138);
                    font-size: 12px;
                    
                }

                select {
                    width: 100%;
                    text-decoration: none;
                    border-radius: 5px;
                    border: solid rgb(190, 190, 190) 1px;
                    color: rgb(138, 138, 138);
                    font-size: 12px;
                    margin: 0px;
                }
            </style>
            <table class="tabela">
                <th>Selo</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Data de Nascimento</th>
                <th>Peso(Kg)</th>

                <tr>
                    <td> <input class="novosdados" type="text" name='seloAnimal'></td>
                    <td><input class="novosdados" type="text" name='nomeAnimal'></td>

                    <td>
                        <div class="categoria">
                            <select name="categoriaAnimal" id="categoriaAnimal" required>
                                <option name='Vaca' value="Vaca">Vaca</option>
                                <option name='Bezerro' value="Bezerro">Bezerro</option>
                                <option name='Novilha'' value="Novilha">Novilha</option>
                            <option name=' Touro' value="Touro">Touro</option>
                            </select>
                        </div>
                    </td>

                    <td><input class="novosdados" type="date" name='dataNascimento'></td>
                    <td><input class="novosdados" type="number" name='pesoAnimal'></td>
                </tr>

            </table>


            <div class="anotacao">
                <label for="anotacao">Anotações</label>
                <textarea name="anotacoes" id="" cols="30" rows="10"><?php echo $dados['anotacoes']?></textarea>
            </div>

            <input hidden type="radio" name='id' value="<?php echo $dados['id']?>" checked > <!-- Usado somente para selecionar o id em outro arquivo -->
            <div class="btnCadastrados">
                <button id="btnAlterar">Salvar</button>
                </form>
                <form action="perfilAnimal.php" method="GET">
                <input hidden type="radio" name='id' value="<?php echo $dados['id']?>" checked > <!-- Usado somente para selecionar o id em outro arquivo -->
                <button id="btnExcluir" onclick="Cancelar()" >Cancelar</button>
                </form>
            </div>

        </div>
        
        <?php include("menu.php") ?>
        <script>
            const list = document.querySelectorAll('.list');
            function activeLink() {
                list.forEach((item) => item.classList.remove('active'));
                this.classList.add('active')
            }
            list.forEach((item) => item.addEventListener('click', activeLink));
        </script>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>


    </div>
</body>

</html>