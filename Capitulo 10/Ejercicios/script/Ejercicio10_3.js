/* Miguel Conde Luis */
/* Ejercicio 10.3 */

/* ------------a------------- */
const arreglo = new Array(3.333,0,0,0,0,0,0,0,0,1.667);
/* ------------b------------- */
console.log(arreglo[3]);
/* ------------c------------- */
console.log(arreglo[4]);
/* ------------d------------- */
/* ------------e------------- */
/* const arreglo = new Array(3.333,0,0,0,0,0,0,0,0,1.667); */
/* ------------f------------- */
let x = 0;
let resultado = 0; 
for(x in arreglo){
    resultado += arreglo[x];
}
console.log("Suma = ",resultado);