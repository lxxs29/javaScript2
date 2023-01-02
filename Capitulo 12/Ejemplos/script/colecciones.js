// fig 12.14 
// Secuencia de comandos para demostrar el uso de la colección links

function procesarVinculos(){
    var listaVinculos = document.links;
    var contenido = "<ul>";

    // concatenar cada vinculo a contenido
    for(var i=0;i<listaVinculos.length;i++){
        var vinculoActual = listaVinculos[i];
        contenido += "<li><a href='"+vinculoActual.href+"'>"+vinculoActual.innerHTML+"</li>";
    }

    contenido += "</ul>";
    document.getElementById("vinculos").innerHTML=contenido;
}

window.addEventListener("load",procesarVinculos,false);