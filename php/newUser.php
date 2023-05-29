<?php

$nombrePost = $_POST['nombre'];
$apellidosPost = $_POST['apellido'];
$emailPost = $_POST['email'];
$usuarioPost = $_POST['usuario'];
$contrasenyaPost = $_POST['pass'];
$documento = new DOMDocument();
//Cargamos el XML que queremos tratar.
$documento->load('../xml/usuariado.xml');
$usuariado = $documento -> documentElement;
//Nodo cuenta.
$cuenta = $documento->createElement('cuenta');
//nombre
$nombre_cuenta = $documento->createElement('nombre', $nombrePost);
//apellidos
$apellidos_cuenta = $documento->createElement('apellidos', $apellidosPost);
//email
$email_cuenta = $documento->createElement('mail', $emailPost);
//usuario
$usuario_cuenta = $documento->createElement('user', $usuarioPost);
//contrasenya
$contrasenya_cuenta = $documento->createElement('pass', $contrasenyaPost);
//Agregamos los nodos hijos.
$usuariado->appendChild($cuenta);
$cuenta->appendChild($nombre_cuenta);
$cuenta->appendChild($apellidos_cuenta);
$cuenta->appendChild($email_cuenta);
$cuenta->appendChild($usuario_cuenta);
$cuenta->appendChild($contrasenya_cuenta);
//Agregamos todo el árbol al objeto.
$usuariado->appendChild($cuenta);
$documento->appendChild($usuariado);
//Guardamos el XML.
$documento->save('../xml/usuariado.xml');

?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../alta_correcta.css">
	<title>Alta correcta</title>
</head>
<body>
	<header>
    	<div id="header">
    		<h2 id="frase" style="color: #F6F1F1;">Alta correcta</h2>
    		<a href="../index.html"><img src="../imagenes/logo.png" width="200px" height="125px" id="logo"></a>
    		<form action="../index.html">
    			<input type="submit" id="volver" value="Inicio" style="color: #000000;">
    		</form>
    	</div>
    </header>
    <br>
    <br>
    <h3 id="texto" style="color: #19a7ce;">¡Enhorabuena! Ya puedes usar tu cuenta de Veredapass. ¡Comienza a crear tu CV!</h3>
    <img src="../imagenes/correcto.png" id="correcto">
</body>
</html>
