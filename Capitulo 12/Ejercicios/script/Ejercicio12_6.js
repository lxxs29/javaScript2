function iniciar(){
    document.getElementById("cambiar").addEventListener("click", cambiar);
}

function cambiar(){
    var letra = document.getElementsByName("Tipografia");
    var body = document.body;
    var color = document.getElementById("colorFondo").value;
    body.style.background = color;
    for(var opc in letra){
        if(letra[opc].checked){
            body.style.fontFamily = letra[opc].value;
        }
    }
}

window.addEventListener("load", iniciar);