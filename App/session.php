<?php 
   session_start();
    function verificacao($path){
        if(!$_SESSION['idUser']){
            header('Location:'.$path);
            exit;
        }
    }
?>