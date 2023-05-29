function validarFormulario() {
    // Obtiene los valores
    var nombreUsuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("password").value;
    // Lee el XML
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200) {
            // Comprueba que los datos coinciden
            var xmlDoc = this.responseXML;
            var cuentas = xmlDoc.getElementsByTagName("cuenta");
            for (var i = 0; i < cuentas.length; i++) {
                var cuenta = cuentas[i];
                var nombreUsuarioXML = cuenta.getElementsByTagName("user")[0].childNodes[0].nodeValue;
                var contrasenaXML = cuenta.getElementsByTagName("pass")[0].childNodes[0].nodeValue;
                if (nombreUsuario === nombreUsuarioXML && contrasena === contrasenaXML) {
                    //envia los datos al PHP
                    var xhttpPost = new XMLHttpRequest();
                    xhttpPost.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            // Aquí puedes manejar la respuesta del archivo PHP si es necesario
                            if (nombreUsuario === 'root') {
                                window.location.href = "indexRoot.html";
                            } else {
                                window.location.href = "indexNoRoot.html";
                            }
                        }
                    };
                    xhttpPost.open("POST", "php/addInfoCurriculum.php", true);
                    xhttpPost.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    // Envía el valor de nombreUsuario al archivo PHP
                    xhttpPost.send("nombreUsuario=" + encodeURIComponent(nombreUsuario));
                    return true;
                }
            }
            // Si los datos no coinciden muestra un mensaje de error
            alert("Nombre de usuario o contraseña incorrectos");
            return false;
        }
    };
    xhttp.open("GET", "xml/usuariado.xml", true);
    xhttp.send();
}
