// Exercise 1: Primitive Type Alias
// Define a type alias ID for the number type.
// Create a variable userID of type ID and assign it a value.
// Log the userID to the console.

type ID = number;

const userID: ID = 12;
console.log(userID);

// Exercise 2: Object Type Alias
// Create a type alias Product for an object type with the following properties:
// name (string), price (number), and inStock (boolean).
// Declare a variable product of type Product and assign it an appropriate value.
// Log the product to the console.

type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

const product: Product = {
  name: "Hello",
  price: 5,
  inStock: true,
};

console.log(product);

// Exercise 3: Union Type Alias
// Define a type alias StringOrNumber for the union type string | number.
// Create a variable value of type StringOrNumber and assign it different valid values.
// Log the value to the console.

type StringOrNumber = string | number;

let stringOrNumber: StringOrNumber;

stringOrNumber = "hello";
console.log(stringOrNumber);

stringOrNumber = 2;
console.log(stringOrNumber);

// Exercise 4: Intersection Type Alias
// Create two type aliases, Address and GeoLocation, where Address has properties street (string)
// and city (string), and GeoLocation has properties latitude (number) and longitude (number).
// Create a type alias Location using intersection of Address and GeoLocation.
// Declare a variable officeLocation of type Location and assign it an appropriate value.
// Log the officeLocation to the console.

type Address = {
  street: string;
  city: string;
};

type GeoLocation = {
  latitude: number;
  longitude: number;
};

type Location = Address & GeoLocation;

const officeLocation: Location = {
  street: "Lagos Island",
  city: "Lagos",
  latitude: 19.5,
  longitude: 18.9,
};

console.log(officeLocation);

// Exercise 5: Function Type Alias
// Define a type alias Operation for a function type that takes two numbers as parameters and returns a number.
// Create two functions add and multiply that match the Operation type.
// Test these functions and log the results to the console.

type Operation = (val1: number, val2: number) => number;

const add: Operation = (val1, val2) => val1 + val2;
const multiply: Operation = (val1, val2) => val1 * val2;
const subtract: Operation = function (val1, val2) {
  return val2 - val1;
};

console.log(add(3, 6));
console.log(multiply(3, 6));
console.log(subtract(3, 6));
