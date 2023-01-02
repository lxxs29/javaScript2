/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 11 */

function iniciar(){
    var boton = document.getElementById("separar");
    var campoTexto = document.getElementById("campoTexto");
    var resultado = document.getElementById("resultado");

    boton.addEventListener("click", validar, false);
}

function validar(){
    resultado.innerHTML = "";
    if(!campoTexto.value == "")
        separar();
}

function separar(){
    var texto = campoTexto.value;
    var tokens = texto.split(" ");
    for(let p = tokens.length - 1; p >= 0; p--){
        resultado.innerHTML += tokens[p] + " ";
    }
}

window.addEventListener("load", iniciar, false);