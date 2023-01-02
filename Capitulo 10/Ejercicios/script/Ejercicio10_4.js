/* Miguel Conde Luis */
/* Ejercicio 10.4 */

/* ------------a------------- */
let tabla = new Array(new Array(3), new Array(3), new Array(3));
/* ------------b------------- */
let totalElementos = tabla.length * tabla[0].length;
/* ------------c------------- */
for(let x in tabla){
    for(let y in tabla[x]){
        tabla[x][y] = x + y;
    }
}