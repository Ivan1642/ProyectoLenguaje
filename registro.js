function validar(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var nombreUsuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var xhttp = new XMLHttpRequest();

    if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email)) {
        if (password.length < 8) {
            alert("La contraseña es demasiado corta");
            return false;
        }
        if (!password.match(/[A-z]/)) {
            alert("La contraseña no contiene letras");
            return false;
        }
        if (!password.match(/[0-9]/)) {
            alert("La contraseña no contiene números");
            return false;
        }
        if (!password.match(/[A-Z]/)) {
            alert("La contraseña no contiene mayúsculas");
            return false;
        }
        if (!password.match(/[^a-zA-Z\d]/)) {
            alert("La contraseña debe contener un símbolo como $,%,!,?,¡,*");
            return false;
        }

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var xmlDoc = this.responseXML;
                var cuentas = xmlDoc.getElementsByTagName("cuenta");
                for (var i = 0; i < cuentas.length; i++) {
                    var cuenta = cuentas[i];
                    var nombreUsuarioXML = cuenta.getElementsByTagName("user")[0].childNodes[0].nodeValue;
                    var mailXML = cuenta.getElementsByTagName("mail")[0].childNodes[0].nodeValue;
                    if (nombreUsuario === nombreUsuarioXML) {
                        alert("Nombre de usuario en uso");
                        return false;
                    } else if (email === mailXML) {
                        alert("Correo en uso");
                        return false;
                    }
                }
                // Si todo es válido, puedes enviar el formulario aquí
                document.getElementById("registro-form").submit();
            }
        };

        xhttp.open("GET", "xml/usuariado.xml", true);
        xhttp.send();
    } else {
        alert("El formato del correo electrónico es incorrecto");
        return false;
    }
}

document.getElementById("registro-form").addEventListener("submit", validar);
