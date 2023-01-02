// fig 11.19 
// Almacenamiento y recuperacion de parede clave/valor mediante el uso de localStorge y sessionStorge de HTML5

var tags; // arreglo  de etiquetas

// carga de las busquedas etiquetadas anteriormentee y las muestra en la pagina
function loadSearches() 
{
   if ( !window.sessionStorage.getItem( "herePreviously" ) )
   {
      sessionStorage.setItem( "herePreviously", "true" );
      
   } 

   var length = localStorage.length; // numero de pares clave-valor
   tags = []; // arreglo vacio

   // load all keys
   for (var i = 0; i < length; ++i) 
   {
      tags[i] = localStorage.key(i);
   } // end for

   tags.sort(); 
   var markup = "<ul>"; 
   //var url = "http://search.twitter.com/search?q=";
   var url = "https://dev.twitter.com/docs/api/1.1/overview";
   

   // build list of links
   for (var tag in tags) 
   {
      var query = url + localStorage.getItem(tags[tag]);
      markup += "<li><span><a href = '" + query + "'>" + tags[tag] + 
         "</a></span>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Edit' onclick = 'editTag(id)'>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Delete' onclick = 'deleteTag(id)'>";
   } 

   markup += "</ul>";
   document.getElementById("searches").innerHTML = markup;
} 
function clearAllSearches() 
{
   localStorage.clear();
   loadSearches(); 
} 

function saveSearch() 
{
   var query = document.getElementById("query");
   var tag = document.getElementById("tag");
   localStorage.setItem(tag.value, query.value); 
   tag.value = ""; 
   query.value = ""; 
   loadSearches();
} 

function deleteTag( tag ) 
{
   localStorage.removeItem( tag );
   loadSearches(); 
} 
function editTag( tag )
{
   document.getElementById("query").value = localStorage[ tag ];
   document.getElementById("tag").value = tag;   
   loadSearches();
} 
function start()
{
   var saveButton = document.getElementById( "saveButton" );
   saveButton.addEventListener( "click", saveSearch, false );
   var clearButton = document.getElementById( "clearButton" );
   clearButton.addEventListener( "click", clearAllSearches, false );
   loadSearches(); 
} 
window.addEventListener( "load", start, false );