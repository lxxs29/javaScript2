/* Miguel Conde Luis */
/* Ejercicio 10.10 */

function calcular()
{
    var llamada =  document.getElementById("llamada");
    var i=0; var j;
    var s = prompt("Ingresa las ventas brutas de un empleado :(Salir: -1):", "");
    var gross = parseInt(s);
    var sal_btwn = [0,0,0,0,0,0,0,0,0,0,0];
    while (gross != -1)
    {
    var income = new Array();
    var salary = 200.0 + Math.round(0.09*gross);
    income[i]=salary;
    document.writeln("Las ventas brutas realizadas por el vendedor en una semana es $ ", +gross);
    document.write("<br />");/*  */
    document.writeln("La comición del vendedor es $", +income[i]);
    document.write("<br />");
    if (income[i] >= 200 && income[i] <= 299){
        sal_btwn[2] += 1;
    }
    if (income[i]>= 300 && income[i]<= 399)
        sal_btwn[3] += 1;
    if (income[i]>= 400 && income[i] <= 499)
        sal_btwn[4] += 1;
    if (income[i] >= 500 && income[i] <= 599)
        sal_btwn[5] += 1;
    if (income[i] >= 600 && income[i] <= 699)
        sal_btwn[6] += 1;
    if (income[i] >= 700 && income[i] <= 799)
        sal_btwn[7] += 1;
    if (income[i] >= 800 && income[i] <= 899)
        sal_btwn[8] += 1;
    if (income[i] >= 900 && income[i] <= 999)
        sal_btwn[9] += 1;
    if (income[i] >= 1000)
        sal_btwn[10] += 1;
    document.write("<br />");
    i++;
    var s = prompt("Ingresa las ventas de un empleado (Salir: -1):", "");
    var gross = parseInt(s);
    }

    document.writeln("<h4>Número de ventas de personas y su salrio de cada uno en los siguientes rangos:</h4>");
    document.writeln("$200-$299 : " +sal_btwn[2]);
    document.write("<br />");
    document.writeln("$300-$399 : " +sal_btwn[3]);
    document.write("<br />");
    document.writeln("$400-$499 : " +sal_btwn[4]);
    document.write("<br />");
    document.writeln("$500-$599 : " +sal_btwn[5]);
    document.write("<br />");
    document.writeln("$600-$699 : " +sal_btwn[6]);
    document.write("<br />");
    document.writeln("$700-$799 : " +sal_btwn[7]);
    document.write("<br />");
    document.writeln("$800-$899 : " +sal_btwn[8]);
    document.write("<br />");
    document.writeln("$900-$999 : " +sal_btwn[9]);
    document.write("<br />");
    document.writeln(" más de $1000 : " +sal_btwn[10]);
}

window.addEventListener("load",calcular(),false);