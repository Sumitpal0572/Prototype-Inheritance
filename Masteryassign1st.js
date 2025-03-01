// ### Topics
//   - Class
//   - Inheritance
//   - Static methods
//   - Getters and setters
//   - Prototypes

//   ### Setup Guidelines and Instructions
//   - You'll need a code editor and a JavaScript runtime environment to solve the problems.
//   - Ensure you have a good understanding of class syntax, inheritance, and prototype chain in JavaScript.

//   ### Problem Statement
//   #### Question 1: Class
//   Create a class named Person with a constructor that takes name and age as parameters.
//   - Add a static method called greet that returns a string "Hello there!".
//   - Add a method to the prototype called canSleep that will return "<name> is sleeping". Here <name> should be the name of the person.

//   #### Question 2: Create a class named Employee that inherits from Person.
//   - Add a private property called salary and create a getter and setter for it.
//     - The getter should return the salary.
//     - The setter should validate that the salary is a positive number. If it is, update the salary; otherwise, print "Salary must be a positive number." in the console.
//   - Add a method to the prototype called working that will return "<name> is working". Here <name> should be the name of the person.

//   #### Question 3: Create a class named Manager that inherits from Employee.
//   - Add a static method called getRole that returns the string "Manager".
//   - Add a method to the prototype called managing that will return "<name> is managing". Here <name> should be the name of the person.

//   #### Question 4: Class Definition: Executive.
//   Create a class named Executive that extends the existing Manager class.
//   - The Executive class should have a private field bonus to store the bonus specific to the executive.
//   - Implement a getter method for the bonus property. This getter should return the value of the bonus field.
//   - Implement a setter method for the bonus property. This setter should update the bonus field only if the provided value is greater than 0.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static greet() {
        console.log("Hello there!");
    }
    canSleep() {
        return (`${this.name} is Sleeping`);
    }
};

let p1 = new Person("Sumit", 26)
console.log(p1);
console.log(p1.canSleep());
Person.greet();


// Question2nd 

class Employee extends Person {
    #salary
    constructor(name, age, salary) {
        super(name, age)
        this.#salary;
    }

    get salary() {
        return this.#salary
    }

    set salary(val) {
        this.#salary = val
    }
}

let e1 = new Employee("Abhishek", 23, 20000)
console.log(e1);
e1.salary = 50000
console.log(e1.salary);


// Question3rd

class Manager extends Employee {
    constructor(name, age) {
        super(name, age)
    }

    static getRole() {
        console.log("Manager");
    }

    managing() {
        return `${this.name} is managing`;
    }
}

let manager = new Manager("Sumit", 35)
console.log(manager);
console.log(manager.managing());
Manager.getRole();


// Question4th



//   #### Question 4: Class Definition: Executive.
//   Create a class named Executive that extends the existing Manager class.
//   - The Executive class should have a private field bonus to store the bonus specific to the executive.
//   - Implement a getter method for the bonus property. This getter should return the value of the bonus field.
//   - Implement a setter method for the bonus property. This setter should update the bonus field only if the provided value is greater than 0.

class Executive extends Manager {
    #bonus
    constructor(name, age, bonus) {
        super(name, age)
        this.#bonus = bonus
    }

    get bonus() {
        return this.#bonus
    }

    set bonus(val) {
        if (val > 0) {
            this.#bonus = val
        } else {
            console.log("Bonus is greater than zero");
        }
    }
}

let ex1 = new Executive("Amit", 35, 500)
console.log(ex1);
ex1.bonus = 1000;
console.log(ex1.bonus);