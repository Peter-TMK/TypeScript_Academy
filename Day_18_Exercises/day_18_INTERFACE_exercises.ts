// Exercise 1: Interface for a Car
// Define an interface Car with the following properties:

// make: string
// model: string
// year: number
// electric?: boolean (optional)
// Create a function getCarInfo(car: Car): string that returns a string
// containing the car's make, model, and year.
// If the car is electric, include that information in the returned string.

interface ICar {
  make: string;
  model: string;
  year: number;
  electric?: boolean;
}

function getCarInfo(car: ICar): string {
  if (car.electric) {
    return `${car.make} ${car.model} ${car.year} ${car.electric}`;
  }
  return `${car.make} ${car.model} ${car.year}`;
}
// console.log(getCarInfo({"Honda", "11-BS", 2024, True}));
console.log(
  getCarInfo({ make: "Honda", model: "11-BS", year: 2024, electric: true })
);
console.log(
  getCarInfo({ make: "Honda", electric: false, model: "11-BS", year: 2024 })
);
console.log(getCarInfo({ make: "Honda", model: "11-BS", year: 2024 }));

// Exercise 2: Interface for a User
// Define an interface User with the following properties:

// id: number
// username: string
// email: string
// password: string
// Create a function createUser(user: User): string that returns a string
// confirming the creation of the user with their username.

interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
}

function createUser(user: IUser): string {
  return `${user.id} ${user.username} ${user.email} ${user.password}`;
}

console.log(
  createUser({
    id: 1,
    username: "Excel",
    email: "Excel@g.co",
    password: "naso",
  })
);

// Exercise 3: Read-Only Interface for a Book
// Define an interface Book with the following properties:

// title: string
// author: string
// isbn: readonly string
// Create a function getBookInfo(book: Book): string that returns a string
// containing the book's title, author, and ISBN.
// Attempt to modify the isbn property within the function and observe the TypeScript error.

interface IBook {
  title: string;
  author: string;
  readonly isbn: string;
}
const getBookInfo = (book: IBook): string => {
  //   book.isbn = "12-78";
  return `${book.title} ${book.author} ${book.isbn}`;
};

console.log(
  getBookInfo({ title: "A New Day", author: "Excel", isbn: "123-45" })
);

// Exercise 4: Function Type Interface for Logging
// Define an interface Logger that describes a function type with the following signature:

// (message: string, level: string): void
// Create a function logMessage: Logger that logs the message and level to the console.
// Use this function to log different messages with different levels (e.g., "info", "warning", "error").

interface ILogger {
  (message: string, level: string): void;
}
const logger: ILogger = (message: string, level: string): void => {
  console.log(`[${message}]: ${level}`);
};

logger("System started successfully.", "info");
logger("Low disk space warning.", "warning");
logger("Unhandled exception occurred.", "error");

// Exercise 5: Class Type Interface for a Product
// Define an interface Product with the following properties:

// name: string
// price: number
// Define a method display(): string in the interface.

// Create a class StoreProduct that implements the Product interface and the display() method.
// The display() method should return a string containing the product's name and price.
// Instantiate the StoreProduct class and call the display() method.

interface IProduct {
  name: string;
  price: number;
  display(): string;
}

class StoreProduct implements IProduct {
  constructor(public name: string, public price: number) {}
  display(): string {
    return `${this.name} ${this.price}`;
  }
}

let storeProduct = new StoreProduct("Hello", 4);
console.log(storeProduct.display());
