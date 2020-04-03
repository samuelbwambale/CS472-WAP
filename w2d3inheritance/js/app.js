/* 
    app.js
    @author sbwambale
 */

 "use strict"

/* QUESTION 1 */

// object literal
let person = {
    name: '',
    dateOfBirth: '',

    // getters and setters to enforce encapsulation
    getName: function () {
        return this.name
    },
    setName: function (newName) {
        this.name = newName;
    },
    getDateOfBirth: function () {
        return this.dateOfBirth
    },
    setDateOfBirth: function (dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
};
// inheritance using Object.create()
let john = Object.create(person);
john.setName('John');
john.setDateOfBirth(new Date('1998, 12, 10')); // 11 for December
john.setDateOfBirth(new Date('December 10, 1998')); // 11 for December
console.log('The person’s name is ' + john.getName());
console.log(john.getName() + ' was born on ' + john.getDateOfBirth());


/* QUESTION 2 */
// Employee extends Person
let employee = Object.create(person);
employee.salary = 0.0;
employee.hireDay = new Date();
employee.doJob = function(jobTitle) {
    console.log(`${this.getName()} is a ${jobTitle} who earns $${this.salary}`)
}
// instance of employee
const anna = Object.create(employee);
anna.setName('Anna');
anna.salary = 249995.50;
anna.doJob('Programmer');


/* QUESTION 3 */
// Person object with constructor function
class Person{
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    toString() {
        return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`
    }
}

let peter = new Person('Peter', new Date('1985-11-10'))

// add new property toString()
Person.prototype.toString = function() {
    return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`
}
console.log(peter.toString());





