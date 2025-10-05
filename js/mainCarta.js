
 
 
 /*Todo está dentro de $(document).ready() para asegurar que el DOM esté 
 cargado antes de ejecutar el script.
*/
 $(document).ready(function () {
    //- .hover(): Detecta cuando el cursor entra y sale del contenedor
    $('.card').hover(
      function () {
    //- .hide() / .show(): Alterna entre la imagen trasera y la delantera.
        $(this).find('.back').hide();
        $(this).find('.front').show();
      },
      function () {
        $(this).find('.front').hide();
        $(this).find('.back').show();
      }
    );
  });
