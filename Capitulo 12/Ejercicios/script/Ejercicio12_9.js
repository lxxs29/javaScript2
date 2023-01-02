/* Capítulo 12 - Ejercicio 9 */
/* Miguel Conde Luis */

var tabla;
var mosaicos = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
var tempM = [], celdas, clicks = [], mensajes;
function iniciar(){
    tabla = document.getElementById("tabla");
    mensajes = document.getElementById("mensajes");
    reiniciar();

    celdas = document.getElementsByName("celda");
    imagenCelda();
    celdas.forEach(celda =>{
        celda.addEventListener("click", function(){
            mover(this);
        });
    });
}

function imagenCelda(){
    celdas = document.getElementsByName("celda");
    celdas.forEach(celda =>{
        console.log(celda.innerHTML);
        if(parseInt(celda.innerHTML) > 0 && parseInt(celda.innerHTML) < 16){
            celda.style.backgroundImage="url('img/caracal-tabla.png"+ celda.innerHTML +".png')";
    
            celda.style.backgroundSize="contain";
        }else{
            celda.style.backgroundImage="none";
            celda.style.backgroundColor="white";
        }
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
            for(var x in mosaicos){ 
                for(var y in mosaicos){
                    if(mosaicos[x][y] == clicks[0].innerHTML){
                        xCelda1 = x;
                        yCelda1 = y;
                        //console.log("x1: " + x + " y1: " + y);
                    }
                    if(mosaicos[x][y] == clicks[1].innerHTML){
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

                /* //prueba mensaje de fin de partida
                pruebaFin(); */
            }
            if(finPartida()){
                mensajes.innerHTML = "¡Has completado el juego!";
                var botonReiniciar = document.createElement("input");
                console.log(botonReiniciar);
                botonReiniciar.setAttribute("type", "button");
                botonReiniciar.setAttribute("value", "Reiniciar");
                botonReiniciar.setAttribute("id","botonRe");
                document.getElementById("finpartida").appendChild(botonReiniciar);
                botonReiniciar.addEventListener("click", iniciar, false);
            }
            imagenCelda();
            clicks.splice(1);
            clicks.splice(0);
        }
        else{
            clicks.splice(1);
            clicks.splice(0);
        }
    }
}


function finPartida(){
    var con = 1, cont = 0;
    for(var x in mosaicos){
        for(var y in mosaicos){
            if(mosaicos[x][y] == con && cont < 16){
                con++;
                cont++;
            }
            else break;
        }
    }
    if(mosaicos[3][3] == 0) cont++;
    return cont == 16;
}

function actualizarTabla(x1, y1, x2, y2){
    var temp = mosaicos[x1][y1];
    mosaicos[x1][y1] = mosaicos[x2][y2];
    mosaicos[x2][y2] = temp;
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
    mensajes.innerHTML = "";
    var boton =  document.getElementById("botonRe");
    if(boton != null)
        document.getElementById("finpartida").removeChild(document.getElementById("botonRe"));
    tempM = [];
    mosaicos = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
    for(var i = 0; i < 15; i++){
        asignarMosaicos();
    }
    var t = "<table cellspacing='0'><tbody>";
    for(var x in mosaicos){
        t += "<tr>";
        for(var y in mosaicos[x]){
            if(mosaicos[x][y] != 0)
                t += "<td name='celda' value='" + mosaicos[x][y]+ "'>" + mosaicos[x][y] + "</td>";
            else
                t += "<td name='celda' value='" + mosaicos[x][y]+ "'> </td>";
            //id++;
        }
        t += "</tr>";
    }
    t += "</tbody></table>";
    tabla.innerHTML = t;
}

function asignarMosaicos(){
    var numero = Math.floor(1 + Math.random() * 15);
    while(tempM.includes(numero)){
        numero = Math.floor(1 + Math.random() * 15);
    }
    tempM.push(numero);
    var posicionX = Math.floor(Math.random() * 4);
    var posicionY = Math.floor(Math.random() * 4);
    while(mosaicos[posicionX][posicionY] != 0){
        posicionX = Math.floor(Math.random() * 4);
        posicionY = Math.floor(Math.random() * 4);
    }
    mosaicos[posicionX][posicionY] = numero;
}

window.addEventListener("load", iniciar, false);