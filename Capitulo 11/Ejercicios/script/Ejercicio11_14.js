/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 14 */

let coincidencias = [];

var campoTexto, resultado;

function reinicar(){
    coincidencias = [
        [97, 0], [98, 0], [99, 0], [100, 0], [101, 0], [102, 0],
        [103, 0], [104, 0], [105, 0], [106, 0], [107, 0], [108, 0],
        [109, 0], [110, 0], [241, 0], [111, 0], [112, 0], [113, 0], 
        [114, 0], [115, 0], [116, 0], [117, 0], [118, 0], [119, 0], 
        [120, 0], [121, 0], [122, 0]
    ];
}

function iniciar(){
    var boton = document.getElementById("calcular");
    campoTexto = document.getElementById("campoTexto");
    resultado = document.getElementById("resultado");
    reinicar();   
    boton.addEventListener("click", validar, false);
}
function validar(){
    reinicar();
    if(!campoTexto.value == "")
        calcular();
}
function calcular(){
    var texto = campoTexto.value + "";
    texto = texto.toLowerCase();
    console.log("ñ".charCodeAt(0));
    for(let carac in texto){
        for(let i = 97 ; i <= 122; i++){
            if(texto.charCodeAt(carac) == i) guardar(i);
        }
        if(texto.charCodeAt(carac) == 241) guardar(241);
    } 
    imprimir();
}
function guardar(ascii){
    for(let e in coincidencias){
        if(coincidencias[e][0] == ascii) coincidencias[e][1]++;
    }
}
function imprimir(){
    for(let e in coincidencias){
        resultado.value += String.fromCharCode(coincidencias[e][0]) + " >>> " + coincidencias[e][1] + "\n";
    }
}
window.addEventListener("load", iniciar, false);