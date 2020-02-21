function hasMayus(text) {

    if (text === text.toUpperCase()) {

        return "El texto solo tiene mayusculas";

    } else if (text === text.toLowerCase()) {

        return "El texto solo tiene minusculas";

    } else {

        return "Este texto contiene mayusculas y minusculas";
    }
}