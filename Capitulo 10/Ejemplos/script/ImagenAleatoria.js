// fig 10.12

//Seleccion de imagenes al azar usando arreglos

var imgIcono;
var imagenes = ["ECP","TPE","BPP","GUI","REND","PORT","OIS"];

var descripciones = ["Error común de programación","Tip para prevenir errores","Buena práctica de programación","Tip de rendimientos","Observación de ingeniería de software"];
// elegir una imagen al azar y descripción correspondiente, despues modificar 
// el elemento img en el cuerpo del documento

function elegirImagen(){
    var indice = Math.floor(Math.random() * 7);
    imgIcono.setAttribute("/img/src", imagenes[indice]+".png");
    imgIcono.setAttribute("/img/src", descripciones[indice]+".png");
}

// registrar el menejador de eventos de clic de imgIcono
function iniciar(){
    imgIcono = document.getElementById("imagen");
    imgIcono.addEventListener("click"), elegirImagen, false
}
window.addEventListener("load",iniciar,false)