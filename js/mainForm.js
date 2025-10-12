

                                                 // capturando evento submit del formulario
document.getElementById("miForm").addEventListener("submit", function(e) {
  e.preventDefault();// e.preventDefault() evita que se envie automaticamente.

  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const usuario = document.getElementById("usuario");
  const ciudad = document.getElementById("ciudad");
  var estado = document.getElementById("estado");
  const zip = document.getElementById("zip");
  const terminos = document.getElementById("terminos");

  // Limpiar errores previos del css como bordes rojos y msj de error
  limpiarErrores([nombre, apellido, usuario,ciudad,zip,estado,terminos]);

  let valido = true;
 //verificamos si el campo esta vacio usando trim() para ignorar espacios
  if (nombre.value.trim() === "") {
    //si el campo esta vacio muestra el error
    mostrarError(nombre, "El nombre es obligatorio.");
    // marcamos el formulario como invalido
    valido = false;
  }

  if (apellido.value.trim() === "") {
    mostrarError(apellido, "El apellido es obligatorio.");
    valido = false;
  }
  if (usuario.value.trim() === "") {
    mostrarError(usuario, "El usuario es obligatorio.");
    valido = false;
  }
  if (ciudad.value.trim() === "") {
    mostrarError(ciudad, "La ciudad es obligatoria.");
    valido = false;
  }

if (estado.value === "") {
  mostrarError(estado, "Selecciona un estado.");
  valido = false;
}
//usamos una expresión regular para validar que el zip tenga exactamente 5 numeros
  if (!/^\d{5}$/.test(zip.value.trim())) {
  mostrarError(zip, "El código postal debe tener exactamente 5 números.");
  valido = false;
}
// verificamos si el checkbox esta marcado
if (!terminos.checked) {
    mostrarError(terminos, "Debes aceptar los términos.");
    valido = false;
  }
// si el formulario es valido se limpia los campos y se muestra el mensaje 
  if (valido) {
      document.getElementById("miForm").reset(); // Limpia todos los campos
     document.getElementById("green").innerHTML = "<p style='color:green'>Formulario válido. ¡Enviado Correctamente!</p>";
    
  }
});

function mostrarError(elemento, mensaje) {
  //añade la clase de css error-input para resaltar el campo con borde rojo
  elemento.classList.add("error-input");
  //muestra el mensaje de error en el div 
  document.getElementById(`error-${elemento.id}`).textContent = mensaje;
}

function limpiarErrores(elementos) {
  elementos.forEach(el => {
    //se quita el borde rojo del campo
    el.classList.remove("error-input");
    //borra los mensajes del div
    document.getElementById(`error-${el.id}`).textContent = "";
  });
}

