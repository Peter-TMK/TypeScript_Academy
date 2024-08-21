// Exercise 1: Basic Intersection Type
// Create two interfaces, Car with properties make: string and model:
// string, and Engine with properties horsepower: number and type: string.

// Define an intersection type CarWithEngine that combines both Car and Engine.
// Then, create a variable of this intersection type and assign it an object with all the required properties.

// Exercise 2: Extending Intersection Types
// You have the following interfaces:

// Person with properties name: string and age: number.
// EmployeeDetails with properties position: string and salary: number.
// Create an intersection type Employee that combines both Person and EmployeeDetails.
// Then, extend this intersection type to create a new type Manager by adding an additional property department: string.

// Exercise 3: Combining Multiple Types
// Given three interfaces:

// Book with properties title: string and author: string.
// Publication with properties publisher: string and year: number.
// Availability with properties inStock: boolean and copiesAvailable: number.
// Combine all three interfaces into a single intersection type LibraryItem.
// Create a variable of this type and assign it an object with all the properties from the combined interfaces.

// Exercise 4: Intersection Type with Conflicting Properties
// Create two interfaces:

// Rectangle with properties width: number and height: number.
// Square with properties sideLength: number and width: number.
// Now, combine both interfaces into an intersection type RectangleSquare.
// What would be the result if you try to create an object of this type?
// Identify any potential issues with the width property and explain why.

// Exercise 5: Intersection Type with Functions
// Define two interfaces:

// Sender with a method sendMessage(message: string): void.
// Receiver with a method receiveMessage(): string.
// Create an intersection type Communicator that combines both Sender and Receiver.
// Then, implement a class CommunicationDevice that fulfills the Communicator type,
// ensuring the class can both send and receive messages.
