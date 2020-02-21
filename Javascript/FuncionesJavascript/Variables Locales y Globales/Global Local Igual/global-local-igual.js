function mostrarValor() {
    var valor = 10;
    document.write("El valor es " + valor + "<br>");
}

mostrarValor();
//Esta no se mostraría, ya que la variable valor es local dentro de la función
document.write("El valor sigue siendo " + valor);