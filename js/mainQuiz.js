    
    // Array de objetos
    const preguntas = [
      {
        texto: '¿Cuál de las siguientes opciones no es un editor de código?',
        opciones: ['vim', 'vscode', 'emacs', 'word'],
        correcta: 'word'
      },
      {
        texto: '¿Qué lenguaje se usa principalmente para desarrollo web en el navegador?',
        opciones: ['Python', 'JavaScript', 'C++', 'Java'],
        correcta: 'JavaScript'
      },
      {
        texto: '¿Cuál de estos es un paradigma de programación?',
        opciones: ['Orientado a objetos', 'HTML', 'CSS', 'MySQL'],
        correcta: 'Orientado a objetos'
      }
    ];
// variables de control
    let preguntaActual = 0;
    let puntaje = 0;

    function mostrarPregunta() {
      const pregunta = preguntas[preguntaActual];
      document.getElementById('pregunta').textContent = pregunta.texto;

      const contenedorOpciones = document.getElementById('opciones');
      // limpia las opciones anteriores
      contenedorOpciones.innerHTML = '';

      pregunta.opciones.forEach(opcion => {
        //crea un boton por cada opción con createElement
        const boton = document.createElement('button');
        boton.textContent = opcion;
        // asignación de función con onclick
        boton.onclick = () => verificarRespuesta(opcion);
        contenedorOpciones.appendChild(boton);
      });

      document.getElementById('resultado').textContent = '';
    }

    function verificarRespuesta(opcionSeleccionada) {
        //compara la opción seleccionada con la correcta
      const pregunta = preguntas[preguntaActual];
      if (opcionSeleccionada === pregunta.correcta) {
        // si es correcta se suma  punto
        puntaje++;
      }
//avanza a la siguiente pregunta
      preguntaActual++;

      if (preguntaActual < preguntas.length) {
        //si quedan preguntas llama a mostrarPregunta() otra vez
        mostrarPregunta();
      } else {
        //si ya no quedan preguntas, llama a la función mostrar resultado
        mostrarResultadoFinal();
      }
    }
  function reiniciarQuiz() {
  preguntaActual = 0;
  puntaje = 0;
  mostrarPregunta();
}
    function mostrarResultadoFinal() {
        //reemplaza todo el contenido del div con el resultado final
      document.getElementById('quiz').innerHTML = `
        <h2>Resultado del Quiz</h2>
        <div class="resultado"><h3> Tu puntaje final es: ${puntaje} de ${preguntas.length} <h3></div>
      
        `;
    }


  

 mostrarPregunta();