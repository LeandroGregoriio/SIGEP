

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/cadastrouser.css"/>
    <title>Cadastro de Usuario</title>
</head>
<body>

    <form action="cadastrouserbd.php" method="POST" >
        <div class="cadastro" >
            <div id='titulo'>
        <h2>Cadastro de Usuários</h2>
        </div>
        <div class="nome" >
            <label for="nome">Nome:</label>
            <input type="text" name="nome" placeholder="Digite seu nome" required>
        </div>

        <div class="usuario" >
            <label for="usuario">Usuario:</label>
            <input type="text" name="usuario" id="usuario" placeholder="Digite um nome de usuario" required>
        </div>

        <div class="senha" >
            <label for="senha">Senha:</label>
            <input type="password" name="senha" id='senha' placeholder="Digite uma senha" required >
        </div>
        <button type="submit" id="btnCadastrar" >Cadastrar</button>
        </div>
    </form>

</body>
</html>
