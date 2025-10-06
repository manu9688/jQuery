const imagen = document.getElementById("bombilla");
const imgBtn = document.getElementById("btn-img");
const boton = document.getElementById("cambiarBtn");


let encendida = false;
boton.onclick = function () {
  const imagen = document.getElementById("bombilla");
  if (encendida) {
    imagen.src = "./img/on.jpg";
    imgBtn.src = "./img/bon.jpg"

  } else {
    imagen.src = "./img/off.jpg";
    imgBtn.src = "./img/boff.jpg"
  }
  encendida = !encendida;
};
