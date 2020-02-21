function externa() {

    document.write(" Esto es una funcion externa");

    function interna() {
        document.write(" Esto es una funcion interna.");
    }

    //Llamada dentro de su función padre.
    interna();

}

//Lamada a la función
externa();

//Forma de llamar a una funcion anidada dentro de otra
externa().interna();