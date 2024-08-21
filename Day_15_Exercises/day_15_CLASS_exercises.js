// Exercise 1: Create a Student Class
// Create a Student class with the following properties:
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
// id: number
// firstName: string
// lastName: string
// grade: string
// Add a constructor to initialize these properties.
// Add a method getDetails() that returns a string with the student's
// full details in the format "ID: [id], Name: [firstName] [lastName], Grade: [grade]".
var Student = /** @class */ (function () {
    function Student(id, firstName, lastName, grade) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
    }
    Student.prototype.getDetails = function () {
        // return `ID: [id], Name: [firstName] [lastName], Grade: [grade]`
        return "ID: ".concat(this.id, ", Name: ").concat(this.firstName, " ").concat(this.lastName, ", Grade: ").concat(this.grade);
    };
    return Student;
}());
var student = new Student(5, "James", "Doe", "1");
console.log(student);
console.log(student.getDetails());
// Exercise 2: Create a Book Class
// Create a Book class with the following properties:
// title: string
// author: string
// isbn: string
// Add a constructor to initialize these properties.
// Add a method getBookInfo() that returns a string with the book's title, author, and ISBN in the format
// "Title: [title], Author: [author], ISBN: [isbn]".
var Book = /** @class */ (function () {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    Book.prototype.getBookInfo = function () {
        return "Title: ".concat(this.title, ", Author: ").concat(this.author, ", ISBN: ").concat(this.isbn);
    };
    return Book;
}());
var book = new Book("Harvey", "Chave", "12-21");
console.log(book);
console.log(book.getBookInfo());
// Exercise 3: Create an Employee Class with Private Properties
// Create an Employee class with the following private properties:
// id: number
// name: string
// salary: number
// Add a constructor to initialize these properties.
// Add methods getId(), getName(), and getSalary() to access these properties.
// Add a method increaseSalary(amount: number) to increase the employee's salary by a given amount.
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.get = function () {
        return this.id;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var employee = new Employee(2, "Akpan", 300000);
console.log(employee);
console.log(employee.get());
console.log(employee.getName());
console.log(employee.getSalary());
// Exercise 4: Create a BankAccount Class with Balance Check
// Create a BankAccount class with the following properties:
// accountNumber: string
// accountHolder: string
// balance: number
// Add a constructor to initialize these properties.
// Add methods deposit(amount: number) and withdraw(amount: number) to update the balance.
// Add a method getBalance() that returns the current balance.
// Ensure that the withdraw method does not allow withdrawing an amount greater than the current balance.
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        return (this.balance += amount);
    };
    BankAccount.prototype.withdraw = function (amount) {
        return (this.balance -= amount);
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var bankAccount = new BankAccount("12345", "Bave", 5500);
console.log(bankAccount);
console.log(bankAccount.deposit(500));
console.log(bankAccount.withdraw(100));
console.log(bankAccount.deposit(500));
console.log(bankAccount.withdraw(1700));
console.log(bankAccount.getBalance());
// Exercise 5: Create a Car Class with Inheritance
// Create a base Vehicle class with the following properties:
// make: string
// model: string
// year: number
// Add a constructor to initialize these properties.
// Add a method getDetails() that returns a string with the vehicle's details in the format
// "Make: [make], Model: [model], Year: [year]".
// Create a Car class that extends the Vehicle class and adds the following property:
// numDoors: number
// Add a constructor to initialize all properties, including those from the Vehicle class.
// Override the getDetails() method to include the number of doors in the format "Make: [make], Model: [model], Year: [year], Doors: [numDoors]".
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Vehicle.prototype.getDetails = function () {
        return "Make: ".concat(this.make, " Model: ").concat(this.model, " Year: ").concat(this.year);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, numDoors) {
        var _this = _super.call(this, make, model, year) || this;
        _this.numDoors = numDoors;
        return _this;
    }
    Car.prototype.getDetails = function () {
        return "Make: ".concat(this.make, " Model: ").concat(this.model, " Year: ").concat(this.year, " Doors: ").concat(this.numDoors);
    };
    return Car;
}(Vehicle));
var vehicle = new Vehicle("Honda", "H-2", 2024);
var car = new Car("Honda", "H-2", 2024, 6);
// console.log(vehicle);
console.log(vehicle.getDetails());
// console.log(car);
console.log(car.getDetails());
