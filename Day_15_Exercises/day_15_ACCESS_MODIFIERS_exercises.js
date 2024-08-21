// Exercise 1: Private Properties
// Create a BankAccount class with the following private properties:
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
// accountNumber: string
// balance: number
// Add a constructor to initialize these properties.
// Add a public method deposit(amount: number) to update the balance.
// Add a public method getBalance() that returns the current balance.
// Attempt to access the balance property directly from outside the class and observe the compile-time error.
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        return (this.balance += amount);
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var bankAccount = new BankAccount("1234", 700);
console.log(bankAccount.deposit(350));
console.log(bankAccount.getBalance());
// console.log(bankAccount.balance);
// Exercise 2: Protected Properties
// Create a Person class with the following properties:
// protected firstName: string
// protected lastName: string
// Add a constructor to initialize these properties.
// Create a Student class that extends the Person class and adds a public method getFullName() which returns
// the full name by accessing the protected properties.
// Instantiate a Student object and call the getFullName() method.
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    Student.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Student;
}(Person));
var student = new Student("Dev", "on");
console.log(student.getFullName());
// Exercise 3: Public Methods
// Create an Employee class with the following properties:
// private id: number
// private name: string
// public salary: number
// Add a constructor to initialize these properties.
// Add a public method getDetails() that returns a string with the employee's details including the salary.
// Instantiate an Employee object and call the getDetails() method to print the employee details.
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.id;
        this.name;
        this.salary;
    }
    Employee.prototype.getDetails = function () {
        return "".concat(this.id, " ").concat(this.name, " ").concat(this.salary);
    };
    return Employee;
}());
var employee = new Employee(123, "Lorry", 234);
console.log(employee.getDetails());
// Exercise 4: Access Modifiers in Constructor
// Create a Car class with the following properties:
// private make: string
// private model: string
// protected year: number
// Use the constructor to initialize these properties.
// Add a public method getCarDetails() that returns the car's make, model, and year.
// Create a SportsCar class that extends Car and adds a public method getCarYear() that returns the car's year.
// Instantiate a SportsCar object and call both getCarDetails() and getCarYear() methods.
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarDetails = function () {
        return "".concat(this.make, " ").concat(this.model, " ").concat(this.year);
    };
    return Car;
}());
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar(make, model, year) {
        return _super.call(this, make, model, year) || this;
    }
    SportsCar.prototype.getCarYear = function () {
        return "".concat(this.year);
    };
    return SportsCar;
}(Car));
var sportsCar = new SportsCar("Honda", "abc", 123);
console.log(sportsCar.getCarDetails());
console.log(sportsCar.getCarYear());
// Exercise 5: Mixed Access Modifiers
// Create a LibraryBook class with the following properties:
// private title: string
// protected author: string
// public isbn: string
// Use the constructor to initialize these properties.
// Add a public method getBookInfo() that returns the book's title and ISBN.
// Add a protected method getAuthor() that returns the book's author.
// Create a Library class that contains a method printBookDetails(book: LibraryBook) which accesses
// the public and protected methods of LibraryBook.
// Instantiate a LibraryBook object and use the Library class to print its details.
var LibraryBook = /** @class */ (function () {
    function LibraryBook(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.title;
        this.author;
        this.isbn;
    }
    LibraryBook.prototype.getBookInfo = function () {
        return "".concat(this.title, " ").concat(this.isbn);
    };
    LibraryBook.prototype.getAuthor = function () {
        return "".concat(this.author);
    };
    return LibraryBook;
}());
var Library = /** @class */ (function () {
    function Library() {
    }
    Library.prototype.printBookDetails = function (book) {
        console.log(book.getBookInfo());
    };
    return Library;
}());
var libraryBook = new LibraryBook("ABC", "DEV", "1234");
var library = new Library();
library.printBookDetails(libraryBook);
