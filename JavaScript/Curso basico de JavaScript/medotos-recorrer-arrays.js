let articulos = [
    {
        nombre: "Bici",
        costo: 3000
    },
    {
        nombre: "Tv",
        costo: 2500
    },
    {
        nombre: "Libro",
        costo: 320
    },
    {
        nombre: "Celular",
        costo: 10000
    },
    {
        nombre: "Laptop",
        costo: 20000
    },
    {
        nombre: "Teclado",
        costo: 500
    },
    {
        nombre: "Audifonos",
        costo: 1700
    }
]

/* filter --> Crea un nuevo array con los elementos del array que paso como parametro y que cumplan con la condicion de definida */

let articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 3000;
});

/* map --> Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.*/

let nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
});

/* find --> Retorna el primer elemento de un array que cumple con una condicion definida en un nuevo array */

let encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop";
});

/* forEach --> Ejecuta la funcion dada una vez por cada elemento */

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

/* some --> retorna un booleano si hay elementos en un array que cumpla con la condicion indicada  */

let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});