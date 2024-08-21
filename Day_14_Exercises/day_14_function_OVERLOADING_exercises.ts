// Exercise 1: Calculate Area
// Create a function named calculateArea that can calculate the area of different shapes.
// The function should be able to handle the following cases:
// Two arguments: radius (number) for calculating the area of a circle.
// Two arguments: width (number) and height (number) for calculating the area of a rectangle.
// One argument: side (number) for calculating the area of a square.

function calculateArea(radius: number): number;
function calculateArea(side: number): number;
function calculateArea(width: number, height: number): number;

function calculateArea(...args: number[]): number {
  if (args.length === 1) {
    const [arg] = args;
    return Math.PI * arg * arg;
  } else if (args.length === 2) {
    const [width, height] = args;
    return width * height;
  } else {
    throw new Error("Invalid!");
  }
}
console.log(calculateArea(5)); // Circle with radius 5
console.log(calculateArea(4, 6)); // Rectangle with width 4 and height 6
console.log(calculateArea(3)); // Square with side 3

// Exercise 2: Join Arrays and Strings
// Create a function named join that can join arrays or strings:
// One argument: an array of strings, returning a single concatenated string.
// Two arguments: two arrays of numbers, returning a single array with elements of both arrays concatenated.

// Function overloads
function join(arr: string[]): string;
function join(arr1: number[], arr2: number[]): number[];

// Function implementation
function join(...args: any[]): any {
  if (args.length === 1 && Array.isArray(args[0])) {
    return args[0].join("");
  } else if (
    args.length === 2 &&
    Array.isArray(args[0]) &&
    Array.isArray(args[1])
  ) {
    return args[0].concat(args[1]);
  } else {
    throw new Error("Invalid arguments");
  }
}

// Test cases
console.log(join(["Hello", " ", "World"])); // "Hello World"
console.log(join([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// Exercise 3: Find Element
// Create a function named findElement that can find an element in different data structures:
// Two arguments: an array of numbers and a number, returning the index of the number in the array.
// Two arguments: a string and a character, returning the index of the character in the string.
// Function overloads
function findElement(arr: number[], num: number): number;
function findElement(str: string, char: string): number;

// Function implementation
function findElement(arg1: string | number[], arg2: string | number): number {
  if (Array.isArray(arg1) && typeof arg2 === "number") {
    return arg1.indexOf(arg2);
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    return arg1.indexOf(arg2);
  } else {
    throw new Error("Invalid arguments");
  }
}

// Test cases
console.log(findElement([1, 2, 3, 4], 3)); // 2
console.log(findElement("Hello World", "o")); // 4

// Exercise 4: Combine Values
// Create a function named combine that can combine values of different types:
// Two arguments: two numbers, returning their sum.
// Two arguments: two strings, returning their concatenation.
// Three arguments: two numbers and a string, returning a string in the format "number1, number2: string".
// Function overloads
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number, b: number, c: string): string;

// Function implementation
function combine(...args: any[]): any {
  if (args.length === 2) {
    if (typeof args[0] === "number" && typeof args[1] === "number") {
      return args[0] + args[1];
    } else if (typeof args[0] === "string" && typeof args[1] === "string") {
      return args[0] + args[1];
    } else {
      throw new Error("Invalid arguments");
    }
  } else if (args.length === 3) {
    if (
      typeof args[0] === "number" &&
      typeof args[1] === "number" &&
      typeof args[2] === "string"
    ) {
      return `${args[0]}, ${args[1]}: ${args[2]}`;
    } else {
      throw new Error("Invalid arguments");
    }
  } else {
    throw new Error("Invalid arguments");
  }
}

// Test cases
console.log(combine(1, 2)); // 3
console.log(combine("Hello", "World")); // "HelloWorld"
console.log(combine(1, 2, "result")); // "1, 2: result"

// Exercise 5: Parse Data
// Create a function named parseData that can parse different types of data:
// One argument: a JSON string, returning the parsed object.
// Two arguments: a string and a delimiter, returning an array of substrings.
// Instructions:
// Define the overloaded function signatures as described in each exercise.
// Implement the function logic to handle different signatures.
// Test each function with different inputs to ensure they work as expected.
// Ensure that the TypeScript compiler correctly checks the types based on the overloaded signatures.
// Function overloads
function parseData(jsonString: string): any;
function parseData(str: string, delimiter: string): string[];

// Function implementation
function parseData(...args: any[]): any {
  if (args.length === 1 && typeof args[0] === "string") {
    return JSON.parse(args[0]);
  } else if (
    args.length === 2 &&
    typeof args[0] === "string" &&
    typeof args[1] === "string"
  ) {
    return args[0].split(args[1]);
  } else {
    throw new Error("Invalid arguments");
  }
}

// Test cases
console.log(parseData('{"name":"John","age":30}')); // { name: 'John', age: 30 }
console.log(parseData("name,age,city", ",")); // ["name", "age", "city"]

// function sum(a: number, b: number): number;
// function sum(a: number, b: number, c: number): number;
// function sum(a: number, b: number, c?: number): number {
//   if (c) return a + b + c;
//   return a + b;
// }
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2));

// Function overloads
// function calculateArea(radius: number): number;
// function calculateArea(width: number, height: number): number;
// function calculateArea(side: number): number;

// // Function implementation
// function calculateArea(...args: number[]): number {
//   if (args.length === 1) {
//     const [radiusOrSide] = args;
//     return Math.PI * Math.pow(radiusOrSide, 2); // Assume it's a circle if only one argument is given
//   } else if (args.length === 2) {
//     const [width, height] = args;
//     return width * height; // Rectangle case
//   } else {
//     throw new Error("Invalid number of arguments");
//   }
// }

// // Using the function
// console.log(calculateArea(5)); // Circle with radius 5
// console.log(calculateArea(4, 6)); // Rectangle with width 4 and height 6
// console.log(calculateArea(3)); // Square with side 3
