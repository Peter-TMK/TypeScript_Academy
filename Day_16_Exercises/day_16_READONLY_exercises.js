// Exercise 1: Basic Readonly Property
// Define a class named Car with the following properties:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// readonly make: string
// readonly model: string
// readonly year: number
// Initialize these properties using the constructor parameters.
// Create an instance of the Car class and attempt to modify one of its properties to see the compile-time error.
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.make = make;
        this.model = model;
        this.year = year;
    }
    return Car;
}());
var car = new Car("Honda", "12B", 2024);
console.log(car.make);
// car.make = "Benz"; // Cannot assign to 'make' because it is a read-only property
console.log(car.make);
// Exercise 2: Readonly Property in a Method
// Define a class named Rectangle with the following properties:
// readonly width: number
// readonly height: number
// Add a method getArea() that calculates and returns the area of the rectangle.
// Test the method by creating an instance of the Rectangle class and calling getArea().
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width;
        this.height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(4, 8);
console.log(rectangle.getArea());
// Exercise 3: Combining Readonly with Other Access Modifiers
// Define a class named Book with the following properties:
// readonly title: string
// private author: string
// public yearPublished: number
// Initialize these properties using the constructor parameters.
// Add a method getBookInfo() that returns a string containing the book's title, author, and year published.
// Test the method by creating an instance of the Book class and calling getBookInfo().
var Book = /** @class */ (function () {
    function Book(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.title;
        this.author;
        this.yearPublished;
    }
    Book.prototype.getBookInfo = function () {
        return "".concat(this.title, " ").concat(this.author, " ").concat(this.yearPublished);
    };
    return Book;
}());
var book = new Book("A new day", "Excel", 2023);
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
var Employee = /** @class */ (function () {
    function Employee(employeeId, name) {
        this.employeeId = employeeId;
        this.name = name;
        this.employeeId = employeeId;
        this.name;
    }
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(employeeId, name, department) {
        var _this = _super.call(this, employeeId, name) || this;
        _this.department = department;
        return _this;
    }
    return Manager;
}(Employee));
var manager = new Manager(12, "Dev", "Tech");
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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Person;
}());
var person = new Person("Excel", "Dev", 18);
person.lastName = "Coder";
console.log(person);
