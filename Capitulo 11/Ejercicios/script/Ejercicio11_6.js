/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 6 */

function iniciar(){
    var resultado = document.getElementById("resultado");
    var campoObjeto1 = document.getElementById("campoObjeto1");
    var campoObjeto2 = document.getElementById("campoObjeto2");
    var boton = document.getElementById("comparar");

    boton.addEventListener("click", compararObjetos, false);
}

function compararObjetos(){
    let objeto1 = parseFloat(campoObjeto1.value);
    let objeto2 = parseFloat(campoObjeto2.value);
    if(objeto1 == objeto2)
        resultado.innerHTML = objeto1 + " es igual a " + objeto2;
    else if(objeto1 > objeto2)
        resultado.innerHTML = objeto1 + " es mayor a " + objeto2;
    else
        resultado.innerHTML = objeto1 + " es menor a " + objeto2;
}

window.addEventListener("load", iniciar, false);