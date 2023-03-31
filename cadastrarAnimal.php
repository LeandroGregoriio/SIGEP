<?php
require_once('App/session.php');
include("App/conexao/connect.php");
$consulta = "SELECT * FROM animais";
$con = $conexao->query($consulta) or die($conexao->error);
verificacao('login.php'); 

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/cadastro.css">

    <title>Cadastro</title>
</head>

<body>
    <div class="fundo">

    
        <div class="pesquisaAnimal" >     
            <label for="idPesquisa">Busca</label>
            <form action="perfilAnimal.php" method="POST">
            <input type="text" id="idPesquisa" placeholder="Digite o selo do animal" name="seloAnimal">
            
            <button id="btnPesquisar" type="submit" >Pesquisar</button>
            </form>
    
            <button id="btnListar" type="button" onclick="listarTodos()" >Listar Todos</button>
            <script> function listarTodos(){
                window.location="listaanimais.php";
            } </script>
        </div>


    <form action="cadastrarAnimalbd.php" method="POST" >    
        <div class="cadastro">
            <h1>Cadastro</h1>
            <div class="dataEntrada">
                <label for="nomeAnimal">Nome</label> <br>
                <input type="text" name="nomeAnimal" id="nomeAnimal" placeholder="Opcional" ><br>
                <label for="dataEntrada">Data de entrada</label> <br>
                <input type="date" name="dataEntrada" id="dataEntrada" required> 
                
            </div>
  
            <div class="elementos">

                <div class="seloAnimal">
                    <label for="seloAnimal">Selo</label> <br>
                    <input type="text" name="seloAnimal" id="seloAnimal" required>
                </div>

                <div class="pesoAnimal">
                    <label for="pesoAnimal">Peso(Kg)</label><br>
                    <input type="number" name="pesoAnimal" id="pesoAnimal" placeholder="Peso em Kg" >
                </div>

                <div class="dataNascimento">
                    <label for="dataNascimento">Data de Nascimento</label> <br>
                    <input type="date" name="dataNascimento" id="dataNascimento">
                </div>

                <div class="categoria">
                    <label for="categoriaAnimal">Categoria</label> <br>
                    <select name="categoriaAnimal" id="categoriaAnimal" required>
                        <option name='Vaca' value="Vaca">Vaca</option>
                        <option name='Bezerro' value="Bezerro">Bezerro</option>
                        <option name='Novilha'' value="Novilha">Novilha</option>
                        <option name='Touro' value="Touro">Touro</option>
                    </select>
                </div>

                <div class="fotoAnimal">
                    <label for="fotoAnimal" id="foto" name='fotoAnimal' >Enviar Foto</label> <br>
                    <input type="file" name="fotoAnimal" id="fotoAnimal">
                </div>
             </div>

            <div class="botoesCadastro">
                <button id="cadastrarAnimal">Cadastrar</button>
                <button id="cancelarCadastro">Cancelar</button>
            </div>

        </div>
    </form>
    
    <?php include("menu.php") ?>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    <script>
        const list = document.querySelectorAll('.list');
        function activeLink() {
            list.forEach((item) => item.classList.remove('active'));
            this.classList.add('active')
        }
        list.forEach((item) => item.addEventListener('click', activeLink));

        function listarTodos() {
            window.location = "listaanimais.html";
        }

    </script>
</div>
</body>

</html>