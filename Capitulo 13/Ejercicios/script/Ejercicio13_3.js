/* Capítulo 13 - Ejercicio 3 */
/* Miguel Conde Luis */
//función de inicialización para insertar celdas en la tabla
function crearLienzo(){
    var lado = 100;
    var tbody = document.getElementById("cuerpotabla");

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
}

//procesa el evento onmousemove
function procesarMouseMove(e){
    if( e.target.tagName.toLowerCase() == "td" ){

        if(e.ctrlKey){
            e.target.setAttribute("class", "blue");
        }

        if(e.shiftKey){
            e.target.setAttribute("class", "red");
        }

        if(e.altKey)    {
            e.target.setAttribute("class", "white");
        }
    }
}

window.addEventListener("load", crearLienzo, false);