
/* QUESTION 6 */
const countObject = (function(){
    var counter = 0;
    function add() {
        counter += 1;
    }
    function reset() {
        counter = 0;
    }
    return {

        add: add,
        reset: reset,
        counter: function() {
            return counter;
        }
    }

})();
console.log('Using object approach');
countObject.add();
console.log("count " + countObject.counter());
countObject.reset();
console.log("count " + countObject.counter());


/* QUESTION 7 */
/* 
The free variable is counter.
A free variable is a variable referred to by a function that is not one of its parameters or local variables.
*/


/* QUESTION 8 */
const make_adder = function (val) {
    let counter = 0;
    return function () {
        counter += val;
        console.log(counter)
    }
    
};

console.log('Make adder');
const add5 = make_adder(5);
add5(); add5(); add5();
const add7 = make_adder(7);
add7(); add7(); add7();




/* QUESTION 9 */

/*
Using the module pattern (IIFE) can remove names from the global namespace. 
Modules help to to avoid declaring global variables/functions. Modules enable us do some encapsulation.
*/

/* QUESTION 10
*/

const Employee = (function () {
    let name = "";
    let age = 0;
    let salary = 0.0;
    /* function getName() { // using function declaration
        return name;
    }; */
    const getName = function () { // using function expression
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
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge,
        getInfo: function() {
            return `Name: ${name}, Age: ${name}, Salary: ${salary}`
        }
    }
})();

Employee.setName('Samuel');
Employee.setAge(30);
Employee.setSalary(100000);
console.log('Employee info: ' + Employee.getInfo());
Employee.increaseSalary(100);
console.log('Employee info: ' + Employee.getInfo());

/* Question 11 */
Employee.address = ""; // Using a constructor, Employee.prototype.address = ""
Employee.getAddress = function () {
  return Employee.address;
};
Employee.setAddress = function (newAddress) {
  Employee.address = newAddress;
};

Employee.setAddress("Fairfield");
console.log(" Address: " + Employee.address);
console.log(" Address: " + Employee.getAddress());
