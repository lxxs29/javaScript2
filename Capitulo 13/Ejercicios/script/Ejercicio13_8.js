/* Capítulo 13 - Ejercicio 8 */
/* Miguel Conde Luis */

var imagen, imagen2;
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
/* --------------------------------- */
function inicio2(){
    imagen2 = document.getElementById("pelican");
    imagen2.addEventListener("mousedown", mover2, false);
    //evitar el error de arrastrar imagen
    document.addEventListener('dragstart', function(evt) {
        if (evt.target.tagName == 'IMG') {
          evt.preventDefault();
        }
      });
}

function mover2(e){
    imagen2.style.left = e.clientX - 80 + "px";
    imagen2.style.top = e.clientY - 80 + "px";
    imagen2.addEventListener("mousemove", mover2, false);
    imagen2.addEventListener("click", detener, false);
}

function detener2(){
    imagen2.removeEventListener("mousemove", mover2, false);
}

window.addEventListener("load", inicio, false);
window.addEventListener("load", inicio2, false);