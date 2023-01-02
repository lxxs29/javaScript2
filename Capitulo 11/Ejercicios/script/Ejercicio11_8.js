/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 8 */

let primera = [ 
    "Ya recoge de mi boca",
    "Hubo una selva y un nido",
    "¿Son retratos de volcanes",
    "Yo escuché los quejidos,",
    "Hablo de aquel cativo,",
    "Cantando está la lluvia en los tejados,",
    "¡Oh el agua que adopta los colores!",
    "Un año más en el hogar paterno",
    "Después de saber, lector"
];
let segunda = [
    "aquel beso que me diste",
    "y en ese nido un jilguero",
    "o escaleras hacia el cielo",
    "el llanto de una mosca que aleteaba",
    "de quien tener se debe más cuidado",
    "parece que domina todo el cielo",
    "¡Oh el agua que copia las figuras!",
    "celebramos la fiesta del Dios Niño,",
    "la historia del pergamino,"
];
let tercera = [ //a
    "porque ahora me provoca",
    "que alegre y estremecido,",
    "erigidas por titanes?",
    "provocando sonidos,",
    "que está muriendo vivo,",
    "por su incansable anhelo",
    "¡Oh el agua en la copa de las flores",
    "símbolo augusto del amor eterno,",
    "¿qué importa ser hombre o flor,"
];
let cuarta = [
    "un recuerdo que se aloca",
    "tras de un ensueño querido",
    "¿Son tan sólo obras inanes",
    "y que triste intentaba",
    "al remo condenado,",
    "de mirar en los prados",
    "con forma de rocío, y, por dolores,",
    "cuando cubre los montes el invierno",
    "¡ay!, si el variar de destino"
];
let quinta = [ //a
    "y me deja el alma triste.",
    "cruzó por el mundo entero.",
    "de un anhelo?",
    "soltarse del papel que la atrapaba.",
    "en la concha de Venus amarrado.",
    "sus besos estancados.",
    "rodando como tercas desventuras!",
    "con su manto de armiño.",
    "sólo es variar de dolor? "
];
let resultados, boton;

function iniciar(){
    resultados = document.getElementById("resultados");
    boton = document.getElementById("generar");
    boton.addEventListener("click", quintilla, false);
}

function quintilla(){
    let posicionPTQ = generarPrimera();
    let posicionSC = generarSegunda();
    generarTercera(posicionPTQ);
    generarCuarta(posicionSC);
    generarQuinta(posicionPTQ);
}

function generarPrimera(){
    var posicion = Math.floor(Math.random() * 9);
    resultados.innerHTML = primera[posicion] + "<br>";
    return posicion;
}

function generarSegunda(){
    var posicion = Math.floor(Math.random() * 9);
    resultados.innerHTML += segunda[posicion] + "<br>";
    return posicion;
}

function generarTercera(posicion){
    resultados.innerHTML += tercera[posicion] + "<br>";
}

function generarCuarta(posicion){
    resultados.innerHTML += cuarta[posicion] + "<br>";
}

function generarQuinta(posicion){
    resultados.innerHTML += quinta[posicion] + "<br>";
}

window.addEventListener("load", iniciar, false);