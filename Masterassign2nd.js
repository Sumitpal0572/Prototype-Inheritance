// ### Topics
// - Class
// - Inheritance
// - Getters and setters
// - Private fields

// ### Setup Guidelines and Instructions
// - You'll need a code editor and a JavaScript runtime environment to solve the problems.
// - Familiarize yourself with class syntax, inheritance, and getter/setter methods in JavaScript.

// ### Problem Statement
// #### Question 5: Problem: Inheritance - Bank, Account, and SavingsAccount Classes
// Class Definition: Bank
// - Create a class named Bank that represents a bank.
// - The Bank class should have a private field name to store the name of the bank.
// - The Bank class constructor should accept one parameter: name (a string). It should use this parameter to initialize the name field.
// - Implement a getter method called Name within the Account class. This method should return the value of the name field.

// Class Definition: Account
// - Create a class named Account that extends the Bank class.
// - The Account class should have a private field balance to store the account balance.
// - Implement a getter method called Balance() within the Account class. This method should return the value of the balance field.

// Class Definition: SavingsAccount
// - Create a class named SavingsAccount that extends the Account class.
// - The SavingsAccount class should have a private field #interestRate to store the interest rate associated with the savings account.
// - Implement a getter method (interestRate) for the interestRate property within the SavingsAccount class. This getter should return the value of the interestRate field.
// - Implement a setter method (interestRate) for the interestRate property. This setter should update the interestRate field with the provided value.

class Bank {
    #name
    constructor(name) {
        this.#name = name;
    }

    get Name() {
        return this.#name;
    }
}

let b1 = new Bank("State bank of india")
console.log(b1.Name);