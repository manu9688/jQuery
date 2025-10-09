const url = "https://api.chucknorris.io/jokes/random";
let prueba;


let obtFrase = () =>{
fetch(url)
.then(response => response.json())
//llama a la funcion escribir el valor en html
.then(json => saveResult(json));
}


function saveResult(json){
     document.getElementById("frases-chuck").textContent = json.value;
  prueba=json.value;
}

const boton = document.getElementById("btn-red");

boton.onclick = function () {
    obtFrase();
     document.getElementById("frases-chuck").textContent = prueba;
};