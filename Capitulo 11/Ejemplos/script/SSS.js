// Fig. 11.9: SSS.js
// Los métodos String split y substring.

function botonDividirPresionado(){
    let cadenaEntrada = document.getElementById("campoEntrada").value;
    let tokens = cadenaEntrada.split("");
    let resultados = document.getElementById("resultados");

    resultados.innerHTML = "<p>El enunciado dividio en palabras es: </p>" + "<p class = 'indent'>" + tokens.join("</p><p class='indent'>") + "</p>" + "<p>Los primeros 10 caracteres de la cadena de entrada son: </p>" + "<p class='indent'>'"+cadenaEntrada.substring(0,10)+"'</p>";
}   // fin de la función

// registrar manejador de eventos de clic para botonDividir
function iniciar(){
    let botonDividir = document.getElementById("botonDividir");
    botonDividir.addEventListener("click",botonDividirPresionado, false);
} 

window.addEventListener("load",iniciar,false);