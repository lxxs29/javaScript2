/* Miguel Conde Luis */
/* Capítulo 11 - Ejercicio 25 */

var campoNumero;
function inicio(){
    document.getElementById("imprimir").addEventListener("click", imprimir, false);
    campoNumero = document.getElementById("campoNumero");
}

function imprimir(){
    var resultado = "";
    if(campoNumero.value.length > 0 && parseFloat(campoNumero.value) > 0){
        var esDecimal = campoNumero.value.split(".");
        if(esDecimal.length == 2){
            resultado += digitos(esDecimal[0]);
            resultado += " CON " + esDecimal[1] + "/100";
        }
        else{
            resultado += digitos(esDecimal[0]);
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function digitos(valor){
    var numero = parseInt(valor);
    for(var c in valor){
        if(valor[0] == 0) valor = valor.slice(1);
        else break;
    }
    switch(parseInt(valor.length)){
        case 1:
            return unDigito(numero);
        case 2:
            switch(true){
                case (numero > 15 && numero < 20):
                    return "DIECI" + unDigito(valor[1]);
                case (numero < 16):
                    return dosDigitos(numero);
                case (numero == 20)://
                    return dosDigitos(20);
                case (numero > 20 && numero < 30):
                    return "VEINTI" + unDigito(valor[1]);
                case (numero == 30)://
                    return dosDigitos(30);
                case (numero > 30 && numero < 40):
                    return dosDigitos(30) + " Y " + unDigito(valor[1]);
                case (numero == 40)://
                    return dosDigitos(40);
                case (numero > 40 && numero < 50):
                    return dosDigitos(40) + " Y " + unDigito(valor[1]);
                case (numero == 50)://
                    return dosDigitos(50);
                case (numero > 50 && numero < 60):
                    return dosDigitos(50) + " Y " + unDigito(valor[1]);
                case (numero == 60):
                    return dosDigitos(60);
                case (numero > 60 && numero < 70):
                    return dosDigitos(60) + " Y " + unDigito(valor[1]);
                case (numero == 70):
                    return dosDigitos(70);
                case (numero > 70 && numero < 80):
                    return dosDigitos(70) + " Y " + unDigito(valor[1]);
                case (numero == 80):
                    return dosDigitos(80);
                case (numero > 80 && numero < 90):
                    return dosDigitos(80) + " Y " + unDigito(valor[1]);
                case (numero == 90):
                    return dosDigitos(90);
                case (numero > 90 && numero < 100):
                    return dosDigitos(90) + " Y " + unDigito(valor[1]);
                default:
                    return "";
            }
        case 3:
            switch(true){
                case (numero == 100):
                    return "CIEN";
                case (numero > 100 && numero < 200):
                    return "CIENTO " + digitos(valor.slice(1));
                case (numero > 199 && numero < 300):
                    return "DOSCIENTOS " + digitos(valor.slice(1));
                case (numero > 299 && numero < 400):
                    return "TRECIENTOS " + digitos(valor.slice(1));
                case (numero > 399 && numero < 500):
                    return "CUATROCIENTOS " + digitos(valor.slice(1));
                case (numero > 499 && numero < 600):
                    return "QUINIENTOS " + digitos(valor.slice(1));
                case (numero > 599 && numero < 700):
                    return "SEISCIENTOS " + digitos(valor.slice(1));
                case (numero > 699 && numero < 800):
                    return "SETECIENTOS " + digitos(valor.slice(1));
                case (numero > 799 && numero < 900):
                    return "OCHOCIENTOS " + digitos(valor.slice(1));
                case (numero > 899 && numero < 1000):
                    return "NOVECIENTOS " + digitos(valor.slice(1));
                default:
                    return "";
            }
        case 4:{
            if(valor[0] == 1) return "MIL" + digitos(valor.slice(1));
            else return unDigito(valor[0]) + " MIL " + digitos(valor.slice(1));
        }
        case 5:{
            return digitos(valor[0] + "" + valor[1]) + " MIL " + digitos((valor.slice(1)).slice(1));
        }
        case 6:{
            return digitos(valor[0] + "" + valor[1] + "" + valor[2]) + " MIL " + digitos((valor.slice(1)).slice(1).slice(1));
        }
        case 7:{
            if(numero == 1000000) return "UN MILLÓN"
        }
        default:
            return "";
    }
}


function unDigito(valor){
    valor = parseInt(valor);
    switch(valor){
        case 1:
            return "UNO";
        case 2:
            return "DOS";
        case 3:
            return "TRES";
        case 4:
            return "CUATRO";
        case 5:
            return "CINCO";
        case 6:
            return "SEIS";
        case 7:
            return "SIETE";
        case 8:
            return "OCHO";
        case 9:
            return "NUEVE";
        default:
            return "";
    }
}

function dosDigitos(valor){
    switch(valor){
        case 10:
            return "DIEZ";
        case 11:
            return "ONCE";
        case 12:
            return "DOCE";
        case 13:
            return "TRECE";
        case 14:
            return "CATORCE";
        case 15:
            return "QUINCE";
        case 20:
            return "VEINTE"
        case 30:
            return "TREINTA";
        case 40:
            return "CUARENTA";
        case 50:
            return "CINCUENTA";
        case 60:
            return "SESENTA";
        case 70:
            return "SETENTA";
        case 80:
            return "OCHENTA";
        case 90:
            return "NOVENTA";
        default:
            return "";
    }
}

window.addEventListener("load", inicio, false);