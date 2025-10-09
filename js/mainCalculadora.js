const pantalla = document.querySelector('.pantalla');

  const buttons = document.querySelectorAll('.teclado button');
// esta variable guarda lo que el usario pone en la pantalla
  let entradaUsr = '';
//recorre los botones y evalua cual ha sido pulsado
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
//borra lo que hay escrito en la pantalla
      if (value === 'RESET') {
        entradaUsr = '';
        pantalla.textContent = '0';
      } else if (value === 'DEL') {
        entradaUsr = entradaUsr.slice(0, -1);
        pantalla.textContent = entradaUsr || '0';
      } else if (value === '=') {
        try {
          // Reemplaza 'x' por '*' para multiplicar
          const result = eval(entradaUsr.replace(/x/g, '*'));
          pantalla.textContent = result;
          entradaUsr = result.toString();
        } catch {
          pantalla.textContent = 'Error';
          entradaUsr = '';
        }
      } else {
        entradaUsr += value;
        pantalla.textContent = entradaUsr;
      }
    });
  });


    const themeRadios = document.querySelectorAll('input[name="theme"]');
  const body = document.body;

  themeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      // Elimina clases anteriores
      body.classList.remove('theme-1', 'theme-2', 'theme-3');
      // Añade la clase correspondiente
      body.classList.add(`theme-${radio.value}`);
    });
  });

  // Inicializa el tema seleccionado al cargar
  const selected = document.querySelector('input[name="theme"]:checked');
  body.classList.add(`theme-${selected.value}`);
