// You are tasked with creating a simple inheritance structure using JavaScript factory functions. Below are the requirements:

// Create a factory function called createAnimal. It should take two parameters: name (string) and sound (string). It should return an object with a method called makeSound() which prints the sound of the animal to the console.

// Create a factory function called createDog. It should inherit from the createAnimal factory function. It should take three parameters: name (string), sound (string), and breed (string). Additionally, it should have a method called fetch() which prints "<animal_name> fetches the ball!" to the console.

// Create an instance of the createDog factory function with the following details:

// Name: "Buddy"
// Sound: "Woof"
// Breed: "Labrador"
// Call the makeSound() method of the createDog instance to make the dog bark.

// Call the fetch() method of the createDog instance to make the dog fetch a ball.







// Factory function to create an animal

function createAnimal(name, sound) {
    return {
        name: name,
        sound: sound,

        makesound: function () {
            console.log(this.sound);
        }

    }
};

// // Factory function to create a dog, inheriting from createAnimal

function createDog(name, sound, breed) {
    let dog = createAnimal(name, sound)
   // Add additional properties and methods specific to dogs
    dog.breed = breed;                         
    dog.fetch = function () {
        console.log(this.name + "fetches the ball!");
    }
    return dog;
}

// // Create an instance of the createDog factory function
let x = createDog("Buddy", "Woof", "Labrador")    
console.log(x);
// // Call the makeSound() method to make the dog bark
x.makesound();  
// // Call the fetch() method to make the dog fetch a ball

x.fetch();