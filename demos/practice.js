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

/* bar();
var foo = 1;
var bar = function() {
    // var foo;
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
// bar(); */

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

/* Using normal function approach */
const counter = function () {
    let counter = 0;
    function add() {
        counter += 1;
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
        count: function () {
            return counter;
        }

    }
};
console.log('Using normal function approach');
const myCount = counter();
myCount.add();
console.log("count " + myCount.count());
myCount.reset();
console.log("count " + myCount.count());



/* Using module approach */
const counter2 = (function () {
    let counter = 0;
    function add() {
        counter += 1;
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
        count: function () {
            return counter;
        }

    }
})();

console.log('Using module approach');
counter2.add()
console.log("count " + counter2.count());
counter2.reset()
console.log("count " + counter2.count());


/* Make adder */
const make_adder = function (val) {
    let counter = 0;
    function add() {
        counter += val;
    }
    function reset() {
        counter = 0;
    }
    return {
        add: function() {
            add()
        },
        counter: function() {
            return counter;
        }
    }
};

const add5 = make_adder(5);
add5.add(); add5.add(); add5.add();
console.log(add5.counter());

const add7 = make_adder(7);
add7.add(); add7.add(); add7.add();
console.log(add7.counter());

/* QUESTION 9
Use the module pattern

*/