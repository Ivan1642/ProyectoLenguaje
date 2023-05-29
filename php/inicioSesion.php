<?php
$usuarioPost = $_POST['usuario'];
$contrasenyaPost = $_POST['contrasenya'];

echo $usuarioPost;
echo $contrasenyaPost;

//Cargamos el XML que queremos tratar.
$documento = simplexml_load_file('../xml/usuariado.xml');

//Nodo usuarios.
$usuario = $documento-> xpath("//cuenta[user='$usuarioPost'][pass='$contrasenyaPost']");

//Comprobar inicio de sesion
if($usuario){
    if($usuarioPost=="root"){
        header("Location: ../indexRoot.html");
        exit();
    }else{
        header("Location: ../indexNoRoot.html");
        exit();
    }
}else{
    header("Location: ../error_inicioSesion.html");
    exit();
    }
?>