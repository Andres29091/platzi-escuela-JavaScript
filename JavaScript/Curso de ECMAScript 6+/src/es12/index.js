//TODO replaceAll

const text = "JavaScript is wonderfull, with JavaScript i can create the future of the web pages.";

const replacedString = text.replace("JavaScript","Python");
console.log(replacedString);

const replacedString2 = text.replaceAll("JavaScript","Python");
console.log(replacedString2);

//TODO private method

class Message {
    #show(value) {
        console.log(value);
    };

    get #add() {
        return;
    }
}

const message = new Message();
message.show("Hello");

//TODO promise any

const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(resolve));

//TODO  WeakRef(element);

class anyClass {
    constructor(element){
        this.ref = new WeakRef(element);
    }
}

//TODO operadores logicos

let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);

console.log(isTrue ||= isFalse);

isTrue = undefined;

console.log(isTrue ??= isFalse);