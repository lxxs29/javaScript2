
/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 26 */

var campoUnidad1, campoUnidad2, campoCantidad;

const longitud = [
    "pulgadas", "pies", 
    "kilómetros", "metros",
];
const peso = [
    "libras", "onzas",
    "kilogramos", "gramos"
];
const volumen = [
    "galones", "cuartos",
    "litros", "mililitros"
];

function inicio(){
    campoUnidad1 = document.getElementById("unidad1");
    campoUnidad2 = document.getElementById("unidad2");
    campoCantidad = document.getElementById("cantidad");

    document.getElementById("calcular").addEventListener("click", validar, false);
}

function validar(){
    if(longitud.find((elemento) => elemento == campoUnidad1.value) && longitud.find((elemento) => elemento == campoUnidad2.value)){
        var index1 = longitud.findIndex((elemento) => elemento == campoUnidad1.value);
        var index2 = longitud.findIndex((elemento) => elemento == campoUnidad2.value);
        convertirLongitud(index1, index2);
    }
    else if(peso.find((elemento) => elemento == campoUnidad1.value) && peso.find((elemento) => elemento == campoUnidad2.value)){
        var index1 = peso.findIndex((elemento) => elemento == campoUnidad1.value);
        var index2 = peso.findIndex((elemento) => elemento == campoUnidad2.value);
        convertirPeso(index1, index2);
    }
    else if(volumen.find((elemento) => elemento == campoUnidad1.value) && volumen.find((elemento) => elemento == campoUnidad2.value)){
        var index1 = volumen.findIndex((elemento) => elemento == campoUnidad1.value);
        var index2 = volumen.findIndex((elemento) => elemento == campoUnidad2.value);
        convertirVolumen(index1, index2);
    }
    else{
        document.getElementById("resultado").innerHTML = "Ingrese una conversión válida."
    }
}
function convertirVolumen(index1, index2){
    var conversion;
    switch(volumen[index1]){
        case "galones":{
            switch(volumen[index2]){
                case "galones":
                    conversion = parseFloat(campoCantidad.value);
                    document.getElementById("resultado").innerHTML = conversion + " galon(es)";
                    break;
                case "cuartos":
                    conversion = parseFloat(campoCantidad.value) / 4;
                    document.getElementById("resultado").innerHTML = conversion + " galon(es)";
                    break;
                case "litros":
                    conversion = parseFloat(campoCantidad.value) / 3.78541;
                    document.getElementById("resultado").innerHTML = conversion + " galon(es)";
                    break;
                case "mililitros":
                    conversion = parseFloat(campoCantidad.value) / 3785.41;
                    document.getElementById("resultado").innerHTML = conversion + " galon(es)";
                    break;
            }
            break;
        }
        case "cuartos":{
            switch(volumen[index2]){
                case "galones":
                    conversion = parseFloat(campoCantidad.value) / 0.25;
                    document.getElementById("resultado").innerHTML = conversion + " cuarto(s)";
                    break;
                case "cuartos":
                    conversion = parseFloat(campoCantidad.value);
                    document.getElementById("resultado").innerHTML = conversion + " cuarto(s)";
                    break;
                case "litros":
                    conversion = parseFloat(campoCantidad.value) / 0.946353;
                    document.getElementById("resultado").innerHTML = conversion + " cuarto(s)";
                    break;
                case "mililitros":
                    conversion = parseFloat(campoCantidad.value) / 946.353;
                    document.getElementById("resultado").innerHTML = conversion + " cuarto(s)";
                    break;
            }
            break;
        }
        case "litros":{
            switch(volumen[index2]){
                case "galones":
                    conversion = parseFloat(campoCantidad.value) / 0.264172;
                    document.getElementById("resultado").innerHTML = conversion + " litro(s)";
                    break;
                case "cuartos":
                    conversion = parseFloat(campoCantidad.value) / 1.05669;
                    document.getElementById("resultado").innerHTML = conversion + " litro(s)";
                    break;
                case "litros":
                    conversion = parseFloat(campoCantidad.value);
                    document.getElementById("resultado").innerHTML = conversion + " litro(s)";
                    break;
                case "mililitros":
                    conversion = parseFloat(campoCantidad.value) / 1000;
                    document.getElementById("resultado").innerHTML = conversion + " litro(s)";
                    break;
            }
            break;
        }
        case "mililitros":{
            switch(volumen[index2]){
                case "galones":
                    conversion = parseFloat(campoCantidad.value) / 0.000264172;
                    document.getElementById("resultado").innerHTML = conversion + " mililitro(s)";
                    break;
                case "cuartos":
                    conversion = parseFloat(campoCantidad.value) / 0.00105669;
                    document.getElementById("resultado").innerHTML = conversion + " mililitro(s)";
                    break;
                case "litros":
                    conversion = parseFloat(campoCantidad.value) / 0.001;
                    document.getElementById("resultado").innerHTML = conversion + " mililitro(s)";
                    break;
                case "mililitros":
                    conversion = parseFloat(campoCantidad.value);
                    document.getElementById("resultado").innerHTML = conversion + " mililitro(s)";
                    break;
            }
            break;
        }
    }
}
function convertirPeso(index1, index2){
    var conversion;
    switch(peso[index1]){
        case "libras":{
            switch(peso[index2]){
                case "libras":
                    conversion = parseFloat(campoCantidad.value);
                    document.getElementById("resultado").innerHTML = conversion + " libra(s)";
                    break;
                case "onzas":
                    conversion = parseFloat(campoCantidad.value) / 16;
                    document.getElementById("resultado").innerHTML = conversion + " libra(s)";
                    break;
                case "kilogramos":
                    conversion = parseFloat(campoCantidad.value) / 0.453592;
                    document.getElementById("resultado").innerHTML = conversion + " libra(s)";
                    break;
                case "gramos":
                    conversion = parseFloat(campoCantidad.value) / 453.592;
                    document.getElementById("resultado").innerHTML = conversion + " libra(s)";
                    break;
            }
            break;
        }
        case "onzas":{
            switch(peso[index2]){
                case "libras":
                    conversion = parseFloat(campoCantidad.value) / 0.0625;
                    document.getElementById("resultado").innerHTML = conversion + " onza(s)";
                    break;
                case "onzas":
                    conversion = parseFloat(campoCantidad.value);
                    document.getElementById("resultado").innerHTML = conversion + " onza(s)";
                    break;
                case "kilogramos":
                    conversion = parseFloat(campoCantidad.value) / 0.0283495;
                    document.getElementById("resultado").innerHTML = conversion + " onza(s)";
                    break;
                case "gramos":
                    conversion = parseFloat(campoCantidad.value) / 28.3495;
                    document.getElementById("resultado").innerHTML = conversion + " onza(s)";
                    break;
            }
            break;
        }
        case "kilogramos":{
            switch(peso[index2]){
                case "libras":
                    conversion = parseFloat(campoCantidad.value) / 2.20462;
                    document.getElementById("resultado").innerHTML = conversion + " kilogramo(s)";
                    break;
                case "onzas":
                    conversion = parseFloat(campoCantidad.value) / 35.274;
                    document.getElementById("resultado").innerHTML = conversion + " kilogramo(s)";
                    break;
                case "kilogramos":
                    conversion = parseFloat(campoCantidad.value);
                    document.getElementById("resultado").innerHTML = conversion + " kilogramo(s)";
                    break;
                case "gramos":
                    conversion = parseFloat(campoCantidad.value) / 1000;
                    document.getElementById("resultado").innerHTML = conversion + " kilogramo(s)";
                    break;
            }
            break;
        }
        case "gramos":{
            switch(peso[index2]){
                case "libras":
                    conversion = parseFloat(campoCantidad.value) / 0.00220462;
                    document.getElementById("resultado").innerHTML = conversion + " gramo(s)";
                    break;
                case "onzas":
                    conversion = parseFloat(campoCantidad.value) / 0.035274;
                    document.getElementById("resultado").innerHTML = conversion + " gramo(s)";
                    break;
                case "kilogramos":
                    conversion = parseFloat(campoCantidad.value) / 0.001;
                    document.getElementById("resultado").innerHTML = conversion + " gramo(s)";
                    break;
                case "gramos":
                    conversion = parseFloat(campoCantidad.value);
                    document.getElementById("resultado").innerHTML = conversion + " gramo(s)";
                    break;
            }
            break;
        }
        
    }
}

function convertirLongitud(index1, index2){
    var conversion;
    switch(longitud[index1]){
        case "pulgadas":{
            switch(longitud[index2]){
                case "pulgadas":
                    conversion = parseFloat(campoCantidad.value);
                    document.getElementById("resultado").innerHTML = conversion + " pulgada(s)";
                    break;
                case "pies":
                    conversion = parseFloat(campoCantidad.value) / 0.0833333;
                    document.getElementById("resultado").innerHTML = conversion + " pulgada(s)";
                    break;
                case "kilómetros":
                    conversion = parseFloat(campoCantidad.value) / 0.0000254;
                    document.getElementById("resultado").innerHTML = conversion + " pulgada(s)";
                    break;
                case "metros":
                    conversion = parseFloat(campoCantidad.value) / 0.0254;
                    document.getElementById("resultado").innerHTML = conversion + " pulgada(s)";
                    break;
            }
            break;
        }
        case "pies":{
            switch(longitud[index2]){
                case "pulgadas":
                    conversion = parseFloat(campoCantidad.value) / 12;
                    document.getElementById("resultado").innerHTML = conversion + " pie(s)";
                    break;
                case "pies":
                    conversion = parseFloat(campoCantidad.value);
                    document.getElementById("resultado").innerHTML = conversion + " pie(s)";
                    break;
                case "kilómetros":
                    conversion = parseFloat(campoCantidad.value) / 0.0003048;
                    document.getElementById("resultado").innerHTML = conversion + " pie(s)";
                    break;
                case "metros":
                    conversion = parseFloat(campoCantidad.value) / 0.3048;
                    document.getElementById("resultado").innerHTML = conversion + " pie(s)";
                    break;
            }
            break;
        }
        case "kilómetros":{
            switch(longitud[index2]){
                case "pulgadas":
                    conversion = parseFloat(campoCantidad.value) / 39370.08;
                    document.getElementById("resultado").innerHTML = conversion + " kilómetro(s)";
                    break;
                case "pies":
                    conversion = parseFloat(campoCantidad.value) / 3280.84;
                    document.getElementById("resultado").innerHTML = conversion + " kilómetro(s)";
                    break;
                case "kilómetros":
                    conversion = parseFloat(campoCantidad.value);
                    document.getElementById("resultado").innerHTML = conversion + " kilómetro(s)";
                    break;
                case "metros":
                    conversion = parseFloat(campoCantidad.value) / 1000;
                    document.getElementById("resultado").innerHTML = conversion + " kilómetro(s)";
                    break;
            }
            break;
        }
        case "metros":{
            switch(longitud[index2]){
                case "pulgadas":
                    conversion = parseFloat(campoCantidad.value) / 39.3701;
                    document.getElementById("resultado").innerHTML = conversion + " metro(s)";
                    break;
                case "pies":
                    conversion = parseFloat(campoCantidad.value) / 3.2808;
                    document.getElementById("resultado").innerHTML = conversion + " metro(s)";
                    break;
                case "kilómetros":
                    conversion = parseFloat(campoCantidad.value) / 0.001;
                    document.getElementById("resultado").innerHTML = conversion + " metro(s)";
                    break;
                case "metros":
                    conversion = parseFloat(campoCantidad.value);
                    document.getElementById("resultado").innerHTML = conversion + " metro(s)";
                    break;
            }
            break;
        }
    }
}

window.addEventListener("load", inicio, false);