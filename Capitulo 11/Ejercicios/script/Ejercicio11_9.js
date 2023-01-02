/* Miguel Conde Luis */
/* Caítulo 11 - Ejercicio 9 */

let boton, resultado, campoTexto, texto;
function iniciar(){
    boton = document.getElementById("traducir");
    resultado = document.getElementById("resultado");
    campoTexto = document.getElementById("campoTexto");

    boton.addEventListener("click", traducir, false);
}

function traducir(){
    resultado.innerHTML = "";
    texto = (campoTexto.value).split(" "); //se divide
    for(let palabra in texto){
        texto[palabra] = texto[palabra].substring(1, (texto[palabra].length + 1) ) + texto[palabra][0] + "ae";
        
        imprimirPalabraEnLatin(texto[palabra]);
    }
}

function imprimirPalabraEnLatin(palabra){
    resultado.innerHTML += palabra + "  ";
}

window.addEventListener("load", iniciar, false);