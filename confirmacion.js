function confirmarDatos() {
    // Obtenemos los valores del formulario del documento por su Id
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var numero = document.getElementById('numero').value;
    var genero = document.getElementById('genero').value;

    // Creamos el mensaje de confirmación, el simbolo de += nos permite añadir contenido a una variable
    var mensaje = "¿Estas seguro de que los siguientes datos son correctos?\n\n";
    mensaje += "Nombre: " + nombre + "\n";
    mensaje += "Email: " + email + "\n";
    mensaje += "Número de teléfono: " + numero + "\n";
    mensaje += "Género: " + genero;

    // Pedir confirmación al usuario, confirm hara que salte un mensaje de confirmacion
    var confirmacion = confirm(mensaje);

    // Como confirm tiene dos opciones, pues tenemos que poner una condición para cada caso
    if (confirmacion) {
      alert("Datos introducidos");
    }

    // Evitar el envío del formulario si el usuario cancela la confirmación y además una alerta.
    else {

      alert('Envio cancelado')

    }
  }