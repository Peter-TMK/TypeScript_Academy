// Exercise 1: Declaring an Object
// Declare a variable named student with the object type.
// Initialize it with properties: firstName (string), lastName (string), age (number),
// and grade (string). Log the student object to the console.

type Student = {
  firstName: string;
  lastName: string;
  age: number;
  grade: string;
};

const student: Student = {
  firstName: "Dev",
  lastName: "Excel",
  age: 24,
  grade: "one",
};

console.log(student);

// Exercise 2: Accessing Properties
// Using the student object from Exercise 1, attempt to access a property that
// doesn't exist (e.g., middleName). Observe the TypeScript error and log the value to the console.

console.log(student.age);
console.log(student.middleName);

// Exercise 3: Explicit Property Types
// Declare a variable named car with explicit property types for make (string),
// model (string), year (number), and isElectric (boolean).
// Assign appropriate values to these properties and log the car object to the console.

type Car = {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
};

const car: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2024,
  isElectric: true,
};

console.log(car);

// Exercise 4: Using the Object Type
// Create a variable named item of the type Object and initialize it with
// an object that has properties name (string) and price (number).
// Access and log the toString() method on the item object.

type Item = {
  name: string;
  price: number;
};

const item: Item = {
  name: "Excel",
  price: 1,
};

console.log(typeof item.price.toString());

// Exercise 5: Empty Type Usage
// Declare a variable named container with the empty type {} and try to
// assign it properties length (number) and width (number). Observe the TypeScript error.
// Then, log the result of calling the toString() method on the container object.

type Container = {};

const container: Container = {
  length: 7,
  width: 8,
};

console.log(typeof item.length.toString());

// These exercises will help you gain hands-on experience with
// TypeScript's object type, understanding the differences between object, Object,
// and the empty type {}, and working with explicit property type declarations.
