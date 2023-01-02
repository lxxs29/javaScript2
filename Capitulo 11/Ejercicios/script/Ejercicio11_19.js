/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio */

var campoTexto, campoCarac, campoIndice, boton, resultado;
function iniciar(){
    campoTexto = document.getElementById("campoTexto");
    campoCarac = document.getElementById("campoCarac");
    campoIndice = document.getElementById("campoIndice");
    resultado = document.getElementById("resultado");
    boton = document.getElementById("buscar");

    boton.addEventListener("click", buscar, false);
}

function buscar(){
    var caracteres = campoCarac.value;
    var indice;
    if(campoIndice.value == '') indice = 0;
    else{
        indice = parseInt(campoIndice.value);
        if(indice < 0) indice = 0;
    }
    resultado.innerHTML = indexOfPropio(caracteres, indice);
}

function indexOfPropio(cadena, index){
    console.log(cadena.length);
    var texto = campoTexto.value, coindicencias = 0;
    for(let c = index; c < texto.length; c++){
        if(cadena.length == 1){
            if(texto[c] == cadena) return c;
            console.log("if" + c)
        }
        else{
            console.log("Else" + c)
            if(texto[c] == cadena[0]){
                coindicencias++;
                for(let y = 1; y < cadena.length; y++){
                    if(texto[c + y] == cadena[y]) coindicencias++;
                }
                if(coindicencias == cadena.length){
                    return c;
                }
            }
        }
    }
}
window.addEventListener("load", iniciar, false);