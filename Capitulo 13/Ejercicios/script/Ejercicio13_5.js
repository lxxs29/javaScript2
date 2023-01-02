/* Capítulo 13 - Ejercicio 5 */
/* Miguel Conde Luis */

function inicio(){
    var caracter = /&/g; 
    document.getElementById("comentarios").addEventListener("blur",
        function(){
            this.value = this.value.replace(caracter, " y ");
        },false);
}

window.addEventListener("load", inicio, false);