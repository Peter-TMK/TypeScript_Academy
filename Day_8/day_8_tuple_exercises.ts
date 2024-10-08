// Exercise 1: Basic Tuple Declaration and Initialization
// Declare a tuple named person that contains a string (name) and a number (age).
// Initialize it with the values "Alice" and 30. Log the person tuple to the console.

let person: [string, number];
person = ["Ade", 24];
console.log(person);

// Exercise 2: Tuple with Multiple Types
// Declare a tuple named product that contains a string (product name), number (price), and boolean (in stock).
// Initialize it with appropriate values and log the product tuple to the console.

let product: [string, number, boolean];
product = ["Phone", 230, true];
console.log(product);

// Exercise 3: Access and Modify Tuple Elements
// Using the person tuple from Exercise 1, log each element to the console separately.
// Then, change the age to 31 and log the updated person tuple to the console.

person.forEach((personValue) => console.log(personValue));
person[1] = 31;
person.forEach((personValue) => console.log(personValue));

// Exercise 4: Tuple with Optional Elements
// Declare a tuple named rectangle that contains two required number elements (width and height)
// and one optional number element (color code).
// Initialize it with values 50, 100, and log it to the console.
// Then, add a color code and log the updated rectangle tuple to the console.

let rectangle: [number, number, number?];
rectangle = [50, 100];
console.log(rectangle);

rectangle = [50, 100, 456];
console.log(rectangle);

// Exercise 5: Function Returning Tuple
// Create a function named getEmployee that returns a tuple containing a
// string (employee name) and a number (employee ID).
// Call the function and log the returned tuple to the console.

let myTuple: [string, number];
myTuple = ["Sam", 123];

function getEmployee() {
  return myTuple;
}
console.log(getEmployee());

// These exercises will help you practice declaring, initializing, accessing,
// modifying tuples, and working with optional elements in TypeScript.
