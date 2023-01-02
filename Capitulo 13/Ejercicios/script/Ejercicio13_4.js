/* Capítulo 13 - Ejercicio 4 */
/* Miguel Conde Luis */

//función de inicialización para insertar celdas en la tabla
function crearLienzo(){
    var lado = 100;
    var tbody = document.getElementById("cuerpotabla");
    tbody.innerHTML = "";
    for(var i = 0; i < lado; ++i){
        var fila = document.createElement("tr");
        for(var j = 0; j < lado; ++j){
            var celda = document.createElement("td");
            fila.appendChild(celda);
        }

        tbody.appendChild(fila);
    }

    //registrar componente de escucha de mousemove para la tabla
    document.getElementById("lienzo").addEventListener("mousemove", procesarMouseMove, false);

    //
    document.getElementById("borrar").addEventListener("click", crearLienzo, false);
}

//procesa el evento onmousemove
function procesarMouseMove(e){
    if( e.target.tagName.toLowerCase() == "td" ){
        //colorea la celda de azul si está presionada la tecla Ctrl
        if(e.ctrlKey){
            e.target.setAttribute("class", "blue");
        }

        //colorea la celda de rojo si está presionada la tecla Mayús
        if(e.shiftKey){
            e.target.setAttribute("class", "red");
        }

        //colorea la celda de blanco si está presionada la tecla Alt
        if(e.altKey)    {
            e.target.setAttribute("class", "white");
        }
    }
}

window.addEventListener("load", crearLienzo, false);