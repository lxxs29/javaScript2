// Fig. 12.16
// Secuencia de comandos para demostrar los estilos dínamicos

function iniciar(){
    var colorEntrada = prompt("Escriba el nombre de un color para el "+"fondo de esta página", "");
    document.body.setAttribute("style","background-color: "+colorEntrada);
}

window.addEventListener("load",iniciar,false);