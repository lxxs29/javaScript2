// Fig. 13.4 
// Progrma simple de dibujo
// función de inicialización para insertar celdas en la tabla

function crearLienzo(){
    var lado = 100;
    var tbody = document.getElementById("cuerpotabla");

    for(var i=0;i<lado;++i){
        var fila = document.createElement("tr");
        for(var j=0;j<lado;++j){
            var celda = document.createElement("td");
            fila.appendChild(celda);
        }
        tbody.appendChild(fila);
    }
    // registro componente de escucha de mousemove para la tabla
    document.getElementById("lienzo").addEventListener("mousemove",procesarMouseMove,false);
}

// procesa el evento onmousemove
function procesarMouseMove(e){
    if (e.target.tagName.toLowerCase() == "td") {
        // colorea la celda de azul si está presionada la tecla Crtl
        if (e.ctrlKey) {
            e.target.setAttribute("class","blue");
        }
        // colorea la celda de rojo si está presionada la tecla Mayús
        if (e.shittKey) {
            e.target.setAttribute("class","red");
        }
    }
}

window.addEventListener("load",crearLienzo,false);