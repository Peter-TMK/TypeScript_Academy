// Exercise 1: Basic Intersection Type
// Create two interfaces, Car with properties make: string and model:
// string, and Engine with properties horsepower: number and type: string.

// Define an intersection type CarWithEngine that combines both Car and Engine.
// Then, create a variable of this intersection type and assign it an object with all the required properties.

interface Car {
  make: string;
  model: string;
}

interface Engine {
  horsepower: number;
  type: string;
}

type Car_Engine = Car & Engine;

let carEngine: Car_Engine = {
  make: "Honda",
  model: "12-R",
  horsepower: 23,
  type: "Saloon",
};

console.log(carEngine);

// Exercise 2: Extending Intersection Types
// You have the following interfaces:

// Person with properties name: string and age: number.
// EmployeeDetails with properties position: string and salary: number.
// Create an intersection type Employee that combines both Person and EmployeeDetails.
// Then, extend this intersection type to create a new type Manager by adding an additional property department: string.

interface Person {
  name: string;
  age: number;
}

interface EmployeeDetails {
  position: string;
  salary: number;
}

type Employee = Person & EmployeeDetails;

type Manager = Employee & { department: string };

const manager: Manager = {
  name: "Alice",
  age: 35,
  position: "IT Manager",
  salary: 80000,
  department: "Information Technology",
};

console.log(manager);

// Exercise 3: Combining Multiple Types
// Given three interfaces:

// Book with properties title: string and author: string.
// Publication with properties publisher: string and year: number.
// Availability with properties inStock: boolean and copiesAvailable: number.
// Combine all three interfaces into a single intersection type LibraryItem.
// Create a variable of this type and assign it an object with all the properties from the combined interfaces.

interface Book {
  title: string;
  author: string;
}

interface Publication {
  publisher: string;
  year: number;
}

interface Availability {
  inStock: boolean;
  copiesAvailable: number;
}

type LibraryItem = Book & Publication & Availability;

let libraryItem: LibraryItem = {
  title: "A new era",
  author: "Excel",
  publisher: "A-Z",
  year: 2024,
  inStock: true,
  copiesAvailable: 120,
};

console.log(libraryItem);

// Exercise 4: Intersection Type with Conflicting Properties
// Create two interfaces:

// Rectangle with properties width: number and height: number.
// Square with properties sideLength: number and width: number.
// Now, combine both interfaces into an intersection type RectangleSquare.
// What would be the result if you try to create an object of this type?
// Identify any potential issues with the width property and explain why.

interface Rectangle {
  width: number;
  height: number;
}

interface Square {
  sideLength: number;
  width: number;
}

type RectangleSquare = Rectangle & Square;

let rectangleSquare: RectangleSquare = {
  width: 5,
  height: 6,
  sideLength: 2,
};

console.log(rectangleSquare);

// Exercise 5: Intersection Type with Functions
// Define two interfaces:

// Sender with a method sendMessage(message: string): void.
// Receiver with a method receiveMessage(): string.
// Create an intersection type Communicator that combines both Sender and Receiver.
// Then, implement a class CommunicationDevice that fulfills the Communicator type,
// ensuring the class can both send and receive messages.

interface Sender {
  sendMessage(message: string): void;
}

interface Receiver {
  receiveMessage(): string;
}

type Communicator = Sender & Receiver;

class CommunicationDevice implements Communicator {
  private message: string = "";

  sendMessage(message: string): void {
    this.message = message;
    console.log(message);
  }
  receiveMessage(): string {
    return this.message;
  }
}

let communicationDevice = new CommunicationDevice();
communicationDevice.sendMessage("Hey Engineer!");
console.log(communicationDevice.receiveMessage());
