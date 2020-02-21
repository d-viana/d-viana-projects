alert("Introduce tu numero de dni sin letra: ");

var numDni = prompt();

document.write("Número dni: " + numDni);

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var posicion = numDni % 23;

var letraDni = letras[posicion];

document.write("Tu dni es: " + numDni + letrasDni);