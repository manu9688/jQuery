/*2. .addEventListener("click", function() { ... })
Le dice al navegador: “Cuando el usuario haga clic en este botón, ejecuta esta función”.
*/

document.getElementById("btnRed").addEventListener("click", function() {
  const parrafo = document.getElementById("pRed");
  parrafo.classList.toggle("red");
}); 

document.getElementById("btnBlue").addEventListener("click", function() {
  const parrafo = document.getElementById("pRed");
  parrafo.classList.toggle("blue");
}); 