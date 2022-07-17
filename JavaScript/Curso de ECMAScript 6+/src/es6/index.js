function newFunction(name, age, country) {
    let name = name || 'Felipe';
    let age = age || '23';
    let country = country || 'COL';
    console.log(name, age, country);
}

//TODO: Asignar valores a parametros EC6

function newFunction2(name = 'felipe', age = '23', country = 'COL') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Andres', '32', 'MX');

/*  --------------------------------------- */

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log("epicPhrase: " + epicPhrase);

//TODO: Templeate literal EC6

let epicPhrase2 = `${hello} ${world}`;
console.log(`Epic Phrase 2: ${epicPhrase2}`);

/* ---------------------------------------- */

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tortor fermentum, sagittis leo quis, ullamcorper libero \n"
    + "Another epic phrase";

//TODO: Salto de linea EC6

let lorem2 = `Another epic phrase we need
now is another epic phrase`;

console.log(lorem);
console.log(lorem2);

/* ------------------------------------------ */

let person = {
    'name': 'Felipe',
    'age': 23,
    'country': 'COL'
};


console.log(person.name, person.age);

// TODO: Desestructuracion de elementos EC6

let { name } = person;
console.log(name);

/* ------------------------------------------- */

// TODO: operador SPREAD o sintaxis extendida

let team1 = ['Oscar', 'Felipe', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//TODO: Scope de variables

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

//TODO: variable const

const a = "b";
a = "a";

/* ------------------------------------ */

//TODO: creacion de objetos.

let name1 = "Felipe";
let age1 = 23;

// EC5
obj = { name: name1, age: age1 };

// EC6
obj2 = { name1, age1 };
console.log(obj2);

// TODO: Arrow functions

const names = [
    { name: 'Felipe', age: 23 },
    { name: 'Andres', age: 32 }
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
});

let listOfNames2 = names.map(item => {
    console.log(item.name);
});

const listOfNames3 = (name, age, country) => {

}

const listOFNames4 = name => {

}

const square = num => num * num;

// TODO: Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!')
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hello'))
    .catch(error => console.log(error));

/* ------------------------------------------ */

class calculator {
    constructor() {
        this.valueA = 0;
        this.ValueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

/* ------------------------------ */

//TODO: Importar y exportar

import { hello } from './module';

console.log(hello());

//TODO: Funcion generadora

function* helloWorld(){
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);