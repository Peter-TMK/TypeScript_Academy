// Exercise 1: Interface for a Car
// Define an interface Car with the following properties:

// make: string
// model: string
// year: number
// electric?: boolean (optional)
// Create a function getCarInfo(car: Car): string that returns a string
// containing the car's make, model, and year.
// If the car is electric, include that information in the returned string.

// Exercise 2: Interface for a User
// Define an interface User with the following properties:

// id: number
// username: string
// email: string
// password: string
// Create a function createUser(user: User): string that returns a string
// confirming the creation of the user with their username.

// Exercise 3: Read-Only Interface for a Book
// Define an interface Book with the following properties:

// title: string
// author: string
// isbn: readonly string
// Create a function getBookInfo(book: Book): string that returns a string
// containing the book's title, author, and ISBN.
// Attempt to modify the isbn property within the function and observe the TypeScript error.

// Exercise 4: Function Type Interface for Logging
// Define an interface Logger that describes a function type with the following signature:

// (message: string, level: string): void
// Create a function logMessage: Logger that logs the message and level to the console.
// Use this function to log different messages with different levels (e.g., "info", "warning", "error").

// Exercise 5: Class Type Interface for a Product
// Define an interface Product with the following properties:

// name: string
// price: number
// Define a method display(): string in the interface.

// Create a class StoreProduct that implements the Product interface and the display() method.
// The display() method should return a string containing the product's name and price.
// Instantiate the StoreProduct class and call the display() method.
