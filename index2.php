<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link href="RESOURCES/css/styles.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>

        <input type="number" placeholder="ingresar código" id="codigo">
        <div class="boton" onclick="consultarPorId()">Consultar</div>
        <div class="" id="espera" style="display:none">Procesando tu consulta</div>
        <div id="resultado">
          
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="RESOURCES/js/script.js" type="text/javascript"></script>
    </body>
</html>
