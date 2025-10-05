

//? Ejercicio botones con toggle

/*2. .addEventListener("click", function() { ... })
Le dice al navegador: “Cuando el usuario haga clic en este botón, ejecuta esta función”.
*/

document.getElementById("btnRed").addEventListener("click", function () {
    const parrafo = document.getElementById("pRed");
    parrafo.classList.toggle("red");
});

document.getElementById("btnBlue").addEventListener("click", function () {
    const parrafo = document.getElementById("pRed");
    parrafo.classList.toggle("blue");
});
////////////////////////////////////////////


let result;
let opc1 = document.getElementById("card-piedra").addEventListener("click", function () {
    result = "🪨";
    startGame();
    console.log(result);
});

let opc2 = document.getElementById("card-papel").addEventListener("click", function () {
    result = "📄";
        startGame();
    console.log(result);
});

let opc3 = document.getElementById("card-tijera").addEventListener("click", function () {
    result = "✂️";
        startGame();
    console.log(result);
});
let startGame = () =>{

const juego = ["🪨", "📄", "✂️"]; // piedra, papel, tijera

const jugador = result;
console.log(result);
const computadora = juego[Math.floor(Math.random() * 3)];


console.log("Jugador:", jugador);
console.log("Computadora:", computadora);
// Resultado simple
if (jugador === computadora) {
 document.getElementById("resultado").textContent = "¡Empate!"
 alert("Ver Resultado?");
        document.open();
        document.write(
          "<h1>¡Empate!</h1>",
        );
    console.log("¡Empate!");
} else if (
    (jugador === "🪨" && computadora === "✂️") ||
    (jugador === "📄" && computadora === "🪨") ||
    (jugador === "✂️" && computadora === "📄")
) {
    document.getElementById("resultado").textContent = "¡Ganaste!"
    console.log("¡Ganaste!");
} else {
     document.getElementById("resultado").textContent = "Perdiste..."
    console.log("Perdiste...");
}
};



