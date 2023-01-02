/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 23*/

let coincidenciasA = [];

var campoTexto, resultadoA, resultadoB, resultadoC;

function reinicar(){
    coincidenciasA = [
        [97, 0], [98, 0], [99, 0], [100, 0], [101, 0], [102, 0],
        [103, 0], [104, 0], [105, 0], [106, 0], [107, 0], [108, 0],
        [109, 0], [110, 0], [241, 0], [111, 0], [112, 0], [113, 0], 
        [114, 0], [115, 0], [116, 0], [117, 0], [118, 0], [119, 0], 
        [120, 0], [121, 0], [122, 0]
    ];
}
//split
function iniciar(){
    var botonA = document.getElementById("metodoA");
    var botonB = document.getElementById("metodoB");
    var botonC = document.getElementById("metodoC");

    campoTexto = document.getElementById("campoTexto");

    resultadoA = document.getElementById("resultadoA");
    resultadoB = document.getElementById("resultadoB");
    resultadoC = document.getElementById("resultadoC");
    
    reinicar();
    
    botonA.addEventListener("click", validarA, false);
    botonB.addEventListener("click", validarB,false);
    botonC.addEventListener("click", validarC,false);
}

function validarC(){
    if(!campoTexto.value == "")
        calcularC();
}

function buscar(x){
    return x
}

function calcularC(){
    var palabras = campoTexto.value.split(" ");
    var distintas = [];
    var total = [];
    for(var p in palabras){
        if(!distintas.find((elment)=>elment == palabras[p])){
            total.push(1);
            distintas.push(palabras[p]);
        }
        else{
            var index = distintas.findIndex((elment)=>elment == palabras[p]);
            total[index]++;
        }
    }
    imprimirC(distintas, total);
}

function imprimirC(palabra, numero){
    var tabla = "<table border='1px'><thead><tr><th>Palabra</th><th>Ocurrencias</th></tr></thead><tbody>";
    for(var p in palabra){
        tabla += "<tr><td>" + palabra[p] + "</td><td>" + numero[p] + "</td></tr>";
    }
    tabla += "</tbody></table>";
    resultadoC.innerHTML = tabla;
}

function validarB(){
    if(!campoTexto.value == "")
        calcularB();
}

function calcularB(){
    var palabras = campoTexto.value.split(" ");
    var longitudes = [];
    var totalLetras = [];
    for(var p in palabras){
        longitudes.push(palabras[p].length);
    }

    for(var i = 1; i <= Math.max(...longitudes); i++){
        totalLetras.push(0);
        for(var p in palabras){
            if(palabras[p].length == i) totalLetras[i-1]++;
        }
    }

    imprimirB(totalLetras);
}

function imprimirB(total){
    var tabla = "<table border='1px'><thead><tr><th>Longitud de palabra</th><th>Ocurrencias</th></tr></thead><tbody>";
    for(var t in total){
        tabla += "<tr><td>" + (parseInt(t)+1) + "</td><td>" + total[t] + "</td></tr>";
    }
    tabla += "</tbody></table>";
    resultadoB.innerHTML = tabla;
}

function validarA(){
    reinicar();
    if(!campoTexto.value == "")
        calcularA();
}

function calcularA(){
    var texto = campoTexto.value + "";
    texto = texto.toLowerCase();
    //console.log("ñ".charCodeAt(0));
    for(let carac in texto){
        for(let i = 97 ; i <= 122; i++){
            if(texto.charCodeAt(carac) == i) guardar(i);
        }
        if(texto.charCodeAt(carac) == 241) guardar(241);
    }
    
    imprimir();
}

function guardar(ascii){
    for(let e in coincidenciasA){
        if(coincidenciasA[e][0] == ascii) coincidenciasA[e][1]++;
    }
}

function imprimir(){
    var tabla = "<table cellspacing='0' class='tablaA'><tbody>"
    for(let e in coincidenciasA){
        if(coincidenciasA[e][1] != 0)
            tabla += "<tr><td>contiene " + coincidenciasA[e][1] + "</td><td> '" + String.fromCharCode(coincidenciasA[e][0]) + "'</td></tr>";
        else
            tabla += "<tr><td>ninguna</td><td> '" + String.fromCharCode(coincidenciasA[e][0]) + "'</td></tr>";
    }
    tabla += "</tbody></table>";
    resultadoA.innerHTML = tabla;
}

window.addEventListener("load", iniciar, false);