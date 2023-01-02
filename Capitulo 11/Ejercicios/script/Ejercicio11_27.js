/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 27 */

var campoPalabra;

const listaDePalabras = [];

function inicio(){
    campoPalabra = document.getElementById("campoPalabra");
    
    document.getElementById("comprobar").addEventListener("click", primeraLetra, false);

}

function primeraLetra(){
    var contArreglo = 0;
    document.getElementById("resultado").innerHTML = "";
    if(campoPalabra.value[0] == "ñ"){
        comprobar(26);
    }
    else{
        for(var i = 97; i <= 122; i++){
            if(campoPalabra.value[0].toLowerCase() == String.fromCharCode(i)){
                if(comprobar(contArreglo)){
                    document.getElementById("resultado").innerHTML = "La palabra está escrita correctamente";
                }
                else{
                    document.getElementById("resultado").innerHTML = "La palabra no está escrita correctamente";
                    document.getElementById("resultado").innerHTML += "¿Quiso decir " + coincidencias(contArreglo) + "?";
                    
                }
                break;
            }
            contArreglo++;
        }
    }
    
}

function comprobar(index){
    var palabraEscrita = campoPalabra.value.toLowerCase();
    for(var palabra in listaDePalabras[index]){
        if(listaDePalabras[index][palabra] == palabraEscrita){
            return true;
        }
    }
}

function coincidencias(index){
    var caracteresCoincidentes = [];
    var palabraEscrita = campoPalabra.value.toLowerCase();
    for(var palabra in listaDePalabras[index]){
        var sumaCaracteres = 0;
        if(palabraEscrita.length >= listaDePalabras[index][palabra].length){
            for(var c in palabraEscrita){
                if(listaDePalabras[index][palabra][c] == palabraEscrita[c]){
                    sumaCaracteres++;
                }
            }

        }
        caracteresCoincidentes.push(sumaCaracteres);
    }
    return imprimirMejor(index, caracteresCoincidentes);
}

function imprimirMejor(index, arreglo){
    var maximo = Math.max(...arreglo);
    for(var carac in arreglo){
        if(arreglo[carac] == maximo){
            return listaDePalabras[index][carac];
        }
    }
}

window.addEventListener("load", inicio, false);