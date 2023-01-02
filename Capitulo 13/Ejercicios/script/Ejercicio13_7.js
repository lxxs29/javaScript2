/* Capítulo 13 - Ejercicio 7 */
/* Miguel Conde Luis */

var imagen;
function inicio(){
    imagen = document.getElementById("ovni");
    imagen.addEventListener("mousedown", mover, false);
    //evitar el error de arrastrar imagen
    document.addEventListener('dragstart', function(evt) {
        if (evt.target.tagName == 'IMG') {
          evt.preventDefault();
        }
      });
}

function mover(e){
    imagen.style.left = e.clientX - 80 + "px";
    imagen.style.top = e.clientY - 80 + "px";
    imagen.addEventListener("mousemove", mover, false);
    imagen.addEventListener("click", detener, false);
}

function detener(){
    imagen.removeEventListener("mousemove", mover, false);
}

window.addEventListener("load", inicio, false);