/* Miguel Conde Luis */
/* Capitulo 11 - Ejercicio: 2 */
function iniciar(){
    var botonAhora = document.getElementById("botonAhora");
    var botonAyer = document.getElementById("botonAyer");
    var botonDiezAnios = document.getElementById("botonDiezAnios");
    var botonSemana = document.getElementById("botonSemana");

    var alerta = document.getElementById("alerta");

    botonAhora.addEventListener("click", ahora, false);
    botonAyer.addEventListener("click", ayer, false);
    botonDiezAnios.addEventListener("click", diezAnios, false);
    botonSemana.addEventListener("click", semana, false);
}

function ahora(){
    var actual = new Date();
    actual.setMonth(actual.getMonth() + 1);

    var fecha = actual.getDate() + "/" + actual.getUTCMonth() + "/" + actual.getFullYear();

    document.getElementById("alerta").innerHTML = "<p>Hora: " + actual.getHours() + ":" + actual.getMinutes() + "<br>Fecha: " + fecha + "</p>";
}

function ayer(){
    var fecha_ayer = new Date();
    fecha_ayer.setMonth(fecha_ayer.getMonth() + 1);

    fecha_ayer.setDate(fecha_ayer.getDate() - 1);

    var fecha = fecha_ayer.getDate() + "/" + fecha_ayer.getMonth() + "/" + fecha_ayer.getFullYear();

    document.getElementById("alerta").innerHTML = "<p>Hora: " + fecha_ayer.getHours() + ":" + fecha_ayer.getMinutes() + "<br>Fecha: " + fecha + "</p>";
}

function diezAnios(){
    var diez_anios = new Date();
    diez_anios.setMonth(diez_anios.getMonth() + 1);
    
    diez_anios.setFullYear(diez_anios.getFullYear() - 10, diez_anios.getMonth(), diez_anios.getDate());

    var fecha = diez_anios.getDate() + "/" + diez_anios.getMonth() + "/" + diez_anios.getFullYear();

    document.getElementById("alerta").innerHTML = "<p>Hora: " + diez_anios.getHours() + ":" + diez_anios.getMinutes() + "<br>Fecha: " + fecha + "</p>";
}

function semana(){
    var fecha_semana = new Date();
    fecha_semana.setMonth(fecha_semana.getMonth() + 1);
    
    fecha_semana.setDate(fecha_semana.getDate() - 7);

    var fecha = fecha_semana.getDate() + "/" + fecha_semana.getMonth() + "/" + fecha_semana.getFullYear();

    document.getElementById("alerta").innerHTML = "<p>Hora: " + fecha_semana.getHours() + ":" + fecha_semana.getMinutes() + "<br>Fecha: " + fecha + "</p>";
}

window.addEventListener("load", iniciar, false);