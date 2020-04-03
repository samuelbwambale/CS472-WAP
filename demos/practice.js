/* function a() {
    console.log(x); // consult Global for x and print 20 from Global
}
function b() {
    var x = 10;
    a(); // consult Global for a
}
var x = 20;
b(); */



// function b() {

//     function a() {
//         console.log(x);
//     }
//     var x = 10;
//     a();
// }
// var x = 20;
// b();  


// function b() {
//     function a() {
//         console.log(x);
//     }
//     a();
// }
// var x = 20;
// b();

// function f() {
//     var a = 1, b = 20, c;
//     console.log(a + " " + b + " " + c);
//     function g() {
//         var b = 300, c = 4000;
//         console.log(a + " " + b + " " + c);
//         a = a + b + c;
//         console.log(a + " " + b + " " + c);
//     }
//     console.log(a + " " + b + " " + c);
//     g();
//     console.log(a + " " + b + " " + c);
// }
// f();





/* var x = 1;
var a = 5;
var b =10;
var c = function(a, b, c) {
    // document.write(x);
    // document.write(a);
    console.log("x1 ", x);
    console.log("a1 ", a)
    function f(a, b ,c) {
        b = a;
        // document.write(b);
        console.log("b1 ",b)
        b = c;
        var x = 5;
    }
    f(a,b, c);
    // document.write(b);
    console.log("b2 ",b)
    var x = 10;
}
c(8,9,10);
// document.write(b);
// document.write(x);
console.log("b3 ",b)
console.log("x2 ",x) */


/* var x = 9;
function myFunction() {
    return x * x;
}
console.log(myFunction());
x = 5;
console.log(myFunction());
 */

// bar();
// console.log(foo);
/* let foo = 11;
console.log(foo);
var bar = function() {
    // var foo;
    if (!foo) {
        var foo = 10; // var not limited to block but function block
    }
    alert(foo);
}
bar(); */

/* QN: Do let and const variables get hoisted?
AN: Yes, but they do not get initialized with the value of undefined
Instead let and const variables are marked as uninitialized
 */

y; // undeclaired variable not hoisted
var y; // declared variable so it is hoisted
/* QN: Do global variables get hoisted? e.g x =1;
AN: Yes, but they do not get initialized with the value of undefined
Instead let and const variables are marked as uninitialized
*/


/* 
// Hositing
foo = undefined
bar = function(){}

//Execution
 */

/* 
function sam() {
    this.newvar = "hello";
}
console.log(this); // Uncaught ReferenceError: newvar is not defined
sam(); // this = window
console.log(newvar); //hello  */

/* function foo() {
    console.log(a);
}
let a = 20; // let variables are uninitialized or unaccessible at hoisting.
foo();  // This is perfectly valid */

{
    let count = 0;
    const incr = function (n) {
        count += n;
    }
    const reset = function (n) {
        count = 0;
    }
    incr(4);
    incr(2);
    console.log(count);
};

var funcs = [];
for (var i = 0; i < 5; i++) {
    funcs[i] = function () {
        return i;
    };
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());

/* return a function with no parameters
that has an ‘embedded parameter’ */
var helper = function (n) {
    return function () { return n; }
}
var funcs = [];
for (var i = 0; i < 5; i++) {
    funcs[i] = helper(i);
};
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());


/* QUESTION 6 */
const countObject = {
    counter: 0,
    add: function () {
        this.counter += 1;
    },
    reset: function () {
        this.counter = 0;
    }

};
console.log('Using object approach');
countObject.add();
console.log("count " + countObject.counter);
countObject.reset();
console.log("count " + countObject.counter);



/* Using revealing module approach */
const countModule = (function () {
    let counter = 0;
    function add() {
        counter += 1;
    }
    function reset() {
        counter = 0;
    }
    return {
        add: add,
        reset: reset,
        counter: function () {
            return counter;
        }

    }
})();

console.log('Using revealing module approach');
countModule.add()
console.log("count " + countModule.counter());
countModule.reset()
console.log("count " + countModule.counter());

/* Using revealing module approach to increment by inc */
const countModule2 = (function () {
    let counter = 0;
    function add(inc) {
        counter += inc;
    }
    function reset() {
        counter = 0;
    }
    return {
        add: function () {
            add();
        },
        reset: function () {
            reset();
        },
        counter: function () {
            return counter;
        }

    }
}());

console.log('Using revealing module approach to increment by inc');
countModule2.add(10)
console.log("count " + countModule2.counter());
countModule2.reset()
console.log("count " + countModule2.counter());

/* Using module factory approach */
const count = function () {
    let counter = 0;
    function add() {
        counter += 1;
    }
    function reset() {
        counter = 0;
    }
    return {
        add: add,
        reset: reset,
        counter: function () {
            return counter;
        }

    }
};
console.log('Using module factory approach');
const myCount = count();
myCount.add();
console.log("count " + myCount.counter());
myCount.reset();
console.log("count " + myCount.counter());


/* Make adder */

// We could store this function in a separate variable and use it to create several make_adders. 
const make_adder = function (val) {
    let counter = 0;
    function add() {
        counter += val;
    }
    function reset() {
        counter = 0;
    }
    return {
        add: add,
        counter: function () {
            return counter;
        }
    }
};

console.log('Make adder');
const add5 = make_adder(5);
add5.add(); add5.add(); add5.add();
console.log(add5.counter());

const add7 = make_adder(7);
add7.add(); add7.add(); add7.add();
console.log(add7.counter());


/* str = "asdf";
foo = 1;
var bar = function () {
    alert(foo); 
    alert(str);
};
bar();
 */
/* 1, in global str=undefined, foo=undefined; bar = undediened.
2, execution in global, str="asdf", foo=1; call bar()
3, in bar env, alert(foo) displays 1, alert(str) diplays asdf;

 */


/* QUESTION 9
Use the module pattern

*/

/* QUESTION 10
*/

const Employee = (function () {
    let name = "";
    let age = 0;
    let salary = 0;
    const getName = function () {
        return name;
    };
    const getAge = function () {
        return age;
    };
    const getSalary = function () {
        return salary;
    };

    const setName = function (newName) {
        name = newName;
    };
    const setAge = function (newAge) {
        age = newAge;
    };
    const setSalary = function (newSalary) {
        salary = newSalary;
    };
    const increaseSalary = function (percentage) {
        newSalary = getSalary + (getSalary * percentage / 100);
        setSalary(newSalary);
    };
    const incrementAge = function () {
        setAge(getAge + 1);
    }

    return {
        fetchName: getName,
        getAge: getAge,

        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
})();

console.log('Employee object');
Employee.setName('Samuel');
Employee.setAge(30);
Employee.setSalary(100000)
console.log("Name: " + Employee.fetchName() + " Age: " + Employee.getAge());
Employee

/* Question 11 */
Employee.address = "";
// another method! (Q: public or private? public)
Employee.getAddress = function () {
    return Employee.address;
};
Employee.setAddress = function (newAddress) {
    Employee.address = newAddress;
};

Employee.setAddress("Fairfield");
console.log("Name: " + Employee.fetchName() + " Age: " + Employee.getAge() + " Address: " + Employee.getAddress());



/* class User {
    constructor(name) {
        this.name = name; // calls the setter
    }
    get name() {
        console.log("this._name " + this._name)
        return this._name; //property must match the name used in the setter
    }
    set name(value) {
        if (value.length < 4) {
            console.log(value + "Name is too short.");
            return;
        }
        this._name = value; //must set a property name different from the setter name
    }
}
let user = new User("John");
alert(user.name); // calling the getter
user.name = 'Fred'; // calling the setter 
user2 = new User(""); // Name too short. */

class User {
    constructor(name = "Anonymous") {
        this.name = name;
    }
    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}
fred = new User();
console.log(fred);
console.log(fred.__proto__);
console.log(User.prototype);
fred.sayHi();
bob = new User("Bob");
console.log(bob);
bob.sayHi();