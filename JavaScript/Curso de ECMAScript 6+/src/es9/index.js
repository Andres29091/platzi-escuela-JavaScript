//TODO desestructuracion

const obj = {
    name: 'Andres',
    age: 23
};

let {name, ...all } = obj;
console.log(all);

//TODO operador de propagacion

const obj1 = {
    ...obj,
    country: 'COL'
};

console.log(obj1);

//TODO promise.finally

const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finally'))

//TODO regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

const match = regexData.exec('2022-07-17');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);