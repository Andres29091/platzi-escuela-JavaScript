//TODO Exportacion dinamica

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

//TODO BigInt

const aBigNumber = 9007199254740991n;

const anotherGibNumber = BigInt(9007199254740991);

//TODO Promise.allSettled 

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//TODO globalThis

console.log(window);
console.log(globalThis);

//TODO Operador null

const fooo = null ?? 'default string';
console.log(fooo);

//TODO optional chaning operator (?)

const user = {};

console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('Email');
} else {
    console.log("Fail");
}