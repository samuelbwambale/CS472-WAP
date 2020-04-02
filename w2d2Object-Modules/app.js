
/* QUESTION 6 */
const countObject = {
    counter: 0,
    add: function () {
        counter += 1;
    },
    reset: function () {
        counter = 0;
    }

};
console.log('Using object approach');
countObject.add();
console.log("count " + countObject.counter);
countObject.reset();
console.log("count " + countObject.counter);


/* QUESTION 7 */
/* 
The free variable is counter.
A free variable is a variable referred to by a function that is not one of its parameters or local variables.
*/


/* QUESTION 8 */
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



/* QUESTION 9 */

/*
Using the module pattern can remove names from the global namespace. 
Modules help to to avoid declaring global variables/functions
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


/* Question 11 */
Employee.address = "";
Employee.getAddress = function () {
  return Employee.address;
};
Employee.setAddress = function (newAddress) {
  Employee.address = newAddress;
};

Employee.setAddress("Fairfield");
console.log(" Address: " + Employee.getAddress());
