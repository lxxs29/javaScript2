// fig. 12.19 
// Secuencia de comandos para demostrar los estilos dinamicos.

var intervalo = null;
var velocidad = 6;
var cuenta = 0;

// se llama repetidas veces para animar la portada del libro
function ejecutar(){
    cuenta += velocidad;
    // detener la animacion cuando la imagen sea lo bastante grande
    if(cuenta >= 375){
        window.clearInterval(intervalo);
        intervalo = null;
    }
    var imagenGrande = document.getElementById("imgPortada");
    imagenGrande.setAttribute("style","width: "+(0.7656*cuenta+"px")+"height: "+(cuenta+"px"));
}
// insertar la imagen apropiada en el área de la imgen principal
// comienza la animacion
function mostrar(archimg){
    if(intervalo)
        return;
    
    var imagenGrande = document.getElementById("imgPortada");
    imagenGrande.setAttribute("style","width: 0px; height:0px");
    imagenGrande.setAttribute("src", "img/fullzise"+archimg);
    imagenGrande.setAttribute("alt","Versión grande de "+ archimg);
    cuenta = 0;
    intervalo = window.setInterval("ejecutar()",10);    // animar
}

function iniciar(){
    document.getElementById("jhtp").addEventListener("click",function(){mostrar("jhtpa.jpg")},false);
    document.getElementById("iw3htp").addEventListener("click",function(){mostrar("iw3htp.jpg")},false);
    document.getElementById("cpphtp").addEventListener("click",function(){mostrar("cpphtp.jpg")},false);
    document.getElementById("jhtplov").addEventListener("click",function(){mostrar("pphtplov.jpg")},false);
    document.getElementById("cpphtplov").addEventListener("click",function(){mostrar("cpphtplov.jpg")},false);
    document.getElementById("vcsharphtp").addEventListener("click",function(){mostrar("vcsharphtp.jpg")},false);
}

window.addEventListener("load",iniciar,false);