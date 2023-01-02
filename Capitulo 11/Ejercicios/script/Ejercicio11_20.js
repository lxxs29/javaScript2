/* Miguel Conde Luis 
 Capítulo 11 - Ejercicio 20  */

var campoTexto, campoCarac, campoIndice, boton, resultado;
function iniciar(){
    campoTexto = document.getElementById("campoTexto");
    campoCarac = document.getElementById("campoCarac");
    campoIndice = document.getElementById("campoIndice");
    resultado = document.getElementById("resultado");
    boton = document.getElementById("buscar");
    console.log("ivban alba ba".lastIndexOf("ba"));
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
    resultado.innerHTML = lastIndexOfPropio(caracteres, indice);
}

function lastIndexOfPropio(cadena, index){
    console.log(cadena.length);
    var texto = campoTexto.value, coindicencias = 0;
    for(let c = index; c < texto.length; c++){
        if(cadena.length == 1){
            if(texto[c] == cadena) return (texto.length - c);
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
                    return (texto.length - c);
                }
            }
        }
    }
}

window.addEventListener("load", iniciar, false);