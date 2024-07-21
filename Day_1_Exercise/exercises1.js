// Exercise 1: Identifying Types
// Given the following values, identify their types in TypeScript and explain why:
// 42;
// true;
// ("TypeScript");
// null;
// undefined;
// Solutions 1: Identifying Types
console.log(typeof 42);
console.log(typeof true);
console.log(typeof "TypeScript");
console.log(typeof null);
console.log(typeof undefined);
// tsc exercises1.ts
// ts-node exercises1.ts
//////////////////////////////////////////////////////////////////
// Exercise 2: Using Properties and Methods
// Write a TypeScript program that does the following:
// Create a string variable with the value "TypeScript is great!".
// Use the length property to get the number of characters in the string and print it.
// Use the toUpperCase() method to convert the string to uppercase and print the result.
// Use the indexOf() method to find the index of the word "great" and print it.
// Solutions 2: Using Properties and Methods
var myStr = "TypeScript is great!";
console.log(myStr.length);
console.log(myStr.toUpperCase());
console.log(myStr.indexOf("great"));
//////////////////////////////////////////////////////////////////
// Exercise 3: Type Errors
// Given the following TypeScript code, identify and correct any type errors:
// let count: number = "42";
// let isDone: boolean = 0;
// let message: string = true;
// Solutions 3: Type Errors
var count = "42";
var isDone = true;
var message = "true";
//////////////////////////////////////////////////////////////////
// Exercise 4: Setting Up the HTML File
// Create an HTML file named index.html that includes a script reference to a JavaScript file named app.js.
// Instructions:
// Create a new file named index.html.
// Write the necessary HTML structure to include a script file app.js.
// Ensure the HTML file is valid and properly structured.
// Solutions 4: Setting Up the HTML File
//////////////////////////////////////////////////////////////////
// Exercise 5: Writing TypeScript Code
// Write a TypeScript file named app.ts that creates an h1 element
// with the text content "Hello, World!" and appends it to the document body.
// Instructions:
// Create a new file named app.ts.
// Write TypeScript code to create an h1 element,
// set its text content to "Hello, World!", and append it to the document body.
// Ensure the TypeScript code is valid and properly structured.
