"use strict"

/* 1.	Define a function max() that takes two numbers as arguments and 
returns the largest of them.Use the if-then -else construct available in Javascript. */
function max(a, b) {
    // if (a > b) return a;
    // else return b;

    return a > b ? a : b;
}
console.log("max(2, 4) returns " + max(2, 4));

/* 2.	Define a function maxOfThree() that takes 
three numbers as arguments and returns the largest of them.
 */
function maxOfThree(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}
console.log("maxOfThree(2, 4, 6) returns " + maxOfThree(2, 4, 6));

/* 3.	Write a function isVowel() that takes a character 
(i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 */
function isVowel(c) {
    c = c.toLowerCase();
    let vowel = false;
    switch (c) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            vowel = true;
            break;
    }
    return vowel;

    // return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}
console.log("isVowel('e') returns " + isVowel('e'));

/* 4.	Define a function sum() and a function multiply() that sums and multiplies (respectively) 
all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, and 
multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach 
(i.e. for…loop or while…loop)
 */
function sum(array) {
    let total = 0;

    let i = 0;
    while (i < array.length) {
        total += array[i];
        i++;
    }

    // for (let index = 0; index < array.length; index++) {
    //     total += array[index];

    // }

    return total;
}

function multiply(array) {
    let product = 1;
    for (let index = 0; index < array.length; index++) {
        product *= array[index];

    }
    return product;
}
const arr = [1, 2, 3, 4];
console.log("sum([1, 2, 3, 4]) returns " + sum(arr));
console.log("multiply([1, 2, 3, 4]) returns " + multiply(arr));

/* write a function that can be called with any number of
arguments and returns the sum of the arguments. */
function sumWithParams(x, y, ...more) {
    //"more" is array of all extra passed params
    let total = x + y;
    if (more.length > 0) {
        for (let i = 0; i < more.length; i++) {
            total += more[i];
        }
    }
    return total;
}
console.log("sumWithParams(5, 5, 4) returns " + sumWithParams(5, 5, 4));

/* 5.	Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") 
should return the string "ratset gaj". */
// function reverse(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

function reverse(str) {
    // return str.split("").reverse().join("");
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const text = "jag testar";
console.log("reverse('jag testar') returns " + reverse(text));

/* 6.	Write a function findLongestWord() that takes an array of words and 
returns the length of the longest one.
 */
function findLongestWord(arr) {
    return arr.reduce((a, b) => a.length > b.length ? a : b);
}
const words = ['Bob', 'Allan', 'Polymorphism', 'Tx']
console.log("findLongestWord(['Bob', 'Allan', 'Polymorphism', 'Tx']) returns " + findLongestWord(words));

/* 7.	Write a function filterLongWords() that takes an array of words and an integer i 
and returns a new array containing only those words that were longer than i characters.
 */
function filterLongWords(arr, i) {
    return arr.filter(word => word.length > i);
}
console.log("filterLongWords(['Bob', 'Allan', 'Polymorphism', 'Tx'], 3) returns " + filterLongWords(words, 3));

/* 8.	Write a function named, computeSumOfSquares, that takes as input, an array of numbers 
and calculates and returns the sum of the squares of each number in the input array. 
E.g. computeSumOfSquares([1,2,3]) should be computed as 1^2 + 2^2 +3^2 = 14. Note: 
Write your Javascript code without using Imperative programming. 
i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. */
function computeSumOfSquares(arr) {
    return arr.map(num => num * num).reduce((a, b) => a + b, 0);
}
const toSquare = [1, 2, 3];
console.log("computeSumOfSquares([1, 2, 3]) returns " + computeSumOfSquares(toSquare));

/* 9.	Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers 
and it finds and prints only the numbers which are odd. */
function printOddNumbersOnly(arr) {
    arr.filter(num => num % 2 == 1).forEach(element => console.log(element));
}
const intArray = [1, 2, 3, 4, 5]
console.log("printOddNumbersOnly([1, 2, 3, 4, 5]) ");
printOddNumbersOnly(intArray);

/* 10.	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers 
and calculates and returns the sum of the squares of only the even numbers in the input array. 
E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20. */
function computeSumOfSquaresOfEvensOnly(arr) {
    return arr.filter(num => num % 2 == 0).map(num => num * num).reduce((a, b) => a + b, 0);
}
console.log("computeSumOfSquaresOfEvensOnly([[1, 2, 3, 4, 5]) returns " + computeSumOfSquaresOfEvensOnly(intArray));

/* 11.	Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) 
(defined in Problem 4 above) without using Imperative programming. i.e. 
Do NOT use any explicit looping construct; instead use functional programming style/approach.  */
function sumFunctional(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function multiplyFunctional(arr) {
    return arr.reduce((a, b) => a * b);
}
console.log("sumFunctional([1, 2, 3, 4]) returns " + sumFunctional(arr));
console.log("multiplyFunctional([1, 2, 3, 4]) returns " + multiplyFunctional(arr));

/* 12.	Implement Javascript code for a function named, findSecondBiggest, which takes as input, 
an array of numbers and finds and returns the second biggest of the numbers. For example, 
findSecondBiggest([1,2,3,4,5]) should return 4. 
And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!) */
function findSecondBiggest(arr) {
    if (arr.length < 2) {
        throw new Error('Size is invalid');
    }
    // return arr.sort((a,b) => b - a)[1]; // using sort()
    let first = arr[0];
    let second = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > first) {
            second = first;
            first = arr[index];
        }

    }
    return second;
}
console.log("findSecondBiggest([1, 2, 3, 4, 5]) returns " + findSecondBiggest(intArray));

/* 13.	Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers 
a and b, and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) 
of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; 
printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; 
printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; 
and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
 */
function printFibo(n, a, b) {
    if (n == 0) return;
    const output = [];
    output[0] = a;
    output[1] = b;
    if (n === 1) {
        console.log(output[0]);
    }
    else if (n === 2) {
        console.log(output);
    }
    else {
        for (let i = 2; i < n; i++) {
            output[i] = output[i - 1] + output[i - 2];
        }
        console.log(output)
    }
}

console.log("printFibo(1, 0, 1) "); printFibo(1, 0, 1);
console.log("printFibo(2, 0, 1) "); printFibo(2, 0, 1);
console.log("printFibo(3, 0, 1) "); printFibo(3, 0, 1);
console.log("printFibo(6, 0, 1) "); printFibo(6, 0, 1);
console.log("printFibo(10, 0, 1) "); printFibo(10, 0, 1);

/*
Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.
*/
function sumGreaterThan20(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] > 20)
            sum += array[index];
    }
    return sum;
}

const arrayOfInts = [1, 23, 31, 4, 20];
console.log("sumGreaterThan20([1, 23, 31, 4, 20]) returns " + sumGreaterThan20(arrayOfInts));

/*
Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.
*/

function getNewArray(array) {
    const newArray = [];

    for (let index = 0; index < array.length; index++) {
            if(array[index].length >= 5 && array[index].includes('a'))
                newArray.push(array[index]);
        }

    return newArray;

}

const arrayOfWords = ["Banana", "Orange", "Apple", "Mango", "Pie", "Berry"];
console.log("getNewArray(Banana, Orange, Apple, Mango, Pie, Berry) returns " + getNewArray(arrayOfWords));

/*
Write a JS function called shortest that takes 3 strings and returns the shortest string(the shortest is referring to the length of the string).
For example:
shortest("hello", "z", "bye")  // should return "z"
*/

function shortest(a,b,c) {
    let stringArray = [];
    stringArray.push(a);
    stringArray.push(b);
    stringArray.push(c);

    let strings = stringArray.filter( x => typeof x === "string" )
        .sort((a, b) => a.length - b.length);
    return strings[0];
}

console.log("shortest(hello, z, bye) returns " + shortest("hello", "z", "bye"));

/*
For the given students array below, compute the average grade of the students who took cs303 course.
You're not allowed to use for, while, do...while, for..of, forEach loop
*/
const students = [
  { name: 'Quincy', grade: 96, courses:['cs301', 'cs303']},
  { name: 'Jason', grade: 84, courses:['cs201', 'cs203']},
  { name: 'Alexis', grade: 100, courses:['cs105', 'cs211'] },
  { name: 'Sam', grade: 65, courses:['cs445', 'cs303'] },
  { name: 'Katie', grade: 90, courses:['cs303', 'cs477'] }
];
const selectedStudents = students.filter(student => student.courses.includes("cs303"));
const size = selectedStudents.length
let avg = selectedStudents.map(student => student.grade).reduce((a, b) => a + b)/size)
console.log(avg)