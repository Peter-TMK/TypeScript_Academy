// Exercise 1: Calculate Rectangle Area
// Write a function named calculateRectangleArea that takes two parameters: width and height of type number.
// The function should return the area of the rectangle, which is also a number.

function calculateRectangleArea(width: number, height: number): number {
  const area = width * height;
  return area;
}
console.log(calculateRectangleArea(5, 8));

// Exercise 2: Concatenate Strings
// Create a function named concatenateStrings that takes two parameters: str1 and str2 of type string.
// The function should return the concatenated result of the two strings.

function concatenateStrings(str1: string, str2: string): string {
  const concatenatedString = str1 + " " + str2;
  return concatenatedString;
}
console.log(concatenateStrings("hello", "world"));

// Exercise 3: Check Even or Odd
// Write a function named isEven that takes a parameter num of type number and returns a boolean.
// The function should return true if the number is even and false if the number is odd.

function isEven(num: number): boolean {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEven(5));
console.log(isEven(8));
console.log(isEven(1));

// Exercise 4: Find Maximum Number
// Create a function named findMax that takes an array of numbers as a parameter and returns the maximum number in the array.
// Ensure to specify the types for the parameter and return value.

function findMax(arr: number[]): number {
  let firstNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (firstNum < arr[i]) {
      firstNum = arr[i];
    }
  }
  return firstNum;
}

console.log(findMax([73, 3, 15, 1, 6, 11]));

// Exercise 5: Greet User
// Write a function named greetUser that takes a parameter name of type string and
// returns a greeting message of type string.
// The message should be in the format: "Hello, [name]!".

function greetUser(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greetUser("Baby"));

// Instructions:
// Define each function with appropriate type annotations for parameters and return types.
// Test each function with different inputs to ensure they work as expected.
// Ensure that each function's implementation adheres to the type constraints specified.
