//TODO metodo de profundidad de array

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

//TODO metodo mat flat

let array1 = [1,2,3,4,5,];

console.log(array1.flatMap(value => [value * 2]));

//TODO trim start eliminar espacios al principio del string

let hello = '              Hello World';

console.log(hello);
console.log(hello.trimStart());

//TODO trimEnd eliminar espacios al final del string

let hello1 = 'Hello World              ';

console.log(hello1);
console.log(hello1.trimEnd());

//TODO Optional catch biding

try {

} catch {
    error
}

//TODO fromEntries transformar array clave valor en un objeto

let entries = [["name","Oscar"],["age",23]];

console.log(Object.fromEntries(entries));

//TODO objecto.simbolo

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);