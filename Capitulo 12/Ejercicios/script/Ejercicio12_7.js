/* Capítulo 12 - Ejercicio 7 */
/* Miguel Conde Luis */
var tabla;
var crucigrama = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
var temp = [], celdas, clicks = [];
function iniciar(){
    tabla = document.getElementById("tabla");
    //mensajes = document.getElementById("mensajes");
    reiniciar();

    celdas = document.getElementsByName("celda");
    celdas.forEach(celda =>{
        celda.addEventListener("click", function(){
            mover(this);
        });
    });
}

function mover(celda){
    var xCelda1, yCelda1, xCelda2, yCelda2, numTemp1, numTemp2;
    //console.log(clicks);
    if(clicks.length <= 2){
        clicks.push(celda);
    }
    if(clicks.length == 2){
        if(clicks[1].innerHTML == 0){
            for(var x in crucigrama){
                for(var y in crucigrama){
                    if(crucigrama[x][y] == clicks[0].innerHTML){
                        xCelda1 = x;
                        yCelda1 = y;
                        //console.log("x1: " + x + " y1: " + y);
                    }
                    if(crucigrama[x][y] == clicks[1].innerHTML){
                        xCelda2 = x;
                        yCelda2 = y;
                        //console.log("x2: " + x + " y2: " + y);
                    }
                }
            }
            //validar que celda2 sea adyacente a celda1
            if(adyacentes(xCelda1, yCelda1, xCelda2, yCelda2)){
                numTemp1 = clicks[1].innerHTML;
                numTemp2 = clicks[0].innerHTML;
                clicks[0].innerHTML = numTemp1;
                clicks[1].innerHTML = numTemp2;
                actualizarTabla(xCelda1, yCelda1, xCelda2, yCelda2);
            }
            clicks.splice(1);
            clicks.splice(0);
        }
        else{
            clicks.splice(1);
            clicks.splice(0);
        }
    }
}

function actualizarTabla(x1, y1, x2, y2){
    var temp = crucigrama[x1][y1];
    crucigrama[x1][y1] = crucigrama[x2][y2];
    crucigrama[x2][y2] = temp;
}

function adyacentes(x1, y1, x2, y2){
    var tempx = 0,tempy = 0;
    tempx = parseInt(x1) - 1;
    //console.log("tempx: " + tempx + " y: " + y1);
    if(tempx == x2 && y1 == y2) return true; //celda2 arriba de celda1

    tempx = parseInt(x1) + 1;
    //console.log("tempx: " + tempx + " y: " + y1);
    if(tempx == x2 && y1 == y2) return true; //celda2 abajo de celda1

    tempy = parseInt(y1) - 1;
    //console.log("x: " + x1 + " tempy: " + tempy);
    if(x1 == x2 && tempy == y2) return true; //celda2 izquierda de celda1

    tempy = parseInt(y1) + 1;
    //console.log("x: " + x1 + "tempy: " + tempy);
    if(x1 == x2 && tempy == y2) return true; //celda2 derecha de celda1

    return false; //si no se cumple ninguna condición anterior, entonces no son ayacentes
}

function reiniciar(){
    for(var i = 0; i < 15; i++){
        asignarMosaicos();
    }
    var t = "<table border='1px'><tbody>";
    for(var x in crucigrama){
        t += "<tr>";
        for(var y in crucigrama[x]){
            if(crucigrama[x][y] != 0)
                t += "<td name='celda' value='" + crucigrama[x][y]+ "'>" + crucigrama[x][y] + "</td>";
            else
                t += "<td name='celda' value='" + crucigrama[x][y]+ "'> </td>";
            //id++;
        }
        t += "</tr>";
    }
    t += "</tbody></table>";
    tabla.innerHTML = t;
}

function asignarMosaicos(){
    var numero = Math.floor(1 + Math.random() * 15);
    while(temp.includes(numero)){
        numero = Math.floor(1 + Math.random() * 15);
    }
    temp.push(numero);
    var posicionX = Math.floor(Math.random() * 4);
    var posicionY = Math.floor(Math.random() * 4);
    while(crucigrama[posicionX][posicionY] != 0){
        posicionX = Math.floor(Math.random() * 4);
        posicionY = Math.floor(Math.random() * 4);
    }
    crucigrama[posicionX][posicionY] = numero;
}

window.addEventListener("load", iniciar, false);