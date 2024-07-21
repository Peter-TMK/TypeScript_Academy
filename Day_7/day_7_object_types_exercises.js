// Exercise 1: Declaring an Object
// Declare a variable named student with the object type.
// Initialize it with properties: firstName (string), lastName (string), age (number),
// and grade (string). Log the student object to the console.
var student = {
    firstName: "Dev",
    lastName: "Excel",
    age: 24,
    grade: "one"
};
console.log(student);
// Exercise 2: Accessing Properties
// Using the student object from Exercise 1, attempt to access a property that
// doesn't exist (e.g., middleName). Observe the TypeScript error and log the value to the console.
console.log(student.age);
var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2024,
    isElectric: true
};
console.log(car);
var item = {
    name: "Excel",
    price: 1
};
console.log(typeof item.price.toString());
var container = {
    length: 7,
    width: 8
};
console.log(typeof item.length.toString());
// These exercises will help you gain hands-on experience with
// TypeScript's object type, understanding the differences between object, Object,
// and the empty type {}, and working with explicit property type declarations.
