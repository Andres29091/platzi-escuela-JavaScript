//TODO Objects entries

const data = {
    frontend: 'Felipe',
    backend: 'Valeria',
    desing: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//TODO objects value

const data1 = {
    frontend: 'Felipe',
    backend: 'Valeria',
    desing: 'Ana'
}

const values = Object.values(data1);
console.log(values);
console.log(values.length);

//TODO Padding

const str = 'Hello';
console.log(str.padStart(7, 'hi'));
console.log(str.padEnd(12, '----'));

//TODO Trilling coma

const obj = {
    name: 'Felipe',
}

/* ------------------------------ */

//TODO Async Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();