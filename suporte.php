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
    <link rel="stylesheet" href="css/stylehome.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>

<body>
    <div class="fundo" >
    <div class="conteudo">
        <div class="home">
            <h2>Suporte</h2>
           
            <img src="Sigep/SIGEP.png" height="500px">
        </div>
    </div>
    
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
    </script>
</div>
</body>

</html>