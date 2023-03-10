// Fig. 11.12: FechaHora.js
// Métodos de fecha y hora del objeto Date

function iniciar(){
    let actual = new Date();

    // métodos de formato de catenas y valueOf
    document.getElementById("cadenas").innerHTML = 
        "<p>toString: "+actual.toString()+"</p>" +
        "<p>toLocaleString: "+actual.toLocaleString()+"</p>" +
        "<p>toUTCString: "+actual.toUTCString()+"</p>" +
        "<p>valueOf: "+actual.valueOf()+"</p>";

    // metodos get
    document.getElementById("metodosGet").innerHTML =
        "<p>getDate: " + actual.getDate() + "</p>" +
        "<p>getDay: " + actual.getDay() + "</p>" +
        "<p>getMonth: " + actual.getMonth() + "</p>" +
        "<p>getFullYear: " + actual.getFullYear() + "</p>" +
        "<p>getTime: " + actual.getTime() + "</p>" +
        "<p>getHours: " + actual.getHours() + "</p>" +
        "<p>getMinutes: " + actual.getMinutes() + "</p>" +
        "<p>getSeconds: " + actual.getSeconds() + "</p>" +
        "<p>getMilliseconds: " + actual.getMilliseconds() + "</p>" +
        "<p>getTimezoneOffset: " + actual.getTimezoneOffset() + "</p>";

    // creacion de un objeto Date
    let otraFecha = new Date(2011,2,18,1,5,0,0);
    document.getElementById("nuevosArgumentos").innerHTML = "<p>Date: "+otraFecha+"</p>";

    // metodos set
    otraFecha.setDate(31);
    otraFecha.setMonth(11);
    otraFecha.setFullYear(2011);
    otraFecha.setHours(23);
    otraFecha.setMinutes(59);
    otraFecha.setSeconds(59);
    document.getElementById("metodosSet").innerHTML = 
        "<p>Fecha modificada: "+otraFecha+"</p>";
}   // fin de la función iniciar

window.addEventListener("load",iniciar,false);