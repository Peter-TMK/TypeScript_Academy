// Exercise 1: Basic Union Type
// Declare a variable mixedValue that can hold either a string or a number.
// Assign different values (both string and number) to mixedValue and log them to the console.

let mixedValue: string | number;

mixedValue = 19;
console.log(mixedValue);

mixedValue = "hello";
console.log(mixedValue);

// Exercise 2: Function with Union Type Parameters
// Write a function named describeValue that takes one parameter of type number | string.
// The function should return a message indicating whether the value is a number or a string.
// Test the function with different values and log the results to the console.

function describeValue(params: number | string): void {
  if (typeof params === "number") {
    console.log("Parameter is a number");
  } else {
    console.log("Parameter is a string");
  }
}

console.log(describeValue(28));
console.log(describeValue("28"));

// Exercise 3: Array with Union Type Elements
// Declare an array named mixedArray that can hold elements of type number | string.
// Initialize it with at least two numbers and two strings.
// Use a loop to iterate over the array and log each element's type (number or string) to the console.

const mixedArray: (number | string)[] = [4, "a", 7, "ty"];
console.log(mixedArray);

mixedArray.forEach((value) => console.log(value, typeof value));

// Exercise 4: Advanced Function with Union Type Parameters
// Write a function named processValues that takes two parameters of type number | string.
// The function should:
// If both parameters are numbers, return their product.
// If both parameters are strings, return their concatenation.
// If one parameter is a number and the other is a string, throw an error.
// Test the function with different combinations of values and log the results to the console.

function processValues(param1: number | string, param2: number | string) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 * param2;
  } else if (typeof param1 === "string" && typeof param2 === "string") {
    return param1 + param2;
  } else if (
    (typeof param1 === "number" && typeof param2 === "string") ||
    (typeof param1 === "string" && typeof param2 === "number")
  ) {
    throw new Error("Value Error");
  }
}
console.log(processValues(7, 9));
console.log(processValues("hello ", "world"));
// console.log(processValues("hello", 9));

// Exercise 5: Handling Union Types in Arrays
// Declare a function named filterNumbers that takes an array of number | string as a parameter and
// returns a new array containing only the numbers from the input array.
// Test the function with an array containing both numbers and strings and log the result to the console.

function filterNumbers(array: (number | string)[]) {
  const newArray = array.filter((val) => typeof val === "number");
  return newArray;
}

console.log(filterNumbers([3, "hello", 7, 9, "world", 2, "typescript"]));
