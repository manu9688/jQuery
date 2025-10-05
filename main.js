let miArray = [];


let actualizarArray = () => {
    // Convierte el array miArray en una cadena de texto legible. 
   //.textcontent  Cambia el contenido textual de ese elemento Div
   document.getElementById("arrayActual").textContent = JSON.stringify(miArray);

};

let push = document.getElementById("push");
// push agregar el elemento al final del array
push.onclick = function () {
    let numero = document.getElementById("numero").value;
    miArray.push(numero);
   actualizarArray();
};

let unshift = document.getElementById("unshift");
// unshift agrega elementos al comienzo del array
unshift.onclick = function () {
    let numero = document.getElementById("numero").value;
    miArray.unshift(numero);
   actualizarArray();
};

let insertAt = document.getElementById("insertAt");
// insert at (insertar un elemento en una posicion especifica)
// para esto se usa splice()
insertAt.onclick = function () {
    let numero = document.getElementById("numero").value;
    //splice(indice,catidadEliminar,elementoAinsertar)
    miArray.splice(1,0,numero);
   actualizarArray();
};

let pop = document.getElementById("pop");
//pop() elimina el ultimo elemento del array
pop.onclick = function () {
    miArray.pop();
   actualizarArray();
};

let shift = document.getElementById("shift");
// shift() elimina el primer elemento del array
shift.onclick = function () {
    miArray.shift();
   actualizarArray();
};


let removeAt = document.getElementById("removeAt");
removeAt.onclick = function () {
    // remove at eliminar un elemento de una posicion especifica
    // para esto se usa split()
    let numero = document.getElementById("removeIndex").value;
    //splice(indice,cantidadAEliminar)
    miArray.splice(numero,1);
   actualizarArray();
};





















