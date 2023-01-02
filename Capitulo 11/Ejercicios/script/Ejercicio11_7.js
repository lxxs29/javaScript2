/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 7 */

let articulo = ["el", "un", "algún", "ningún"];
let sustantivo = ["niño", "niña", "perro", "ciudad", "auto"];
let verbo = ["manejó", "saltó", "corrió", "caminó", "omitió"];
let preposicion = ["a", "desde", "encima de", "debajo de", "sobre"];
let resultados;

function iniciar(){
    resultados = document.getElementById("resultados");

    historia();
}

function historia(){
    resultados.innerHTML = "Había una vez...\n";
    for(var i = 0; i < 20; i++){
        
        resultados.innerHTML += generarArticulo() + " ";

        resultados.innerHTML += generarSustantivo() + " ";

        resultados.innerHTML += generarVerbo() + " ";

        resultados.innerHTML += generarPreposicion() + " ";

        resultados.innerHTML += generarArticulo() + " ";

        resultados.innerHTML += generarSustantivo() + " ";

    }
    resultados.innerHTML += "\nFIN.";
}

function generarArticulo(){
    var posicion = Math.floor(Math.random() * 4);
    return articulo[ posicion ];
}

function generarSustantivo(){
    var posicion = Math.floor(Math.random() * 5);
    return sustantivo[ posicion ];
}

function generarVerbo(){
    var posicion = Math.floor(Math.random() * 5);
    return verbo[ posicion ];
}

function generarPreposicion(){
    var posicion = Math.floor(Math.random() * 5);
    return preposicion[ posicion ];
}

window.addEventListener("load", iniciar, false);