/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 10 */

let boton;
let mensajes;
let campoArea;
let campoNumero;
let exp = /^[(]?[0-9]{3}[)][0-9]{3}-[0-9]{4}/;
function iniciar(){
    boton = document.getElementById("separar");
    var campoTelefono = document.getElementById("campoTelefono");
    mensajes = document.getElementById("mensajes");
    campoArea = document.getElementById("campoArea");
    campoNumero = document.getElementById("campoNumero");
    boton.addEventListener("click", validar, false);
}

function validar(){
    campoArea.innerHTML = "";
    campoNumero.innerHTML = "";
    if(exp.test(campoTelefono.value))
        separar();
}

function separar(){
    let temp = campoTelefono.value;
    campoArea.innerHTML = "Área: " + temp.substring(1,4) + "<br>";
    let numero = temp.substring(5,13) + "";
    numero = numero.split("-",8);
    campoNumero.innerHTML += "Número telefónico: " + numero[0]+ numero[1];
}

window.addEventListener("load", iniciar, false);