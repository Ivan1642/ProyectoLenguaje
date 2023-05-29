<?php
// Experiencia
$jobTitlePost = $_POST['jobTitle'];
$companyPost = $_POST['company'];
$startDatePost = $_POST['startDate'];
$endDatePost = $_POST['endDate'];

// Idiomas
$idiomaPost = $_POST['idioma'];
$nivelPost = $_POST['nivel'];
$entidadPost = $_POST['entidad'];
$fechaExpPost = $_POST['fechaExp'];

// Formacion
$titulPost = $_POST['titul'];
$centroPost = $_POST['centro'];
$anyoIniPost = $_POST['anyoIni'];
$anyoFinPost = $_POST['anyoFin'];

// Obtener el nombre de usuario
$usuario = $_POST['nombreUsuario'];

// Cargar el archivo XML existente
$xmlFile = '../xml/curriculums.xml';
$xml = new DOMDocument();
$xml->load($xmlFile);

// Obtener el elemento raíz curriculums
$curriculums = $xml->documentElement;

// Crear el elemento CV
$CV = $xml->createElement('CV');
$CV->setAttribute('cuenta', $usuario);

// Obtener el último ID de CV
$ultimoCV = $curriculums->getElementsByTagName('CV')->item($curriculums->getElementsByTagName('CV')->length - 1);
$ultimoId = $ultimoCV->getAttribute('id');
$id = $ultimoId + 1;
$CV->setAttribute('id', $id);

// Crear el elemento titulo y añadirlo al CV
$titulo = $xml->createElement('titulo');
$CV->appendChild($titulo);

// Crear el elemento formacion y añadirlo al CV
$formacion = $xml->createElement('formacion');

// Crear el elemento titulacion y añadirlo a formacion
$titulacion = $xml->createElement('titulacion');
$nombreTitulacion = $xml->createElement('nombre', $titulPost);
$centroTitulacion = $xml->createElement('centro', $centroPost);
$fechaTitulacion = $xml->createElement('fecha', $anyoIniPost . ' - ' . $anyoFinPost);
$titulacion->appendChild($nombreTitulacion);
$titulacion->appendChild($centroTitulacion);
$titulacion->appendChild($fechaTitulacion);
$formacion->appendChild($titulacion);

// Crear el elemento idioma y añadirlo a formacion
$idioma = $xml->createElement('idioma');
$nombreIdioma = $xml->createElement('nombre', $idiomaPost);
$nivelIdioma = $xml->createElement('nivel', $nivelPost);
$certificadoIdioma = $xml->createElement('certificado', $entidadPost);
$idioma->appendChild($nombreIdioma);
$idioma->appendChild($nivelIdioma);
$idioma->appendChild($certificadoIdioma);
$formacion->appendChild($idioma);

$CV->appendChild($formacion);

// Crear el elemento experiencia y añadirlo al CV
$experiencia = $xml->createElement('experiencia');
$itemExperiencia = $xml->createElement('item');
$tituloExperiencia = $xml->createElement('titulo', $jobTitlePost);
$categoriaExperiencia = $xml->createElement('categoria', $companyPost);
$descripcionExperiencia = $xml->createElement('descripcion');
$fechaInicioExperiencia = $xml->createElement('fecha_inicio', $startDatePost);
$fechaFinExperiencia = $xml->createElement('fecha_fin', $endDatePost);
$itemExperiencia->appendChild($tituloExperiencia);
$itemExperiencia->appendChild($categoriaExperiencia);
$itemExperiencia->appendChild($descripcionExperiencia);
$itemExperiencia->appendChild($fechaInicioExperiencia);
$itemExperiencia->appendChild($fechaFinExperiencia);
$experiencia->appendChild($itemExperiencia);
$CV->appendChild($experiencia);

// Añadir el CV al elemento curriculums
$curriculums->appendChild($CV);

// Guardar el XML actualizado
$xml->save($xmlFile);
?>