/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 16 */

var campoTexto, boton, resultado;
function iniciar(){
    campoTexto = document.getElementById("campoTexto");
    resultado = document.getElementById("resultado");
    boton = document.getElementById("imprimir");

    boton.addEventListener("click", imprimir, false);
}

function imprimir(){
    var texto = campoTexto.value + "";
    console.log("texto:" + texto.length + "\ned: " + texto.indexOf("ed"));
    if(texto.indexOf("ed", texto.length - 2) != -1) 
        resultado.innerHTML += texto + "\n";
}

window.addEventListener("load", iniciar, false);