/* Capítulo 12 - Ejercicio 5 */
/* Miguel Conde Luis */

var contador = 0;
function iniciar(){
    document.getElementById("incrementar").addEventListener("click", function(){
        document.getElementById("contador").innerHTML = contador++;
    });
}
window.addEventListener("load", iniciar, false);