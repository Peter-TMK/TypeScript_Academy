// Exercise 1: Annotating Variables and Constants
// Annotate the following variables and constants with
// appropriate types based on their values:

// let cityName; // Type: string
// let population; // Type: number
// const isCapital; // Type: boolean

// cityName = "New York";
// population = 8419000;
// isCapital = false;

// Instructions:

// Add type annotations to cityName, population, and isCapital.
// Ensure the variables and constants have the correct types based on the values assigned to them.

// let cityName: string;
// let population: number;
// let isCapital: boolean;

// cityName = "New York";
// population = 8419000;
// isCapital = false;

/////////////////////////////////////////////////////////////

// Exercise 2: Fixing Type Errors
// The following TypeScript code contains type errors. Identify and correct the errors.

// let price: number = "19.99";
// let isAvailable: boolean = "yes";
// let productName: string = 12345;
// Instructions:

// Identify the type errors in the code.
// Correct the type errors to ensure the code compiles without issues.

// let price: string = "19.99";
// let isAvailable: boolean = true;
// let productName: number = 12345;

//////////////////////////////////////////////////////////

// Exercise 3: Annotating Arrays
// Declare and initialize arrays with appropriate type annotations for the following variables:

// An array of strings named fruits with values ["apple", "banana", "cherry"].
// An array of numbers named scores with values [90, 85, 100, 70].

// Instructions:

// Declare and annotate the fruits and scores arrays.
// Initialize the arrays with the specified values.

// let fruits: Array<string> = ["apple", "banana", "cherry"];
// let numArr: number[] = [90, 85, 100, 70];

// console.log(fruits, numArr);

////////////////////////////////////////////////////////

// Exercise 4: Annotating Objects
// Annotate the following object with appropriate types for its properties:

// let car;

// car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// Instructions:

// Define the type annotation for the car object to specify
// the types of make, model, and year.
// Ensure the car object is correctly typed and initialized.

type vehicleType = {
  make: string;
  model: string;
  year: number;
};

let car: vehicleType = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

console.log(car);

//////////////////////////////////////////////////////

// Exercise 5: Annotating Functions
// Write a TypeScript function named calculateTotal that takes two parameters,
// price and quantity, both of type number, and returns a number.
// Use type annotations for both the parameters and the return type.

// Instructions:

// Define the function with the appropriate parameter and return type annotations.
// Implement the function to calculate and return the total cost by multiplying price and quantity.
// Write a few test cases to demonstrate the function's usage and print the results.

// function calculateTotal(price: number, quantity: number): number {
//   const total = price * quantity;
//   console.log(total);
//   return total;
// }
// calculateTotal(50, 5);
