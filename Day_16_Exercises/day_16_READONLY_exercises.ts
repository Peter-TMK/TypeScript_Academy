// Exercise 1: Basic Readonly Property
// Define a class named Car with the following properties:

// readonly make: string
// readonly model: string
// readonly year: number
// Initialize these properties using the constructor parameters.
// Create an instance of the Car class and attempt to modify one of its properties to see the compile-time error.

class Car {
  constructor(
    readonly make: string,
    readonly model: string,
    readonly year: number
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const car = new Car("Honda", "12B", 2024);
console.log(car.make);
// car.make = "Benz"; // Cannot assign to 'make' because it is a read-only property
console.log(car.make);

// Exercise 2: Readonly Property in a Method
// Define a class named Rectangle with the following properties:

// readonly width: number
// readonly height: number
// Add a method getArea() that calculates and returns the area of the rectangle.
// Test the method by creating an instance of the Rectangle class and calling getArea().

class Rectangle {
  constructor(readonly width: number, readonly height: number) {
    this.width;
    this.height;
  }
  getArea() {
    return this.width * this.height;
  }
}
const rectangle = new Rectangle(4, 8);
console.log(rectangle.getArea());

// Exercise 3: Combining Readonly with Other Access Modifiers
// Define a class named Book with the following properties:

// readonly title: string
// private author: string
// public yearPublished: number
// Initialize these properties using the constructor parameters.
// Add a method getBookInfo() that returns a string containing the book's title, author, and year published.
// Test the method by creating an instance of the Book class and calling getBookInfo().

class Book {
  constructor(
    readonly title: string,
    private author: string,
    public yearPublished: number
  ) {
    this.title;
    this.author;
    this.yearPublished;
  }
  getBookInfo() {
    return `${this.title} ${this.author} ${this.yearPublished}`;
  }
}
const book = new Book("A new day", "Excel", 2023);
console.log(book);
console.log(book.getBookInfo());

// Exercise 4: Readonly Property in Derived Class
// Define a class named Employee with the following properties:

// readonly employeeId: number
// readonly name: string
// Create a subclass named Manager that extends Employee and adds the following property:

// readonly department: string
// Initialize all properties using the constructor parameters.
// Create an instance of the Manager class and display the values of its properties.

class Employee {
  constructor(readonly employeeId: number, readonly name: string) {
    this.employeeId = employeeId;
    this.name;
  }
}

class Manager extends Employee {
  readonly department: string;
  constructor(employeeId: number, name: string, department: string) {
    super(employeeId, name);
    this.department = department;
  }
}

const manager = new Manager(12, "Dev", "Tech");
console.log(manager.department);
console.log(manager.employeeId);
console.log(manager.name);

// Exercise 5: Consolidated Declaration and Initialization
// Define a class named Person with the following properties:

// readonly firstName: string
// readonly lastName: string
// readonly age: number
// Use the constructor to initialize these properties in a consolidated manner.
// Create an instance of the Person class and try to modify one of its properties to see the compile-time error.

class Person {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly age: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const person = new Person("Excel", "Dev", 18);
person.lastName = "Coder";
console.log(person);
