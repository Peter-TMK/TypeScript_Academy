// Exercise 1: Decimal Numbers
// Declare variables to hold different decimal numbers.
// Assign values to them and log the results to the console.

let counter: number = 0;
let binary: number = 0b010;
let octal: number = 0o10;
let hexadecimal: number = 0xa;
// let big: bigint = 9007199254740991n;

console.log(counter, binary, octal, hexadecimal);

// Exercise 2: Binary Numbers
// Declare variables to hold binary numbers.
// Assign values using the binary literal format and log the results to the console.

let binary2: number = 0b110;
console.log(binary2);

// Exercise 3: Octal and Hexadecimal Numbers
// Declare variables to hold octal and hexadecimal numbers.
// Assign values using the octal and hexadecimal literal formats and log the results to the console.

let octal2: number = 0o11;
let hexadecimal2: number = 0xb;

console.log(octal2, hexadecimal2);

// Exercise 4: Big Integers
// Declare variables to hold big integers.
// Assign values using the bigint literal format and log the results to the console.

let big2: bigint = 9007199254740992n;
console.log(big2);

// Exercise 5: TypeScript Errors with Number Types
// Try to assign a non-numeric value to a variable with a number type and observe the TypeScript error.
// Then, try to assign a numeric value to a variable with a bigint type and observe the TypeScript error.

let myNum: number = "delta";
console.log(myNum);

let big3: bigint = 900;
console.log(big3);

// tsc day_5_number_exercise.ts
// ts-node day_5_number_exercise.ts
