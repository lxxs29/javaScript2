/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 15 */

var campoTexto, boton, resultado;
function iniciar(){
    campoTexto = document.getElementById("campoTexto");
    resultado = document.getElementById("resultado");
    boton = document.getElementById("imprimir");

    boton.addEventListener("click", imprimir, false);
}

function imprimir(){
    var texto = campoTexto.value + "";
    if(texto.indexOf("b") == 0) resultado.innerHTML += texto + "\n";
}

window.addEventListener("load", iniciar, false);