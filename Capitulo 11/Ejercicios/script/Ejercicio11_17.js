/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 17 */

var campoNumero, boton, resultado;
function iniciar(){
    campoNumero = document.getElementById("campoNumero");
    resultado = document.getElementById("resultado");
    boton = document.getElementById("convertir");

    boton.addEventListener("click", imprimir, false);
}

function imprimir(){
    var numero = campoNumero.value + "";
    if(numero == "") numero = 0;
    numero = parseInt(numero);
    resultado.innerHTML = String.fromCharCode(numero);
}

window.addEventListener("load", iniciar, false);