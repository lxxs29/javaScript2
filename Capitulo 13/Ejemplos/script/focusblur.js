var helpArray = [ "Escriba su nombre es este cuadro de entrada",
  "Escriba su direcciónn de email en el formato usuario@dominio.",
  "Marque esta casilla si le gusta nuestro contenido.",
  "Escriba aquí los comentarios para que nosotros los leamos.",
  "Este boón envía el formulario a la secuencia de comandos del lado servidor.",
  "Este botón borra el formulario.", "" ];
var helpText;

// initialize helpTextDiv and register event handlers
function init()
{
   helpText = document.getElementById( "helpText" );
   
   // register listeners
   registerListeners(document.getElementById( "name" ), 0 );
   registerListeners(document.getElementById( "email" ), 1 );
   registerListeners(document.getElementById( "like" ), 2 );
   registerListeners(document.getElementById( "comments" ), 3 );
   registerListeners(document.getElementById( "submit" ), 4 );
   registerListeners(document.getElementById( "reset" ), 5 );
} // end function init

// utility function to help register events
function registerListeners( object, messageNumber )
{
   object.addEventListener( "focus", 
      function() { helpText.innerHTML = helpArray[ messageNumber ]; },
      false );
   object.addEventListener( "blur", 
      function() { helpText.innerHTML = helpArray[ 6 ]; }, false );
} // end function registerListener

window.addEventListener( "load", init, false );
