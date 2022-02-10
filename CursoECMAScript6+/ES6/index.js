function newFunction(name, age, country) {
    var name = name || 'Alfonso';
    var age = age || 23;
    var country = country || 'MX';
    console.log(name, age, country);
}

newFunction();

// ES6
function newFunction2(name = 'Alfonso', age = 23, country = 'MX') {
    console.log(name, age, country);
}

newFunction2('Ricardo', 23, 'MX');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Sit cupidatat do deserunt qui\n"
+ "exercitation dolor cillum.";
// ES6
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);


let person = {
    'name': 'Alfonso',
    'age': 23,
    'country': 'MX'
};

console.log(person.name, person.age);
// ES6
let {name, age, country} = person;
console.log(name, age, country);

// Expansion de arrays
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yessica', 'Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);


// uso de var y let
// let solo funciona dentro del scope local
{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalVar);

// No se puede reasignar una constante
const a = 'b';
a = 'a'; // NO SE PUEDE


let name = 'Alfonso';
let age = 32;
// ES5
obj = {name: name, age: age};
// ES6
obj2 = {name, age};
console.log(obj)
console.log(obj2);


// ARROW FUNCTIONS
const names = [
    {name: 'Alfosno', age: 23},
    {name: 'Yessica', age: 27}
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //...
};

const listOfNames4 = name => {
    // ...
};

const square = num => num * num;


// PROMESAS
const  helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
};

helloPromise()
.then(response => console.log(response))
.then(() => console.log('hola'))
.catch(error => console.log(error));



// CLASES
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// IMPORT EXPORT
const hello = require('./module');
console.log(hello());


// GENERADORES
function* helloWorld(){
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);