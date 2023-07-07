<?php
    $mysqliConect=new mysqli('localhost','root','','registro')
    if (!$mysqliConect) {
        echo "Error al conectar a base de datos"
    }
    $nombre=$_POST['nombre']
    $apellido1=$_POST['apellido1']
    $apellido2=$_POST['apellido2']
    $email=$_POST['correoelectronico']
    $telefono=$_POST['telefono']
    $mensaje=$_POST['mensaje']

    $insertar = "insert into datos (nombre, apellido1, apellido2, correoelectronico, telefono, mensaje) VALUES ('$nombre','$apellido1','$apellido2','$correoelectronico','$telefono','$mensaje')";
    if (mysqli_query($mysqliConect, $insertar)) {
        echo "";
    }else{
        echo "Error al guardar datos"
    }

?>