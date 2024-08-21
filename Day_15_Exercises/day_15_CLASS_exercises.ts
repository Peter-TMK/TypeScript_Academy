// Exercise 1: Create a Student Class
// Create a Student class with the following properties:

// id: number
// firstName: string
// lastName: string
// grade: string
// Add a constructor to initialize these properties.

// Add a method getDetails() that returns a string with the student's
// full details in the format "ID: [id], Name: [firstName] [lastName], Grade: [grade]".

class Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: string;

  constructor(id: number, firstName: string, lastName: string, grade: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
  }

  getDetails(): string {
    // return `ID: [id], Name: [firstName] [lastName], Grade: [grade]`
    return `ID: ${this.id}, Name: ${this.firstName} ${this.lastName}, Grade: ${this.grade}`;
  }
}

let student = new Student(5, "James", "Doe", "1");
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

class Book {
  title: string;
  author: string;
  isbn: string;

  constructor(title: string, author: string, isbn: string) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
  getBookInfo(): string {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
  }
}

let book = new Book("Harvey", "Chave", "12-21");
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

class Employee {
  private id: number;
  private name: string;
  private salary: number;

  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
  get(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
}

let employee = new Employee(2, "Akpan", 300000);
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

class BankAccount {
  accountNumber: string;
  accountHolder: string;
  balance: number;

  constructor(accountNumber: string, accountHolder: string, balance: number) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }
  deposit(amount: number) {
    return (this.balance += amount);
  }
  withdraw(amount: number) {
    return (this.balance -= amount);
  }
  getBalance(): number {
    return this.balance;
  }
}

let bankAccount = new BankAccount("12345", "Bave", 5500);
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

class Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDetails(): string {
    return `Make: ${this.make} Model: ${this.model} Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  numDoors: number;

  constructor(make: string, model: string, year: number, numDoors: number) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
  getDetails(): string {
    return `Make: ${this.make} Model: ${this.model} Year: ${this.year} Doors: ${this.numDoors}`;
  }
}

let vehicle = new Vehicle("Honda", "H-2", 2024);
let car = new Car("Honda", "H-2", 2024, 6);
// console.log(vehicle);
console.log(vehicle.getDetails());
// console.log(car);
console.log(car.getDetails());
