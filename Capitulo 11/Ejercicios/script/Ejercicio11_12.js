/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 12 */

function iniciar(){
    var boton = document.getElementById("imprimir");
    var campoTexto = document.getElementById("campoTexto");
    var resultado = document.getElementById("resultado");
    boton.addEventListener("click", validar, false);
}

function validar(){
    resultado.innerHTML = "";
    if(!campoTexto.value == "")
        imprimir();
}

function imprimir(){
    var texto = campoTexto.value + "";
    resultado.innerHTML = "Mayúsculas: " + texto.toUpperCase() + "<br>";
    resultado.innerHTML += "Minúsculas: " + texto.toLowerCase();
}

window.addEventListener("load", iniciar, false);