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

    <div class="navigation">
        <div class="logocima">
            <img id="sigepb" src="Sigep/SIGEPB.png" height="35px">
            <img id="sigept" src="Sigep/SIGEPT.png" height="35px">
        </div>
        <ul>
            <li class="list">
                <a href="home.php">
                    <span class="icon">
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                    <span class="title">Home</span>
                </a>
            </li>
            <li class="list">
                <a href="cadastrarAnimal.php">
                    <span class="icon">
                        <ion-icon name="paw-outline"></ion-icon>
                    </span>
                    <span class="title">Cadastro</span>
                </a>
            </li>
            <li class="list">
                <a href="financas.php">
                    <span class="icon">
                        <ion-icon name="cash-outline"></ion-icon>
                    </span>
                    <span class="title">Finanças</span>
                </a>
            </li>
            <li class="list">
                <a href="suporte.php">
                    <span class="icon">
                        <ion-icon name="people-outline"></ion-icon>
                    </span>
                    <span class="title">Suporte</span>
                </a>
            </li>

            <li class="list-sair" id="sair">
                <a href="App/logout.php">
                    <span class="icon">
                    <ion-icon name="log-out-outline"></ion-icon>
                    </span>
                    <span class="title">Sair</span>
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