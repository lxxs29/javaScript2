/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 13 */

var campoCarac;
function iniciar(){
    var boton = document.getElementById("buscar");
    var campoTexto = document.getElementById("campoTexto");
    campoCarac = document.getElementById("caracter");
    var resultado = document.getElementById("resultado");

    
    boton.addEventListener("click", validar, false);
}

function validar(){
    resultado.innerHTML = "";
    console.log(campoCarac.value);
    if(!campoTexto.value == "" && !campoCarac.value == "")
        imprimir();
}

function imprimir(){
    var texto = campoTexto.value;
    var caracter = campoCarac.value;
    var coincidencias = 0;
    var coincidencia = texto.indexOf(caracter);
    while(coincidencia != -1){
        coincidencias ++;
        coincidencia = texto.indexOf(caracter, coincidencia + 1);
    }
    resultado.innerHTML = "Ocurrencias encontradas: " + coincidencias;
}

window.addEventListener("load", iniciar, false);