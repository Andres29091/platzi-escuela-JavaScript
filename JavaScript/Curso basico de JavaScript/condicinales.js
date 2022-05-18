/* if(false) {
    console.log("Hola");
} else if (true){
    console.log("Soy falso");
} else {

} */

/* -------------------------------------- */

let edad = 18;

if (edad === 18) {
    console.log("Puedes votar, sera tu 1era votacion");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}

/* -------------------------------------- */

let numero = 1;

let resultado = numero === 1 ? console.log("Si soy un uno") : console.log("No, no soy uno");

/* ----------------------------------------- */

let opcion1 = "piedra";
let opcion2 = "papel";
let opcion3 = "tijera";

function piedraPapelTijera(user, cpu) {
    user = user.toLowerCase();
    cpu = cpu.toLowerCase();
    if (user !== "" || cpu !== "") {
        if (user !== cpu) {
            if (user === opcion1 && cpu === opcion2) {
                console.log("El usuario CPU gano");
            } else if (user === opcion1 && cpu === opcion3) {
                console.log("El usuario gano");
            } else if (user === opcion2 && cpu === opcion3) {
                console.log("El usuario CPU gano");
            }
        } else if (user === cpu) {
            console.log("Empate");
        }
    } else {
        console.log("No ha ingresado valores");
    }
}