/* Miguel Conde Luis */
/* Ejercicio 4.8 */

/* ------------a------------- */
const f = new Array(10);
console.log(f[7]);
/* ------------b------------- */
g = [8,8,8,8,8];
/* ------------c------------- */
const c = new Array(100);
let calcularEnC;
for(let x in c){
    calcularEnC += c[x];
}
console.log(calcularEnC);
/* ------------d------------- */
a = [15,4,3,4,8,6,15,8,19,100,155];
b = new Array(34);

b = a.slice();
console.log(b);
/* ------------e------------- */
const w = new Array(99);
let i = 0; 
for(i=0;i<=99;i++){
    let randomN = Math.random();
    randomN *= 10 + 1;
    randomN = Math.trunc(randomN);
    w[i] = randomN;
}
console.log("Arreglo W\n",w);
