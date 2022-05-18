/* 
Variables y operaciones
     Responde las siguientes preguntas en la sección de comentarios:
    ¿Qué es una variable y para qué sirve? 
        Es un espacio en memoria donde se asignan valores.
    ¿Cuál es la diferencia entre declarar e inicializar una variable?
        La diferencia es que declarar solo es asignar un espacio en memoria y inicializar es asignarle un valor a la variable.
    ¿Cuál es la diferencia entre sumar números y concatenar strings?
        La diferencia es que se suman valores de tipo number mientras que el concatenar se concatenan strings.
    ¿Cuál operador me permite sumar o concatenar?
        El operador (+) permite hacer ambas operaciones solo cambia el tipo de datos para que una u otra operacion se haga.
*/

/* Determina el nombre y tipo de dato para almacenar en variables la siguiente información: */

let nombre = "Andrés";
let apellido = "Marin";
let nombreUsuario = "AFMM";
let edad = 23;
let email = "andres29091@gmail.com";
let mayorEdad = true;
let dineroAhorrado = 4000000
let deudas = 1000000;

console.log(`Nombre Completo: ${nombre} ${apellido}`);
console.log(`Dinero Real: ${dineroAhorrado - deudas}`);

/*  
Funciones
    ¿Qué es una función?
        Es uan serie de instrucciones que hacen algo especifico.
    ¿Cuándo me sirve usar una función en mi código?
        Cuando se requiere hacer una operacion matematica o algun tipo de accion.
    ¿Cuál es la diferencia entre parámetros y argumentos de una función? 
        Parametro es lo que nesesita la funcion para realizar su proceso,
        argumento es lo que se le asigna a una funcion que nesesita para realizar su funcion.
*/

/* Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función: */

function fullName(name, lastname, nickname) {
    let completeName = name + " " + lastname;
    return "Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + "."
}

/* 
Condicionales
    ¿Qué es una condicional?
        Es una funcion que resive verdadero o falso y que dependiendo de una condicion se ejecuta o no un proceso
    ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
        Esta el condicional if else, la condicion ternaria y switch, su diferencia es que en el if es en varias lineas y el ternario se puede hacer en una sola linea y el switch se ejecuta dependiendo de una variable.
    ¿Puedo combinar funciones y condicionales?    
        Si se puede    
*/

/* Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if */

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

/* Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if). */

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

/* Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏 */

let suscripciones = ["Free", "Basic", "Expert", "ExpertPlus"];

let suscripcion = suscripciones.find(x => x === tipoDeSuscripcion);

function hallarSuscripcion(suscripcion) {
    return console.log(suscripcion === "Free"
        ? "Solo puedes tomar los cursos gratis"
        : suscripcion === "Basic"
            ? "Puedes tomar casi todos los cursos de Platzi durante un mes"
            : suscripcion === "Expert"
                ? "Puedes tomar casi todos los cursos de Platzi durante un año"
                : "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

hallarSuscripcion(suscripcion);

/* 
Ciclos
    Responde las siguientes preguntas en la sección de comentarios:
        ¿Qué es un ciclo?
            Es una funcion que se repite n veces
        ¿Qué tipos de ciclos existen en JavaScript?
            Ciclo while, for, forEach, for of, for in, do while
        ¿Qué es un ciclo infinito y por qué es un problema?
            Es un ciclo que nunca termina y es un problema porque puede consumir mucha memoria.
        ¿Puedo mezclar ciclos y condicionales?
            Si.
*/

/* Replica el comportamiento de los siguientes ciclos for utilizando ciclos while: */

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

/* ---------------------------------------- */

let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

let j = 10;

while (j >= 2) {
    console.log("El valor de i es: " + j);
    j--;
}

/* Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. */

let respuesta = 0;

do {
    respuesta = prompt("Cuanto es 2 + 2 ?");
} while (respuesta != 4);

/* 
Listas
    ¿Qué es un array?
        Es un objeto que puede estar vacio o contener varios elementos separados por coma (,).
    ¿Qué es un objeto?
        Es la representacion de un objeto en la vida real, tiene caracteristicas.
    ¿Cuándo es mejor usar objetos o arrays?
        Depende de que se vaya a realizar.
    ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
        Si se puede.
*/

/* Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. */

let motos = ["XPULSE 200 FI-OC", "MT10", "BMW 1000RR", "BOXER BM100", "DUKE 200"];

function imprimirPrimerElemento(arreglo) {
    console.log(arreglo.shift());
}

imprimirPrimerElemento(motos);

/* Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo). */

function imprimirTodosLosElementos(arreglo) {
    arreglo.forEach(function (x) {
        console.log(x);
    });
}

imprimirTodosLosElementos(motos);

/* Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */

let moto = {
    modelo: "XPULSE 200 FI-OC",
    annio: 2023,
    precio: 11000000,
    marca: "Hero"
}

function imprimirObjeto(objeto) {
    Object.values(objeto).forEach( x => {
        console.log(x);
    });
}

imprimirObjeto(moto);

/* prueba commit */