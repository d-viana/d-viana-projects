var fecha = new Date();

var añoCompleto = fecha.getUTCFullYear();
var mes = fecha.getMonth();
var diaMesNumero = fecha.getDate();
var diaSemana = fecha.getDay();
var horas = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();
var milisegundos = fecha.getMilliseconds();
var segundosTotales = fecha.getTime();

document.writeln("La fecha es " + fecha + "<br>");
document.writeln("El año es " + añoCompleto + "<br>");
document.writeln("El mes es " + mes + "<br>");
document.writeln("El número del dia es " + diaMesNumero + "<br>");
document.writeln("El día de la semana es " + diaSemana + "<br>");
document.writeln("La hora es " + horas + "<br>");
document.writeln("Los minutos son " + minutos + "<br>");
document.writeln("Los segundos son " + segundos + "<br>");
document.writeln("Los milisegundos son " + milisegundos + "<br>");
document.writeln("Los segundos totales desde 1970 (comienzo de la era Unix) son " + segundosTotales + "<br>");



//Dia y Mes por nombre
var mesesAño = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Juéves", "Viernes", "Sábado");


document.writeln("<br><br>El mes actual es " + mesesAño[mes] + "<br>");
document.writeln("El dia actual es " + diasSemana[diaSemana]);

//Cálculo del intervalo de tiempo

document.writeln("<h1>Tiempo de respuesta</h1>")

var fecha_1 = new Date();
var respuesta = prompt("¿Quien descubrió América?", "");

var fecha_2 = new Date();
var tiempo = fecha_2 - fecha_1;


//Si hay más de 999 milisegundos es más de un segundo
if (tiempo > 999) {

    //Al dividir entre 1000 podría pasar que aparecieran decimales por eso lo vuelve a multiplicar por 1000 para recuperar esos decimales como segundos
    var segundos = parseInt(tiempo / 1000);
    tiempo -= (segundos * 1000)

} else {
    var segundos = 0;
}

//Si hay más 59 segundos hay más de un minuto
if (segundos > 59) {
    var minutos = parseInt(segundos / 60);
    segundos = (minutos * 60);
} else {
    minutos = 0;
}

//Si hay más 59 minutos hay más de una hora
if (minutos > 59) {
    var horas = parseInt(minutos / 60);
    horas = (horas * 60);
} else {
    horas = 0;
}

//Si hay más 24 horas hay más de un día
if (horas > 23) {
    var dias = parseInt(horas / 24);
    dias = (dias * 24);
} else {
    dias = 0;
}



document.write("<br>Ha tardado " + dias + " dias, " + horas + " horas : " + minutos + " minutos : " + segundos + " segundos " + tiempo + " milisegundos.");


//Ajustar Fecha. Aumenta la fecha en un año y te da el nombre del día que correspondería

var date = new Date();
document.write(date + "<br>")

var anualidad = date.getFullYear();
date.setFullYear(anualidad + 1);

document.write(date);