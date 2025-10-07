let porcentaje = 25;

let happy = () => {
     if (porcentaje < 100) {
 const batHappy = document.getElementById('barHappy');
   batHappy.style.width = porcentaje + '%';
    batHappy.textContent = porcentaje + '%';
     }
};

function comer() {
  if (porcentaje < 100) {
    porcentaje += 5;
    const barra = document.getElementById('barEat');
    barra.style.width = porcentaje + '%';
    barra.textContent = porcentaje + '%';
    happy();
  }
}

function jugar() {
  if (porcentaje < 100) {
    porcentaje += 5;
    const barra = document.getElementById('barPlay');
    barra.style.width = porcentaje + '%';
    barra.textContent = porcentaje + '%';
    happy();
  }
}

function pelear() {
  if (porcentaje < 100) {
    porcentaje += 5;
    const barra = document.getElementById('barStrength');
    barra.style.width = porcentaje + '%';
    barra.textContent = porcentaje + '%';
    happy();
  }
}

function dormir() {
  if (porcentaje < 100) {
    porcentaje += 5;
    const barra = document.getElementById('barSleep');
    barra.style.width = porcentaje + '%';
    barra.textContent = porcentaje + '%';
    happy();
  }
}