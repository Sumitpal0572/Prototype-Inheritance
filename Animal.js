// ### Topics
// - Class
// - Inheritance
// - Getters and setters
// - Private fields

// ### Setup Guidelines and Instructions
// - You'll need a code editor and a JavaScript runtime environment to solve the problems.
// - Familiarize yourself with class syntax, inheritance, and getter/setter methods in JavaScript.

// ### Problem Statement
// #### Question 6: Problem: Inheritance - Animal Hierarchy
// Class Definition: Animal
// - Create a class named Animal that serves as the base class for various animal types.
// - The Animal class should have a private field type to store the type of the animal.
// - Implement a getter method called Type() within the Animal class. This method should return the value of the type field.

// Class Definition: Mammal
// - Create a class named Mammal that extends the Animal class. The Mammal class should represent mammals in the animal hierarchy.
// - Mammal Constructor: The Mammal class constructor should not require any parameters. It should call the parent class constructor using super("Mammal") to initialize the #type field inherited from the Animal class.

// Class Definition: Bird
// - Create a class named Bird that extends the Animal class. The Bird class should represent birds in the animal hierarchy. (The type of the Bird should be "Bird")

// Class Definition: Lion
// - Create a class named Lion that extends the Mammal class. The Lion class should represent lions in the animal hierarchy.
// - Lion Constructor: The Lion class constructor should not require any parameters. It should call the parent class constructor using super() to initialize the #type field inherited from the Mammal class. Additionally, the constructor should have a private field #maneColor to store the color of the lion's mane (The color should be "Brown" by default).
// - Getter and Setter: maneColor
//   - Implement a getter method called maneColor within the Lion class. This method should return the value of the maneColor field.
//   - Implement a setter method called maneColor within the Lion class. This setter should update the maneColor field with the provided value.

// Class Definition: Cow
// - Create a class named Cow that extends the Mammal class. The Cow class should represent cows in the animal hierarchy.
// - Cow Constructor: The Cow class constructor should not require any parameters. It should call the parent class constructor using super() to initialize the type field inherited from the Mammal class. Additionally, the constructor should have a private field milkProduction to store the milk production level of the cow (default value of milkProduction is "High").
// - Getter and Setter: milkProduction
//   - Implement a getter method called MilkProduction within the Cow class. This method should return the value of the milkProduction field.
//   - Implement a setter method called MilkProduction within the Cow class. This setter should update the milkProduction field with the provided value.

// Class Definition: Eagle
// - Create a class named Eagle that extends the Bird class. The Eagle class should represent eagles in the animal hierarchy.
// - Eagle Constructor: The Eagle class constructor should not require any parameters. It should call the parent class constructor using super() to initialize the #type field inherited from the Bird class. Additionally, the constructor should have a private field wingspan to store the wingspan of the eagle (The default value will be "Large").
// - Getter and Setter: wingspan
//   - Implement a getter method called Wingspan within the Eagle class. This method should return the value of the wingspan field.
//   - Implement a setter method called Wingspan within the Eagle class. This setter should update the wingspan field with the provided value.

// Class Definition: Sparrow
// - Create a class named Sparrow that extends the Bird class. The Sparrow class should represent sparrows in the animal hierarchy.
// - Sparrow Constructor: The Sparrow class constructor should not require any parameters. It should call the parent class constructor using super() to initialize the type field. Additionally, the constructor should have a private field wingspan to store the wingspan of the sparrow (by default the value should be "Small").
// - Getter and Setter: wingspan
//   - Implement a getter method called wingspan within the Sparrow class. This method should return the value of the wingspan field.
//   - Implement a setter method called wingspan within the Sparrow class. This setter should update the wingspan field with the provided value.


// Animalclass

class Animal {
    #type;
    constructor(type) {
        this.#type = type;
    }

    get Type() {
        return this.#type;
    }
}

let a1 = new Animal("mammal");
console.log(a1);

//Class Mammal extends from Animal Class

class Mammal extends Animal {
    constructor(type) {
        super(type);
    }
}

let m1 = new Mammal("birds");
console.log(m1);


//Class Bird extends from Animal
class Bird extends Animal {
    constructor(type) {
        super(type);
    }
}

let b1 = new Bird("crow");
console.log(b1);