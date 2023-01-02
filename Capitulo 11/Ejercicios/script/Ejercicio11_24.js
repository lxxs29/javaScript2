/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 24 */

function inicio(){
    document.getElementById("imprimir").addEventListener("click", validar, false);
}

function validar(){
    var campo = document.getElementById("campoNumero");
    if(campo.value.length == 9){
        imprimir(campo.value);
    }
    else if(campo.value.length < 9 && campo.value.length > 0){
        var numero = "";
        for(var i = 0; i < (9 - campo.value.length); i++){
            numero += "*";
        }
        imprimir(numero + "" + campo.value);
    }
}

function imprimir(valor){
    document.getElementById("resultado").innerHTML = valor + "<br> 123456789";
}

window.addEventListener("load", inicio, false);