/* Capítulos 12 - Ejercicio 3 */
/* Miguel Conde Luis */

function procesarVinculos(){
    var listaVinculos = document.links; 

    for(var i = 0; i < listaVinculos.length; ++i){
        var vinculoActual = listaVinculos[i];
        if(vinculoActual.childElementCount == 0){
            vinculoActual.setAttribute("style", "background: yellow;color: black;");
        }
    }
}

window.addEventListener("load", procesarVinculos, false);