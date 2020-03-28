/*
    filename: app.js
*/
"use strict";

var firstName; // no block scope

function doSomething() {
    for (var i = 0; i < 3; i++) {
        var firstName;
    }
}
const pi = 3.14;  // supports block scope
let lastName; // supports block scope

console.log("Hello CS472-WAP, welcome to JavaScript");
console.log(lastName);
lastName = 'Samuel';
console.log(`The lastName is ${lastName}`);
console.log('The lastName is ' + lastName);

//JS is a loosely-typed language vs strongly-typed
let i;
i = 4; // typeof i = Number
i = "hello"; //type inference

let c = 1 + "1";
console.log(c) // 11

// = = vs = = = 
// Equality operators

// == means compare using type coercion (automatic type conversion)
let one = 1;
let strOne = '1';
console.log(one == strOne); // true

// = = =  compares without type coercion (automatic type conversion) compare type and value
// strict equality
let one2 = 1;
let strOne2 = '1';
console.log(one2 === strOne2); // false

const numbers = [];
numbers.push(1);
numbers.push(2);
numbers.push(3);
console.log(numbers);

numbers.pop()
console.log(numbers);

// Imperative iteration
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// Functional programming iteration
numbers.forEach(x => console.log(x));
numbers.map(number => number * 2).forEach(num => console.log(num))
