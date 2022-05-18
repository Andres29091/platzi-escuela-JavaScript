/* Objeto */

let miMoto = {
    marca: "Bajaj",
    modelo: "BM 100",
    annio: "2016",
    detalleMoto: function(){
        console.log(`Moto ${this.modelo} ${this.annio}`);
    }
};

/* Funcion constructora */

function moto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let motoNueva = new moto("Hero", "X Pulse 200 FI", "2023");
