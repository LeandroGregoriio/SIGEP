<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="fundo">
        <form action="App/autenticar.php" method="POST" >
            <div class="imagem">
                <img src="Sigep/SIGEP.png" height="50px">
                <p> <b> Seja Bem-Vindo</b></p>
            </div>
            <div class="login">
                <p>Acesse sua conta </p>
                <label for="login">Login</label>
                <input type="text" id="login" name="usuario" placeholder="Seu usuario...">
                <label for="login">Senha</label>
                <input type="password" name="senha" id="senha" placeholder="Sua senha...">
                <div class="botoes">
                    <button type="submit">Entrar</button>
                    <button type="button" id="btn-cadastrar" onclick="cadastrar()">Cadastrar</button>
                    <script> function cadastrar(){
                        window.location="cadastrouser.php";
                    } </script>
                </div>
            </div>
        </form>
    </div>
</body>
<script src="script.js"></script>

</html>