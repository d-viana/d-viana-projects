function dados() {

    var resultado = 0;

    do {

        //Math.random() crea numeros aleatorios entre 0 y 1. Al multiplicarlo por 10 te da valores entre 1 y 10
        resultado = parseInt(Math.random() * 10);
    } while (resultado < 1 || resultado > 6)

    alert("El resultado es: " + resultado);
}