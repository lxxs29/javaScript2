/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 18 */

var resultado;
function iniciar(){
    resultado = document.getElementById("resultado");
    
    imprimir();
}

function imprimir(){
    let numero;
    for(let i = 0; i <= 255; i++){
        numero = i;
        if(i < 10) numero = "00" + i;
        if(i < 100 && i > 9) numero = "0" + i;
        resultado.innerHTML += numero + " >>> " + String.fromCharCode(parseInt(numero)) + "\n";
    }
}

window.addEventListener("load", iniciar, false);