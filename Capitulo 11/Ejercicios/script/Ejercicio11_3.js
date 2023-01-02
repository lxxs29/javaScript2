/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 3 */
var resultados;
function iniciar(){
    resultados = document.getElementById("resultados");
    funcionesMath();
}

function funcionesMath(){
    resultados.innerHTML = "abs( 7.2 ) >> " + (Math.abs(7.2)) + "\n";
    resultados.innerHTML += "ceil( 9.2 ) >> " + (Math.ceil(9.2)) + "\n";
    resultados.innerHTML += "cos( 0 ) >> " + (Math.cos(0)) + "\n";
    resultados.innerHTML += "exp( 1 ) >> " + (Math.exp(1)) + "\n";
    resultados.innerHTML += "floor( 9.2 ) >> " + (Math.floor(9.2)) + "\n";
    resultados.innerHTML += "log( 2.718282 ) >> " + (Math.log(2.718282)) + "\n";
    resultados.innerHTML += "max( 2.3, 12.7 ) >> " + (Math.max(2.3, 12.7)) + "\n";
    resultados.innerHTML += "min( 2.3, 12.7 ) >> " + (Math.min(2.3, 12.7)) + "\n";
    resultados.innerHTML += "pow( 2, 7 ) >> " + (Math.pow(2, 7)) + "\n";
    resultados.innerHTML += "round( 9.75 ) >> " + (Math.round(9.75)) + "\n";
    resultados.innerHTML += "sin( 0 ) >> " + (Math.sin(0)) + "\n";
    resultados.innerHTML += "sqrt( 9.0 ) >> " + (Math.sqrt(900)) + "\n";
    resultados.innerHTML += "tan( 0 ) >> " + (Math.tan(0)) + "\n";
    
}

window.addEventListener("load", iniciar, false);