var palabra = prompt();
var saludo = "Hola";

console.log(palabra.length);

console.log(saludo + " " + palabra);

console.log(saludo.concat(" " + palabra));

console.log(palabra.toLocaleUpperCase());
console.log(palabra.toLocaleLowerCase());

console.log(palabra.charAt(0));

console.log(palabra.indexOf(palabra.charAt(0)));

palabra.substring(1, 6); //