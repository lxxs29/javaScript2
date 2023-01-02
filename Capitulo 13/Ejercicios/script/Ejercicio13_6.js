/* Capítulo 13 - Ejercicio 6 */
/* Miguel Conde Luis */

function clicDocumento(e){
    if(e.ctrlKey){
        alert("(Evento Ctrl) Hizo clic en un elemento: " + e.target.tagName);
    }
    if(e.shiftKey){
        alert("(Evento Mayús) Hizo clic y el nombre del evento es: " + e.type);
    }
}

function inicio(){
    document.addEventListener("click", clicDocumento, false);
}

window.addEventListener("load", inicio, false);