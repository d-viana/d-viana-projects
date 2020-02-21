function isPalindromo(texto) {

    //Pone en minusculas
    var letras = texto.toLowerCase();
    //Crea un array con las letras separadas
    letras = letras.split("");


    //Elimina los espacios
    var cadenaSinEspacios = "";
    for (i in letras) {
        if (letras[i] != " ") {
            cadenaSinEspacios += letras[i];
        }
    }


    var letrasReves = cadenaSinEspacios.split("").reverse();



    if (letras == letras.reverse()) {

        return "Es un palindromo";

    } else {

        return "No es un palindromo";
    }
}

function palindromo(cadena) {



    // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
    var iguales = true;
    for (i in letras) {
        if (letras[i] == letrasReves[i]) {
            // Todo bien
        } else {
            // Alguna letra es distinta, por lo que ya no es un palindromo
            iguales = false;
        }
    }

    if (iguales) {
        resultado += " es un palíndromo";
    } else {
        resultado += " no es un palíndromo";
    }

    return resultado;
}