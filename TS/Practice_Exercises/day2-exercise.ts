// Exercise 1: Identifying Types

// Given the following values, identify their types in TypeScript and explain why:

// 42
// true
// "TypeScript"
// null
// undefined
// Instructions:

// Identify the type of each value.
// Write a brief explanation of why each value is of the identified type.

// console.log(typeof 42);
// console.log(typeof true);
// console.log(typeof "TypeScript");
// console.log(typeof null);
// console.log(typeof undefined);

//////////////////////////////////////////////

// Exercise 2: Using Properties and Methods

// Write a TypeScript program that does the following:

// Create a string variable with the value "TypeScript is great!".
// Use the length property to get the number of characters in the string and print it.
// Use the toUpperCase() method to convert the string to uppercase and print the result.
// Use the indexOf() method to find the index of the word "great" and print it.

// let newString: string = "TypeScript is great!";
// console.log(newString.length);
// console.log(newString.toUpperCase());
// console.log(newString.toLocaleUpperCase());
// console.log(newString.indexOf("great"));

//////////////////////////////////////////////////

// Exercise 3: Type Errors
// Given the following TypeScript code, identify and correct any type errors:

// let count: number = "42";
// let isDone: boolean = 0;
// let message: string = true;

// Instructions:

// Identify the type errors in the code.
// Correct the type errors to ensure the code compiles without errors.

// let count: string = "42";
// let isDone: number = 0;
// let message: boolean = true;

// console.log(count, isDone, message);

//////////////////////////////////////////

// Exercise 4: Custom Object Types
// Create a custom object type named Person that has the following properties:

// name - a string representing the person's name.
// age - a number representing the person's age.
// isEmployed - a boolean indicating if the person is employed.
// Then, write a TypeScript function that takes a Person object as an argument and prints the person's name and employment status.

// Instructions:

// Define the Person type.
// Write the function to accept a Person object and print the required information.

// type Person = {
//   name: string;
//   age: number;
//   isEmployed: boolean;
// };

// function personInfo(person: Person): void {
//   console.log(
//     `Mr(s) ${person.name} is ${person.isEmployed ? "employed" : "not employed"}`
//   );
// }

// const person1: Person = {
//   name: "Agnes Rob",
//   age: 32,
//   isEmployed: true,
// };

// const person2: Person = {
//   name: "Jupi ta",
//   age: 24,
//   isEmployed: false,
// };

// personInfo(person1);
// personInfo(person2);

//////////////////////////////////////////////////

// Exercise 5: Using TypeScript Types in Functions
// Write a TypeScript function named calculateArea that calculates
// the area of a rectangle. The function should take two parameters:

// width - a number representing the width of the rectangle.
// height - a number representing the height of the rectangle.
// The function should return the calculated area, which is also a number.

// Instructions:

// Define the function with the appropriate parameter types and return type.
// Implement the function to calculate and return the area.
// Write a few test cases to demonstrate the function's usage and print the results.

function calculateArea(width: number, height: number): number {
  const area = width * height;
  console.log(
    `The area of rectangle with width of ${width} and height ${height} is ${area}`
  );
  return area;
}
calculateArea(30, 3);
