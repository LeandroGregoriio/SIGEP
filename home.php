<?php
    require_once('App/session.php');
    include("App/conexao/connect.php");
    $consulta = "SELECT count(*) as t FROM animais";
    $con = $conexao->query($consulta) or die($conexao->error);
    $contagem=$con->fetch_array();
    $ativos=($contagem['t']);
    verificacao('login.php');

$consultaDados = "SELECT * FROM dados";
$conDados = $conexao->query($consultaDados) or die($conexao->error);
$dados = $conDados->fetch_array();


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/stylehome.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Home</title>
</head>

<body>
    <script>var pagina='home';</script>
    <div class="fundo" >
    <div class="conteudo">
        <div class="home">
            <img src="Sigep/SIGEP.png" height="100px">
            <h2>O Software que simplifica sua gestão financeira e rural</h2>
            <p>Unimos a gestão rural e a tecnologia para alavancar seu negócio</p>
            <p id="estatistica" >Estatísticas de Dezembro</p>      

            <div class="dados" >

                <!-- QUANTIDADE -->
                <a href="listaanimais.php">
                <div class="informacoes" >
                    
                    <div class="iconeTexto">
                    <img src="https://cdn-icons-png.flaticon.com/512/2431/2431624.png" height="30px">
                    <p>Animais ativos</p><br>
                </div>         
                    <h3><?php echo $ativos ?></h3>          
                </div></a>

                

                 <!-- NASCIMENTOS -->
                 <a href="nascimentos.php">
                 <div class="informacoes" >
                    <div class="iconeTexto" >
                    <img src="https://cdn-icons-png.flaticon.com/512/1518/1518637.png" height="30px">
                    <p>Nascimentos</p><br>
                </div>
                    <h3><?php echo $dados["nascimentos"]?></h3>          
                </div>
                </a>

                <!-- RECEITAS -->
                <a href="financas.php">

                <div id="receitas"class="informacoes" >
                    <div class="iconeTexto" >
                    <img src="https://cdn-icons-png.flaticon.com/512/2594/2594116.png" height="30px">
                    <p>Receitas</p>
                </div>
                    <p id="financeiro" ><?php echo "R$",$dados['receitas'] ?></p>          
                </div>
                </a>

                <!-- ORDENHA -->

                <div class="informacoes" >
                    <div class="iconeTexto" >
                    <img src="https://cdn-icons-png.flaticon.com/512/112/112431.png" height="30px">
                    <p>Ordenha</p><br>
                </div>
                    <h3>60 L</h3>          
                </div>

                <!-- VENDAS -->

                <div class="informacoes" >
                    <div class="iconeTexto" >
                    <img src="https://cdn-icons-png.flaticon.com/512/3133/3133460.png" height="30px">
                    <p>Vendas</p><br>
                </div>
                    <h3>4</h3>          
                </div>

                <!-- ABATES -->

                <div id="abates" class="informacoes" >
                    <div class="iconeTexto" >
                    <p>Abates</p><br>
                </div>
                    <h3>1</h3>          
                </div>

            </div>

        </div>


    </div>
    <?php
    include('menu.php') ?>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</div>
</div>
</body>

</html>