/* QUESTION 1 */
let person = {
    name: '',
    dateOfBirth: '',
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

let p1 = Object.create(person);
p1.setName('John');
p1.setDateOfBirth('1998-12-10');
console.log('The person’s name is ' + p1.getName());
console.log(p1.getName() + ' was born on ' + p1.getDateOfBirth() );

/* QUESTION 2 */
let person1 = Object.create(person);
let employee = {
    salary: 0.0,
    hireDate: new Date(),
    jobTitle: '',
    getSalary: function () {
        return this.salary;
    },
    setSalary: function (newSalary) {
        this.salary = newSalary;
    },
    getJobTtile: function () {
        return this.jobTitle;
    },
    doJob: function(title) {
        return `${person1.getName()} is a ${title} who earns $${this.salary}`
    }
}
employee.setSalary(249995.50);
person1.setName('Anna');
const doJob = employee.doJob('Programmer');
console.log(doJob);

/* QUESTION 3 */

class Person{
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    toString() {
        return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`
    }
}

let p2 = new Person('Peter', '1985-11-10')
console.log(p2.toString());





