/* Miguel Conde Luis */
/* Capítulo 11 -  Ejercicio 21 */

const diccionario = [
    "feo", "dar", "ver", "dia", "uso", "kit", "rio", "rol",
    "don", "paz", "luz", "ser", "que", "asi", "rey", "fea",
    "por", "fin", "mas", "con", "oir", "pan", "vez", "amo",
    "set", "eje", "mal", "hoy", "mar", "ADN", "ira", "par",
    "via", "fan", "año", "ola", "uva", "ave", "GPS", "uña",
    "ley", "red", "pez", "voz", "muy", "era", "tan", "aun",
    "tal", "oro", "son", "web", "zen", "vil", "pie", "eco",
    "uno", "IVA", "sed", "pro", "oso", "mes", "DNI", "lio",
    "ahi", "vid", "ego", "aya", "ojo", "oda", "haz", "gas",
    "DVD", "faz", "ala", "sal", "ayo", "reo", "aro", "duo",
    "aji", "kan", "gym", "tio", "eso", "CPU", "ida", "wey",
    "tez", "mil", "bus", "gol", "tia", "pio", "can", "col",
    "sin", "lid", "nao", "ama", "sol", "DNA", "coz", "upa",
    "oca", "lar", "loa", "sor", "bis", "ere", "www", "pis",
    "pub", "bol", "nos", "gis", "ese", "way", "ido", "tea",
    "res", "aca", "ora", "asa", "pea", "oye", "ras", "bar",
    "gel", "zar", "pus", "ria", "etc", "non", "hey", "pua",
    "sur", "boa", "hez", "bra", "tas", "orí", "hoz", "tul",
    "jet", "huy", "epa", "zum", "peo", "ajo", "lee", "lie",
    "oli", "leo", "den", "leí", "ion", "sea", "dad", "lea",
    "ole", "aja", "usa", "osa", "han", "aje", "ara", "use",
    "has", "fia", "fio", "upo", "cae", "are", "fie", "upe",
    "cai", "ata", "ato", "ova", "ven", "ate", "ore", "loe",
    "ves", "veo", "izo", "ove", "vio", "ice", "ame", "rie",
    "ois", "fes", "une", "vea", "lia", "oia", "rei", "oyo",
    "uni", "van", "ved", "vas", "voy", "aza", "ase", "iba",
    "cia", "dan", "sis", "fue", "cio", "fui", "das", "doy",
    "ire", "pía", "cie", "dio", "oid", "sos", "buz", "soy"
];

var campoTexto, boton, resultado;

function iniciar(){
    campoTexto = document.getElementById("campoTexto");
    resultado = document.getElementById("resultado");
    boton = document.getElementById("buscar");
    
    boton.addEventListener("click", validar, false);
}

function validar(){
    const exp = /[A-ZÑa-zñ]{5}/;
    if(exp.test(campoTexto.value) && campoTexto.value != "" && campoTexto.value.length == 5)
        buscar();
}

function buscar(){
    let palabras = 0, texto, coincidencias_exp, derivadas = [];
    var exp;
    for(let d in diccionario){
        texto = campoTexto.value + "";
        coincidencias_exp = 0;

        for(let i = 0; i < 3; i++){
            exp  = new RegExp("" + diccionario[d][i] + "");
            if(exp.test(texto)){
                texto = texto.replace(exp, "");
                coincidencias_exp++;
            }
        }
        if(coincidencias_exp == 3){
            derivadas.push(diccionario[d]);
            console.log(diccionario[d]);
            palabras++;
        }
        if(palabras == 3) break;
    }
    imprimir(derivadas);
}

function imprimir(arreglo){
    for(let palabra in arreglo){
        resultado.innerHTML += arreglo[palabra] + "\n";
        if(palabra == arreglo.length - 1) resultado.innerHTML += "\n";
    }
}

window.addEventListener("load", iniciar, false);