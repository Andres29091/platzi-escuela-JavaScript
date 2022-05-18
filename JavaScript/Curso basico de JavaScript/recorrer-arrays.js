/* For */

let estudiantesFor = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(i) {
    console.log(`Hola, ${estudiantesFor[i]}`);
}

for (let i = 0; i < estudiantesFor.length; i++) {
    saludarEstudiante(i);
}

/* for of */

let estudiantesForOf = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (let estudiante of estudiantesForOf) {
    saludarEstudiante(estudiante);
}

/* While */

let estudiantesWhile = ["Maria", "Segio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while (estudiantesWhile.length > 0) {
    let estudiante = estudiantesWhile.shift();
    saludarEstudiantes(estudiante);
}