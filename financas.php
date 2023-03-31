<?php
 require_once('App/session.php');
    verificacao('login.php'); 
    ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/financas.css">
    <title>Document</title>
</head>

<body>
<?php include("menu.php") ?>
    <div class="fundo">
    
        <div class="conteudo">
            <div class="home">
                <h2>Financeiro</h2>
                <form action="financasbd.php" method="POST">
                    

                    <div class="financeiro">
                        <h2>Débito</h2>

                        <input hidden type="radio" name='id' value="<?php echo $dados['nascimentos']?>" checked>
                        <!-- Usado somente para selecionar o id em outro arquivo -->

                        <div class="entradas">

                            <div class="valor">
                            
                                <input type="number" name="debito" placeholder="Digite o valor" value="0">

                            </div>
                            
                        </div>
                        <div class="financeiro">
                        <h2>Crédito</h2>

                        <input hidden type="radio" name='id' value="<?php echo $dados['nascimentos']?>" checked>
                        <!-- Usado somente para selecionar o id em outro arquivo -->

                        <div class="entradas">

                            <div class="valor">
                                
                                <input type="number" name="credito" placeholder="Digite o valor"value="0">

                            </div>
                        </div>
                    </div>
                    </div>
                    <input id="btn-atualizar" type="submit" value="Atualizar">
                </form>


            </div>
        </div>


    </div>
    
</body>

</html>