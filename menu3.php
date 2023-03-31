<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/stylehome.css">
    <title>Document</title>
</head>

<body>
    <div class="conteudo">
        <div class="home">
            <h2>O Software que simplifica sua gestão financeira e rural</h2>
            <p>O Software que une gestão rural e crédito certo para alavancar seu negócio rural</p>
            <img src="Sigep/SIGEP.png" height="500px">
        </div>
    </div>
    <div class="navigation">
        <div class="logocima">
            <img id="sigepb" src="Sigep/SIGEPB.png" height="35px">
            <img id="sigept" src="Sigep/SIGEPT.png" height="35px">
        </div>
        <ul>
            <li class="list active">
                <a href="home.html">
                    <span class="icon">
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                    <span class="title">Home</span>
                </a>
            </li>
            <li class="list">
                <a href="cadastrar.html">
                    <span class="icon">
                        <ion-icon name="paw-outline"></ion-icon>
                    </span>
                    <span class="title">Cadastro</span>
                </a>
            </li>
            <li class="list">
                <a href="financas.html">
                    <span class="icon">
                        <ion-icon name="cash-outline"></ion-icon>
                    </span>
                    <span class="title">Finanças</span>
                </a>
            </li>
            <li class="list">
                <a href="suporte.html">
                    <span class="icon">
                        <ion-icon name="people-outline"></ion-icon>
                    </span>
                    <span class="title">Suporte</span>
                </a>
            </li>
        </ul>
    </div>

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

</body>

</html>