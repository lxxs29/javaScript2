// Initializing arrays with initializer lists.
function start()
{
   // Initializer list specifies the number of elements and
   // a value for each element.
   var colors = new Array( "cyan", "magenta","yellow", "black" ); 
   var integers1 = [ 2, 4, 6, 8 ];                                
   var integers2 = [ 2, , , 8 ];                                  

   salidaArray( "Colores", colors, 
      document.getElementById( "salida1" ) );
   salidaArray( "Enteros 1", integers1, 
      document.getElementById( "salida2" ) );
   salidaArray( "Enteros 2", integers2, 
      document.getElementById( "salida3" ) );
} // end function start

// salida the heading followed by a two-column table 
// containing indices and elements of "theArray"  
function salidaArray( heading, theArray, salida )
{
   var content = "<h2>" + heading + "</h2><table>" +
      "<thead><th>Indice</th><th>Valor</th></thead><tbody>";

   // salida the index and value of each array element
   var length = theArray.length; // get array's length once before loop

   for ( var i = 0; i < length; ++i )   
   {
      content += "<tr><td>" + i + "</td><td>" + theArray[ i ] + 
         "</td></tr>";
   } // end for

   content += "</tbody></table>";
   salida.innerHTML = content; // place the table in the salida element
} // end function salidaArray

window.addEventListener( "load", start, false );