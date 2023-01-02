/* Ejercicio 10.11 */
/* Miguel Conde Luis  */

/* a */
cuentas = [0,0,0,0,0,0,0,0,0,0];

/* b */
function b(){
    document.getElementById("mostrar");
    const bono = new Array(15);
    let i = 0;
    for(i=0;i<15;i++){
        bono[i] = 1;
    }
    console.log(bono);
    document.writeln("<h3>"+bono+"<h3>");
}

/* c */
function c(){
    document.getElementById("mostrar");
    const mejoresPuntuaciones = new Array(5);
    let i;
    for(i=0;i<5;i++){
        mejoresPuntuaciones[i] += 1;
        console.log(" "+mejoresPuntuaciones[i]); 
        document.writeln("<p>"+" "+mejoresPuntuaciones[i]+"</p>");
    }
}
