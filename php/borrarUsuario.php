<?php

$usuarioPost = $_POST['usuario'];

// cargar el archivo XML
$documento = simplexml_load_file('backpackers.xml');

$usuario = $documento-> xpath("//no_root[usuario='$usuarioPost']");

if ($usuario) {
    unset($usuario);
    $documento->asXML('backpackers.xml');
    header("Location: backpackers/root/index_root.html");
    exit();
}else
    echo "No se ha podido borrar el usuario";
    header("Location: backpackers/error_borrarUsuario.html");
    exit();

?>