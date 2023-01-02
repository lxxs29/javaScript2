/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 22 */

var resultados, campoDia, campoMes, campoAnio, boton;

function iniciar(){
    resultados = document.getElementById("resultados");
    campoDia = document.getElementById("campoDia");
    campoMes = document.getElementById("campoMes");
    campoAnio = document.getElementById("campoAnio");
    boton = document.getElementById("mostrar");
    
    fechas();
    boton.addEventListener("click", validar, false);
}

function validar(){
    if(campoDia.value.length == 2 && campoMes.value.length == 2 && campoAnio.value.length == 4){
        if((campoDia.value > 0 && campoDia.value < 31) && 
            (campoMes.value > 0 && campoMes.value < 13) &&
            (campoAnio.value > 1900 && campoAnio.value < 2023)){
                fechas();
            }
    }
}

function fechas(){
    var fecha = new Date(), dia = campoDia.value, mes = campoMes.value, anio = campoAnio.value;
    fecha.setDate(dia);
    fecha.setMonth(mes - 1);
    fecha.setFullYear(anio);
    resultados.innerHTML = "Formato 1: " + fecha + "<br>";
    resultados.innerHTML += "Formato 2: " + fecha.toLocaleDateString('es',{ weekday:"long", year:"numeric", month:"short", day:"numeric"}) + "<br>";
    resultados.innerHTML += "Formato 3: " + fecha.toLocaleDateString() + "<br>";
    resultados.innerHTML += "Formato 4: " + fecha.toDateString() + "<br>";
    resultados.innerHTML += "Formato 5: " + fecha.toLocaleString() + "<br>";
    resultados.innerHTML += "Formato 6: " + fecha.toUTCString() + "<br>";
    resultados.innerHTML += "Formato 7: " + fecha.toISOString() + "<br>";
}

window.addEventListener("load", iniciar, false);