// Exercise 1: Concatenate Strings
// Write a function named concatenateStrings that takes any number of string arguments
// and concatenates them into a single string. The function should return the concatenated string.

function concatenateStrings(...strings: string[]): string {
  let merged = "";
  strings.forEach((str) => (merged += str));
  return merged;
}
console.log(concatenateStrings("a", "b", "c", "d", "e"));
console.log(concatenateStrings("f", "g", "h", "i", "j"));

// Exercise 2: Find Maximum Number
// Write a function named findMax that takes any number of numeric arguments and
// returns the maximum value among them. If no arguments are provided, the function should return undefined.

function findMax(...numbers: number[]): number {
  let maxNum = numbers[0];
  for (let i = 0; i <= maxNum; i++) {
    if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}
console.log(findMax(4, 7, 2, 11));

// Exercise 3: Multiply Numbers
// Write a function named multiplyNumbers that takes any number of numeric arguments and
// returns the product of all the numbers. If no arguments are provided, the function should return 1.

function multiplyNumbers(...numbers: number[]): number {
  let numProduct = 1;
  for (let i = 0; i < numbers.length; i++) {
    numProduct *= numbers[i];
  }
  return numProduct;
}
console.log(multiplyNumbers(2, 11));

// Exercise 4: Filter Numbers and Strings
// Write a function named filterNumbersAndStrings that takes any number of arguments of type number or string.
// The function should return an object with two properties:
// numbers (an array of all the numeric arguments) and strings (an array of all the string arguments).

function filterNumbersAndStrings(...vals: (number | string)[]) {
  let numArray: number[] = [];
  let strArray: string[] = [];
  vals.forEach((val) => {
    if (typeof val === "number") {
      numArray.push(val);
    }
    if (typeof val === "string") {
      strArray.push(val);
    }
  });
  return [numArray, strArray];
}
const [numArray, strArray] = filterNumbersAndStrings(
  3,
  "Happy",
  2,
  1,
  " New Year"
);

console.log({ numArray });
console.log({ strArray });

// Exercise 5: Sum and Concatenate
// Write a function named sumAndConcatenate that takes any number of arguments of type number or string.
// The function should return an object with two properties:
// sum (the sum of all the numeric arguments) and concatenatedString (the concatenation of all the string arguments).

function sumAndConcatenate(...vals: (number | string)[]): [number, string] {
  let numSum = 0;
  let strMerge = "";
  vals.forEach((val) => {
    if (typeof val === "number") {
      numSum += val;
    }
    if (typeof val === "string") {
      strMerge += val;
    }
  });
  return [numSum, strMerge];
}

const [numSum, strMerge] = sumAndConcatenate(3, "Happy", 2, 1, " New Year");

console.log({ numSum });
console.log({ strMerge });

// Instructions:
// Define each function with appropriate type annotations for parameters and return types.
// Implement the logic as described in each exercise.
// Test each function with different inputs to ensure they work as expected.
// Ensure that rest parameters are correctly handled and that the function behavior changes appropriately
// based on the number and type of arguments provided.
// Feel free to ask if you need any help or further clarification on these exercises!

// function combine(...args: (number | string)[]): [number, string] {
//   let total = 0;
//   let str = "";
//   args.forEach((arg) => {
//     if (typeof arg === "number") {
//       total += arg;
//     } else if (typeof arg === "string") {
//       str += arg;
//     }
//   });

//   return [total, str];
// }

// const [total, str] = combine(3, "Happy", 2, 1, " New Year");

// console.log({ total });
// console.log({ str });
